import { create } from "zustand";
import { Task } from "../types";

interface Tasks {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task, parentPath: string[]) => void;
  deleteTask: (id: string, parentPath: string[]) => void;
}

const useTasks = create<Tasks>(set => ({
  tasks: [],
  setTasks: tasks => set({ tasks }),
  addTask: (task, parentPath) =>
    set(state => {
      let updatedTasks = state.tasks;
      let parentTasks = state.tasks;
      parentPath.forEach(id => {
        const parentTask = parentTasks.find(t => t.id === id);
        if (!parentTask) return;
        parentTasks = parentTask.subTasks;
      });
      parentTasks.push(task);
      return { tasks: updatedTasks };
    }),
  deleteTask: (id, parentPath) =>
    set(state => {
      let updatedTasks = state.tasks;
      let parentTasks = state.tasks;
      parentPath.forEach(id => {
        const parentTask = parentTasks.find(t => t.id === id);
        if (!parentTask) return;
        parentTasks = parentTask.subTasks;
      });
      parentTasks = parentTasks.filter(t => t.id !== id);
      return { tasks: updatedTasks };
    }),
}));

export default useTasks;
