import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "@/components/ui/table";
import { Task } from "../types";
import LeftPanelRows from "./left-panel-rows";
import useRowState from "../hook/use-row-state";

interface GanttProps {
  tasks: Task[];
  // rowCollapseState: {
  //   [key: string]: boolean;
  // };
  // toggleRowCollapse: (id: string) => void;
}

const LeftPanelContent = ({ tasks }: GanttProps) => {
  const { tooggleRowCollapse, openCloseState } = useRowState();
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
          rowCollapseState={openCloseState}
          toggleRowCollapse={tooggleRowCollapse}
        />
      </TableBody>
    </Table>
  );
};

export default LeftPanelContent;
