import { create } from "zustand";

interface RowState {
  rowCollapseState: { [key: string]: boolean };
  setOpenCloseState: (state: { [key: string]: boolean }) => void;
  expandAll: () => void;
  collapseAll: () => void;
  toggleRowCollapse: (id: string) => void;
  selectedRow: string;
}

const useRowState = create<RowState>(set => ({
  rowCollapseState: {},
  setOpenCloseState: state => set({ rowCollapseState: state }),
  expandAll: () =>
    set(state => ({
      rowCollapseState: Object.keys(state.rowCollapseState).reduce(
        (acc, curr) => {
          return { ...acc, [curr]: true };
        },
        {}
      ),
    })),
  collapseAll: () =>
    set(state => ({
      rowCollapseState: Object.keys(state.rowCollapseState).reduce(
        (acc, curr) => {
          return { ...acc, [curr]: false };
        },
        {}
      ),
    })),
  toggleRowCollapse: id =>
    set(state => ({
      rowCollapseState: {
        ...state.rowCollapseState,
        [id]: !state.rowCollapseState[id],
      },
    })),

  selectedRow: "",
}));

export default useRowState;
