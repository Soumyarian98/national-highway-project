import { format } from "date-fns";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import GeneralTabContent from "./general-tab-content";
import { Form } from "@/components/ui/form";

import useRowSelectState from "@/components/gantt/hook/use-row-select-state";
import useTasks from "@/components/gantt/hook/use-tasks";
import { Task } from "@/components/gantt/types";
import { useRef } from "react";
import { toast } from "sonner";

interface Props {
  parentTitles: string[];
  task?: Task;
}

const formSchema = z.object({
  title: z.string().min(2).max(50).nonempty(),
  startDate: z.string().nonempty(),
  endDate: z.string().nonempty(),
  description: z.string(),
});

export type UpersertTaskFormType = UseFormReturn<z.infer<typeof formSchema>>;

const UpsertButtonContent = ({ task, parentTitles }: Props) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { parentPath, selectedRow } = useRowSelectState();
  const { addTask, editTask } = useTasks();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: task ? task.title : "",
      startDate: task ? task.startDate : "",
      endDate: task ? task.endDate : "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (task) {
      const updatedTask: Task = {
        ...task,
        title: values.title,
        startDate: format(new Date(values.startDate), "yyyy-MM-dd"),
        endDate: format(new Date(values.endDate), "yyyy-MM-dd"),
      };
      editTask(updatedTask);
      toast.success("Task updated successfully");
    } else {
      const newTask: Task = {
        id: Math.random().toString(),
        parentPath: [...parentPath, selectedRow],
        title: values.title,
        startDate: format(new Date(values.startDate), "yyyy-MM-dd"),
        endDate: format(new Date(values.endDate), "yyyy-MM-dd"),
        subTasks: [],
      };
      addTask(newTask, [...parentPath, selectedRow]);
      toast.success("Task added successfully");
    }
    closeRef.current?.click();
  }

  return (
    <DialogContent className="min-w-[50vw]">
      <DialogHeader>
        <DialogTitle className="font-bold">
          {task ? "Update Task" : "Add New Task"}
        </DialogTitle>
        <DialogDescription>
          {parentTitles.length > 0 ? parentTitles.join(" > ") : "Root"}
          {">"}
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <GeneralTabContent form={form} />
      </Form>

      {/* <Tabs defaultValue="general">
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
        </Tabs> */}
      <DialogFooter className="mt-4">
        <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
          {task ? "Update" : "Create"}
        </Button>
      </DialogFooter>
      <DialogClose ref={closeRef} />
    </DialogContent>
  );
};

export default UpsertButtonContent;
