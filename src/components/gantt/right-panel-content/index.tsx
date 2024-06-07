import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Task } from "../types";
import {
  eachDayOfInterval,
  eachMonthOfInterval,
  eachWeekOfInterval,
  format,
} from "date-fns";
import RightPanelRows from "./right-panel-rows";
import { useMemo } from "react";
import useGanttState from "../hook/use-gantt-state";
import useRowState from "../hook/use-row-state";

interface RightPanelContentProps {
  tasks: Task[];
  startDay: Date;
  endDay: Date;
}

const RightPanelContent = ({
  endDay,
  startDay,
  tasks,
}: RightPanelContentProps) => {
  const { openCloseState } = useRowState();
  const { rangeType } = useGanttState();
  const allDays = eachDayOfInterval({ start: startDay, end: endDay });
  const weeks = eachWeekOfInterval(
    { start: startDay, end: endDay },
    { weekStartsOn: 1 }
  );
  const months = eachMonthOfInterval({ start: startDay, end: endDay });

  const monthStartDateEndDate = useMemo(() => {
    if (rangeType === "day") {
      return allDays.reduce((acc, curr) => {
        const month = format(curr, "MMMM yyyy");
        return { ...acc, [month]: acc[month] ? acc[month] + 1 : 1 };
      }, {} as { [key: string]: number });
    } else if (rangeType === "week") {
      return weeks.reduce((acc, curr) => {
        const month = format(curr, "MMMM yyyy");
        return { ...acc, [month]: acc[month] ? acc[month] + 1 : 1 };
      }, {} as { [key: string]: number });
    } else {
      return months.reduce((acc, curr) => {
        const month = format(curr, "MMMM yyyy");
        return { ...acc, [month]: acc[month] ? acc[month] + 1 : 1 };
      }, {} as { [key: string]: number });
    }
  }, [rangeType]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {months.map(m => {
            return (
              <TableHead
                style={{ minWidth: rangeType === "month" ? "200px" : "auto" }}
                className="border-r whitespace-nowrap text-ellipsis overflow-hidden"
                colSpan={monthStartDateEndDate[format(m, "MMMM yyyy")]}>
                {format(m, "MMMM, yyyy")}
              </TableHead>
            );
          })}
        </TableRow>
        <TableRow>
          {rangeType === "day" &&
            allDays.map(d => {
              return (
                <TableHead className="border-r">
                  <div className="w-4 flex flex-col items-center justify-center">
                    <span>{format(d, "d")}</span>
                    <span className="text-[10px]">{format(d, "E")}</span>
                  </div>
                </TableHead>
              );
            })}
          {rangeType === "week" &&
            weeks.map(w => {
              return (
                <TableHead className="border-r w-4">
                  <div className="w-4 flex flex-col items-center justify-center">
                    <span>{format(w, "d")}</span>
                    <span className="text-[10px]">{format(w, "E")}</span>
                  </div>
                </TableHead>
              );
            })}
          {rangeType === "month" &&
            months.map(m => {
              return (
                <TableHead className="border-r">
                  <div className="w-4 flex flex-col items-center justify-center">
                    <span>{format(m, "MMM")}</span>
                    <span className="text-[10px]">{format(m, "yyyy")}</span>
                  </div>
                </TableHead>
              );
            })}
        </TableRow>
      </TableHeader>
      <TableBody>
        <RightPanelRows
          rangeType={rangeType}
          rowCollapseState={openCloseState}
          startDay={startDay}
          tasks={tasks}
        />
      </TableBody>
    </Table>
  );
};

export default RightPanelContent;
