import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { ganttData } from "./data";
import { Task } from "./types";
import LeftPanelContent from "./left-panel-content";
import RightPanelContent from "./right-panel-content";

interface GanttProps {
  tasks: Task[];
}

const Gantt = ({ tasks }: GanttProps) => {
  const startDay = new Date("2024-05-25");
  const endDay = new Date("2025-01-01");

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

  const [openCloseState, setOpenCloseState] = useState<{
    [key: string]: boolean;
  }>(
    getAllIds(ganttData).reduce((acc, curr) => {
      return { ...acc, [curr]: false };
    }, {})
  );

  return (
    <div className="w-full flex flex-col">
      {/* <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold"></h1>
        <div className="flex items-center gap-4">
          <Select
            value={zoomLevel}
            onValueChange={v => setZoomLevel(v as "day" | "week" | "month")}>
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
      </div> */}
      <div className="w-full">
        <ResizablePanelGroup direction="horizontal" className="border">
          <ResizablePanel defaultSize={30}>
            <LeftPanelContent
              tasks={tasks}
              rowCollapseState={openCloseState}
              toggleRowCollapse={id =>
                setOpenCloseState({
                  ...openCloseState,
                  [id]: !openCloseState[id],
                })
              }
            />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <RightPanelContent
              tasks={tasks}
              startDay={startDay}
              endDay={endDay}
              rowCollapseState={openCloseState}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Gantt;
