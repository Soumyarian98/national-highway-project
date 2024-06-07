import { TableRow } from "@/components/ui/table";
import { Fragment } from "react/jsx-runtime";

import { Task } from "../types";
import { format } from "date-fns";
import { ChevronRight, ChevronUp } from "lucide-react";

interface LeftPanelRowProps {
  tasks: Task[];
  rowCollapseState: {
    [key: string]: boolean;
  };
  toggleRowCollapse: (id: string) => void;
  level?: number;
}

const LeftPanelRows = ({
  tasks,
  rowCollapseState,
  toggleRowCollapse,
  level = 0,
}: LeftPanelRowProps) => {
  return tasks.map(g => {
    const paddingLeft = level === 0 ? 8 : level * 16 + 8;
    return (
      <Fragment key={g.id}>
        <TableRow className="h-12 relative">
          <td className="w-10 h-full" style={{ paddingLeft }}>
            {g.subTasks.length ? (
              <button
                className="p-2 bg-secondary rounded-md "
                onClick={() => toggleRowCollapse(g.id)}>
                {rowCollapseState[g.id] ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
            ) : null}
          </td>
          <td className="whitespace-nowrap text-sm px-2">{g.title}</td>
          <td className="whitespace-nowrap text-sm px-2">
            {format(new Date(g.startDate), "dd-MM-yyyy")}
          </td>
          <td className="whitespace-nowrap text-sm px-2">
            {format(new Date(g.endDate), "dd-MM-yyyy")}
          </td>
        </TableRow>
        {g.subTasks.length && rowCollapseState[g.id] ? (
          <LeftPanelRows
            tasks={g.subTasks}
            rowCollapseState={rowCollapseState}
            toggleRowCollapse={toggleRowCollapse}
            level={level + 1}
          />
        ) : null}
      </Fragment>
    );
  });
};

export default LeftPanelRows;
