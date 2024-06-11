import { format } from "date-fns";
import { ChevronRight, ChevronUp } from "lucide-react";
import clsx from "clsx";

import { TableRow } from "@/components/ui/table";

import useRowState from "../../hook/use-row-state";
import useRowSelectState from "../../hook/use-row-select-state";

interface Props {
  id: string;
  parentPath: string[];
  title: string;
  startDate: string;
  endDate: string;
  collapsible: boolean;
  paddingLeft: number;
}

const LeftPanelRow = ({
  id,
  parentPath,
  title,
  startDate,
  endDate,
  collapsible,
  paddingLeft,
}: Props) => {
  const { toggleRowCollapse, rowCollapseState } = useRowState();
  const { selectedRow, setSelectedRow } = useRowSelectState();

  const handleToggleRowCollapse = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    toggleRowCollapse(id);
  };

  const handleRowSelect = () => {
    if (selectedRow === id) {
      setSelectedRow("", []);
      return;
    }
    setSelectedRow(id, parentPath);
  };

  return (
    <TableRow
      className={clsx(
        "h-12 relative cursor-pointer",
        selectedRow === id && "bg-primary/20 hover:bg-primary/20"
      )}
      onClick={handleRowSelect}>
      <td className="w-10 h-full" style={{ paddingLeft }}>
        {collapsible ? (
          <button
            className="p-2 bg-secondary rounded-md text-black"
            onClick={handleToggleRowCollapse}>
            {rowCollapseState[id] ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>
        ) : null}
      </td>
      <td className="whitespace-nowrap text-sm px-2">{title}</td>
      <td className="whitespace-nowrap text-sm px-2">
        {format(new Date(startDate), "PP")}
      </td>
      <td className="whitespace-nowrap text-sm px-2">
        {format(new Date(endDate), "PP")}
      </td>
    </TableRow>
  );
};

export default LeftPanelRow;
