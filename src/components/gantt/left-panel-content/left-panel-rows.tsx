import { TableRow } from "@/components/ui/table";
import { Task } from "../types";
import { FiChevronRight, FiChevronUp } from "react-icons/fi";
import { Fragment } from "react/jsx-runtime";

interface LeftPanelRowProps {
  tasks: Task[];
  rowCollapseState: {
    [key: string]: boolean;
  };
  toggleRowCollapse: (id: string) => void;
}

const LeftPanelRows = ({
  tasks,
  rowCollapseState,
  toggleRowCollapse,
}: LeftPanelRowProps) => {
  return tasks.map(g => {
    return (
      <Fragment key={g.id}>
        <TableRow className="h-12 relative">
          <td className="w-10 h-full">
            {g.subTasks.length ? (
              <button
                className="p-2 bg-secondary rounded-md "
                onClick={() => toggleRowCollapse(g.id)}>
                {rowCollapseState[g.id] ? <FiChevronUp /> : <FiChevronRight />}
              </button>
            ) : null}
          </td>
          <td className="whitespace-nowrap text-sm px-2">{g.title}</td>
          <td className="whitespace-nowrap text-sm px-2">{g.startDate}</td>
          <td className="whitespace-nowrap text-sm px-2">{g.endDate}</td>
        </TableRow>
        {g.subTasks.length && rowCollapseState[g.id] ? (
          <LeftPanelRows
            tasks={g.subTasks}
            rowCollapseState={rowCollapseState}
            toggleRowCollapse={toggleRowCollapse}
          />
        ) : null}
      </Fragment>
    );
  });
};

export default LeftPanelRows;
