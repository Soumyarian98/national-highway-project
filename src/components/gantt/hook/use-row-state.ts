import { createStore } from "zustand";

interface RowState {
  openCloseState: { [key: string]: boolean };
  setOpenCloseState: (state: { [key: string]: boolean }) => void;
  tooggleRowCollapse: (id: string) => void;
}

const useRowState = createStore<RowState>(set => ({
  openCloseState: {},
  setOpenCloseState: state => set({ openCloseState: state }),
  tooggleRowCollapse: id =>
    set(state => ({
      openCloseState: {
        ...state.openCloseState,
        [id]: !state.openCloseState[id],
      },
    })),
}));

export default useRowState;
