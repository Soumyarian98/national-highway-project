import { Fragment } from "react/jsx-runtime";

import LeftPanelRow from "./left-panel-row";

import useRowState from "../../hook/use-row-state";
import { Task } from "../../types";

interface LeftPanelRowProps {
  tasks: Task[];
  level?: number;
}

const LeftPanelRows = ({ tasks, level = 0 }: LeftPanelRowProps) => {
  const { rowCollapseState } = useRowState();

  return tasks.map(g => {
    const paddingLeft = level === 0 ? 8 : level * 16 + 8;
    return (
      <Fragment key={g.id}>
        <LeftPanelRow
          id={g.id}
          parentPath={g.parentPath}
          title={g.title}
          startDate={g.startDate}
          endDate={g.endDate}
          collapsible={g.subTasks.length > 0}
          paddingLeft={paddingLeft}
        />
        {g.subTasks.length && rowCollapseState[g.id] ? (
          <LeftPanelRows tasks={g.subTasks} level={level + 1} />
        ) : null}
      </Fragment>
    );
  });
};

export default LeftPanelRows;
