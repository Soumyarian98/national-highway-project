import { useEffect } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ganttData } from "./data";
import { Task } from "./types";
import LeftPanelContent from "./left-panel-content";
import RightPanelContent from "./right-panel-content";
import useGanttState from "./hook/use-gantt-state";
import { Button } from "../ui/button";
import { Expand, Minimize } from "lucide-react";
import useRowState from "./hook/use-row-state";
import useRowSelectState from "./hook/use-row-select-state";
import TaskUpsertButton from "./toolbar/task-upsert-button";
import useTasks from "./hook/use-tasks";
import TaskDeleteButton from "./toolbar/task-delete-button";

interface GanttProps {
  tasks: Task[];
}

const Gantt = ({ tasks: initialTasks }: GanttProps) => {
  const { tasks, setTasks } = useTasks();
  const { selectedRow } = useRowSelectState();
  const { expandAll, collapseAll, setOpenCloseState } = useRowState();
  const { rangeType, onRangeTypeChange } = useGanttState();
  const startDay = new Date("2024-05-25");
  const endDay = new Date("2025-01-01");

  useEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  useEffect(() => {
    const getAllIds = (tasks: any) => {
      let allTasks: any[] = [];
      tasks.forEach((task: any) => {
        if (task.subTasks.length > 0) {
          allTasks = allTasks.concat(getAllIds(task.subTasks));
        }
        allTasks.push(task.id);
      });
      return allTasks.flat();
    };
    setOpenCloseState(
      getAllIds(ganttData).reduce((acc, curr) => {
        return { ...acc, [curr]: false };
      }, {})
    );
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Button variant="ghost" onClick={expandAll} size="sm">
            <Expand size={16} className="mr-2" />
            Expand All
          </Button>
          <Button variant="ghost" onClick={collapseAll} size="sm">
            <Minimize size={16} className="mr-2" />
            Collpase All
          </Button>
          {selectedRow && (
            <>
              <TaskUpsertButton mode="add" />
              <TaskUpsertButton mode="edit" />
              <TaskDeleteButton />
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Select
            value={rangeType}
            onValueChange={v =>
              onRangeTypeChange(v as "day" | "week" | "month")
            }>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Zoom Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Day</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full">
        <ResizablePanelGroup direction="horizontal" className="border">
          <ResizablePanel defaultSize={30}>
            <LeftPanelContent tasks={tasks} />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <RightPanelContent
              tasks={tasks}
              startDay={startDay}
              endDay={endDay}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Gantt;
