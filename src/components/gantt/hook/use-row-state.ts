import { create } from "zustand";

interface RowState {
  openCloseState: { [key: string]: boolean };
  setOpenCloseState: (state: { [key: string]: boolean }) => void;
  expandAll: () => void;
  collapseAll: () => void;
  tooggleRowCollapse: (id: string) => void;
}

const useRowState = create<RowState>(set => ({
  openCloseState: {},
  setOpenCloseState: state => set({ openCloseState: state }),
  expandAll: () =>
    set(state => ({
      openCloseState: Object.keys(state.openCloseState).reduce((acc, curr) => {
        return { ...acc, [curr]: true };
      }, {}),
    })),
  collapseAll: () =>
    set(state => ({
      openCloseState: Object.keys(state.openCloseState).reduce((acc, curr) => {
        return { ...acc, [curr]: false };
      }, {}),
    })),
  tooggleRowCollapse: id =>
    set(state => ({
      openCloseState: {
        ...state.openCloseState,
        [id]: !state.openCloseState[id],
      },
    })),
}));

export default useRowState;
