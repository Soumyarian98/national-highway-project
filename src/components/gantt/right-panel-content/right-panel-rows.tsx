import { TableRow } from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { Task } from "../types";
import { differenceInDays } from "date-fns";
import { Fragment } from "react/jsx-runtime";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RightPanelRowsProps {
  tasks: Task[];
  startDay: Date;
  rowCollapseState: {
    [key: string]: boolean;
  };
}

const RightPanelRows = ({
  tasks,
  startDay,
  rowCollapseState,
}: RightPanelRowsProps) => {
  return tasks.map(g => {
    const startGap = differenceInDays(startDay, new Date(g.startDate));
    const duration = differenceInDays(
      new Date(g.startDate),
      new Date(g.endDate)
    );

    return (
      <Fragment key={g.id}>
        <TableRow className="h-12 relative">
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <div
                  style={{
                    left: Math.abs(startGap) * 48.8,
                    width: (Math.abs(duration) + 1) * 48.8,
                  }}
                  className="bg-primary text-sm text-primary-foreground px-2 py-1 rounded-md absolute top-1/2 -translate-y-1/2 overflow-hidden whitespace-nowrap text-ellipsis"
                  onClick={() => toast({ title: g.title })}>
                  {g.title}
                </div>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p className="font-bold">
                  {(Math.random() * 1000 + 100).toFixed(2)} Crore
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </TableRow>
        {g.subTasks.length && rowCollapseState[g.id] ? (
          <RightPanelRows
            tasks={g.subTasks}
            startDay={startDay}
            rowCollapseState={rowCollapseState}
          />
        ) : null}
      </Fragment>
    );
  });
};

export default RightPanelRows;