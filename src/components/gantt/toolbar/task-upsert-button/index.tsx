import { useMemo } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralTabContent from "./general-tab-content";
import ResourcesTabContent from "./resources-tab-content";
import useRowSelectState from "../../hook/use-row-select-state";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Task } from "../../types";
import { UseFormReturn, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import useTasks from "../../hook/use-tasks";
import { format } from "date-fns";

interface AddTaskButtonProps {
  tasks: Task[];
  mode: "add" | "edit";
}

const formSchema = z.object({
  title: z.string().min(2).max(50).nonempty(),
  startDate: z.string().nonempty(),
  endDate: z.string().nonempty(),
  description: z.string(),
});

export type UpersertTaskFormType = UseFormReturn<z.infer<typeof formSchema>>;

const TaskUpsertButton = ({ tasks }: AddTaskButtonProps) => {
  const { parentPath, selectedRow } = useRowSelectState();
  const { addTask } = useTasks();

  const task = useMemo(() => {
    if (!selectedRow) return null;
    let updatedTasks = tasks;
    let selectedTask: Task | null = null;
    [...parentPath, selectedRow].forEach(id => {
      const task = updatedTasks.find(t => t.id === id);
      if (!task) return;
      updatedTasks = task.subTasks;
      selectedTask = task;
    });
    return selectedTask;
  }, [selectedRow, parentPath, tasks]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const task: Task = {
      id: Math.random().toString(),
      parentPath: [...parentPath, selectedRow],
      title: values.title,
      startDate: format(new Date(values.startDate), "yyyy-MM-dd"),
      endDate: format(new Date(values.endDate), "yyyy-MM-dd"),
      subTasks: [],
    };
    addTask(task, [...parentPath, selectedRow]);
  }

  if (!task) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Plus size={16} className="mr-2" />
          Add New Task
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[50vw]">
        <DialogHeader>
          <DialogTitle className="font-bold">Create Task</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="assign-user">Assign User</TabsTrigger>
          </TabsList>
          <Form {...form}>
            <TabsContent value="general">
              <GeneralTabContent form={form} />
            </TabsContent>
            <TabsContent value="assign-user">
              <ResourcesTabContent />
            </TabsContent>
          </Form>
        </Tabs>
        <DialogFooter className="mt-4">
          <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskUpsertButton;
