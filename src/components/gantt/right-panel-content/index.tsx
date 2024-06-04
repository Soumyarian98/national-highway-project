import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Task } from "../types";
import { eachDayOfInterval, eachMonthOfInterval, format } from "date-fns";
import RightPanelRows from "./right-panel-rows";

interface RightPanelContentProps {
  tasks: Task[];
  startDay: Date;
  endDay: Date;
  rowCollapseState: { [key: string]: boolean };
}

const RightPanelContent = ({
  endDay,
  rowCollapseState,
  startDay,
  tasks,
}: RightPanelContentProps) => {
  const allDays = eachDayOfInterval({ start: startDay, end: endDay });
  const months = eachMonthOfInterval({ start: startDay, end: endDay });
  const monthStartDateEndDate = allDays.reduce((acc, curr) => {
    const month = format(curr, "MMMM yyyy");
    return { ...acc, [month]: acc[month] ? acc[month] + 1 : 1 };
  }, {} as { [key: string]: number });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {months.map(m => {
            return (
              <TableHead
                className="w-full border-r"
                colSpan={monthStartDateEndDate[format(m, "MMMM yyyy")]}>
                {format(m, "MMMM, yyyy")}
              </TableHead>
            );
          })}
        </TableRow>
        <TableRow>
          {allDays.map(d => {
            return (
              <TableHead className="border-r">
                <div className="w-4 flex flex-col items-center justify-center">
                  <span> {format(d, "d")}</span>
                  <span className="text-[10px]">{format(d, "E")}</span>
                </div>
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        <RightPanelRows
          rowCollapseState={rowCollapseState}
          startDay={startDay}
          tasks={tasks}
        />
      </TableBody>
    </Table>
  );
};

export default RightPanelContent;
