import { useMemo } from "react";
import { Pen, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import UpsertButtonContent from "./upsert-buttom-content";

import useRowSelectState from "../../hook/use-row-select-state";
import useTasks from "../../hook/use-tasks";
import { Task } from "../../types";

type UpsertTaskButtonProps = {
  mode: "add" | "edit";
};

const TaskUpsertButton = ({ mode }: UpsertTaskButtonProps) => {
  const { parentPath, selectedRow, setSelectedRow } = useRowSelectState();
  const { tasks } = useTasks();

  const taskData = useMemo(() => {
    if (!selectedRow) return null;
    let updatedTasks = tasks;

    let selectedTask: Task | null = null;
    let parentTitles: string[] = [];

    [...parentPath, selectedRow].forEach(id => {
      const task = updatedTasks.find(t => t.id === id);
      if (!task) return;
      parentTitles.push(task.title);
      updatedTasks = task.subTasks;
      selectedTask = task;
    });
    return { task: selectedTask, parentTitles };
  }, [selectedRow, parentPath, tasks]);

  const onClose = (value: boolean) => {
    if (value) return;
    setSelectedRow("", []);
  };

  if (!taskData || !taskData.task) return null;

  const { parentTitles, task } = taskData;

  return (
    <Dialog onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          {mode === "add" ? (
            <Plus size={16} className="mr-2" />
          ) : (
            <Pen size={16} className="mr-2" />
          )}
          {mode === "add" ? "Add New Task" : "Edit Task"}
        </Button>
      </DialogTrigger>
      {mode === "add" ? (
        <UpsertButtonContent parentTitles={parentTitles} />
      ) : (
        <UpsertButtonContent parentTitles={parentTitles} task={task} />
      )}
    </Dialog>
  );
};

export default TaskUpsertButton;
