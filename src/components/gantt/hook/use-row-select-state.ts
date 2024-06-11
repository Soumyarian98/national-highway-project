import { create } from "zustand";

interface RowSelectState {
  selectedRow: string;
  parentPath: string[];
  setSelectedRow: (id: string, parentPath: string[]) => void;
}

const useRowSelectState = create<RowSelectState>(set => ({
  selectedRow: "",
  parentPath: [],
  setSelectedRow: (id, parentPath) => set({ selectedRow: id, parentPath }),
}));

export default useRowSelectState;
