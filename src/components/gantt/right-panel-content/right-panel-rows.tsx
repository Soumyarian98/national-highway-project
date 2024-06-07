import { TableRow } from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { Task } from "../types";
import {
  differenceInCalendarMonths,
  differenceInDays,
  differenceInWeeks,
  format,
} from "date-fns";
import { Fragment } from "react/jsx-runtime";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";
import { colors } from "@/lib/colors";

interface RightPanelRowsProps {
  tasks: Task[];
  startDay: Date;
  rowCollapseState: {
    [key: string]: boolean;
  };
  rangeType: "day" | "week" | "month";
}

const RightPanelRows = ({
  tasks,
  startDay,
  rowCollapseState,
  rangeType,
}: RightPanelRowsProps) => {
  return tasks.map(g => {
    const startGap =
      rangeType === "day"
        ? differenceInDays(startDay, new Date(g.startDate))
        : rangeType === "week"
        ? differenceInWeeks(startDay, new Date(g.startDate))
        : differenceInCalendarMonths(startDay, new Date(g.startDate));

    console.log(startGap);
    const duration =
      rangeType === "day"
        ? differenceInDays(new Date(g.startDate), new Date(g.endDate))
        : rangeType === "week"
        ? differenceInWeeks(new Date(g.startDate), new Date(g.endDate))
        : differenceInCalendarMonths(
            new Date(g.startDate),
            new Date(g.endDate)
          );

    const tooltipData = [
      {
        label: "Start Date",
        value: format(new Date(g.startDate), "dd-MM-yyyy"),
      },
      {
        label: "End Date",
        value: format(new Date(g.endDate), "dd-MM-yyyy"),
      },
      {
        label: "Duration",
        value: `${Math.abs(duration)} ${rangeType}${
          Math.abs(duration) !== 1 ? "s" : ""
        }`,
      },
      {
        label: "Cost",
        value: `${(Math.random() * 1000 + 100).toFixed(2)} Crore`,
      },
    ];

    if (g.progress) {
      tooltipData.push({ label: "Progress", value: `${g.progress}%` });
    }

    const durationOffset = rangeType === "week" ? 2 : 1;
    const cellWidth = rangeType === "month" ? 200 : 48.8;

    const color = g.color as keyof typeof colors | undefined;

    return (
      <Fragment key={g.id}>
        <TableRow className="h-12 relative">
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <div
                  style={{
                    left: Math.abs(startGap) * cellWidth,
                    width: (Math.abs(duration) + durationOffset) * cellWidth,

                    background: color
                      ? g.progress
                        ? `linear-gradient(to right, ${colors[color][700]} ${g.progress}%, ${colors[color][500]} ${g.progress}%)`
                        : colors[color]["500"]
                      : ``,
                  }}
                  className={clsx(
                    "bg-primary text-sm text-primary-foreground px-2 py-1 rounded-md absolute top-1/2 -translate-y-1/2 overflow-hidden whitespace-nowrap text-ellipsis",
                    g.color ? `bg-${g.color}-500` : "bg-primary"
                  )}
                  onClick={() => toast({ title: g.title })}>
                  {g.title}
                </div>
              </TooltipTrigger>
              <TooltipContent side="left">
                <h5 className="text-lg font-bold mb-2 min-w-[200px]">
                  {g.title}
                </h5>
                <div className="grid grid-cols-4 gap-1">
                  {tooltipData.map((data, index) => (
                    <Fragment key={index}>
                      <td className="col-span-1">{data.label}</td>
                      <td className="text-right col-span-3">{data.value}</td>
                    </Fragment>
                  ))}
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </TableRow>
        {g.subTasks.length && rowCollapseState[g.id] ? (
          <RightPanelRows
            rangeType={rangeType}
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
