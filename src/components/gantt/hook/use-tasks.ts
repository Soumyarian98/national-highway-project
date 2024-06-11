import { create } from "zustand";

import { Task } from "../types";

interface Tasks {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task, parentPath: string[]) => void;
  editTask: (task: Task) => void;
  deleteTask: (id: string, parentPath: string[]) => void;
}

const useTasks = create<Tasks>(set => ({
  tasks: [],
  setTasks: tasks => set({ tasks }),
  addTask: (task, parentPath) =>
    set(state => {
      let updatedTasks = state.tasks;
      let parentTasks = updatedTasks;
      parentPath.forEach(id => {
        const parentTask = parentTasks.find(t => t.id === id);
        if (!parentTask) return;
        parentTasks = parentTask.subTasks;
      });
      parentTasks.push(task);
      return { tasks: updatedTasks };
    }),
  editTask: task =>
    set(state => {
      let updatedTasks = state.tasks;
      let parentTasks = updatedTasks;
      task.parentPath.forEach(id => {
        const parentTask = parentTasks.find(t => t.id === id);
        if (!parentTask) return;
        parentTasks = parentTask.subTasks;
      });
      const index = parentTasks.findIndex(t => t.id === task.id);
      parentTasks[index] = task;
      return { tasks: updatedTasks };
    }),
  deleteTask: (id, parentPath) => {
    if (parentPath.length === 0) {
      return set(state => ({
        tasks: state.tasks.filter(t => String(t.id) !== String(id)),
      }));
    }
    return set(state => {
      let updatedTasks = state.tasks;
      let parentTasks = updatedTasks;
      parentPath.forEach(id => {
        const parentTask = parentTasks.find(t => t.id === id);
        if (!parentTask) return;
        parentTasks = parentTask.subTasks;
      });
      const index = parentTasks.findIndex(t => t.id === id);
      parentTasks.splice(index, 1);
      return { tasks: updatedTasks };
    });
  },
}));

export default useTasks;
