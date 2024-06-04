import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "@/components/ui/table";
import { Task } from "../types";
import LeftPanelRows from "./left-panel-rows";

interface GanttProps {
  tasks: Task[];
  rowCollapseState: {
    [key: string]: boolean;
  };
  toggleRowCollapse: (id: string) => void;
}

const LeftPanelContent = ({
  tasks,
  rowCollapseState,
  toggleRowCollapse,
}: GanttProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
        </TableRow>
        <TableRow>
          <TableHead></TableHead>
          <TableHead className="w-[100px] whitespace-nowrap px-2">
            Title
          </TableHead>
          <TableHead className="whitespace-nowrap px-2">Start Date</TableHead>
          <TableHead className="whitespace-nowrap px-2">End Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <LeftPanelRows
          tasks={tasks}
          rowCollapseState={rowCollapseState}
          toggleRowCollapse={toggleRowCollapse}
        />
      </TableBody>
    </Table>
  );
};

export default LeftPanelContent;
