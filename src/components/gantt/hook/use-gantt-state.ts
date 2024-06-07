import { create } from "zustand";

interface GanttState {
  rangeType: "day" | "week" | "month";
  onRangeTypeChange: (rangeType: "day" | "week" | "month") => void;
}

const useGanttState = create<GanttState>(set => ({
  rangeType: "week",
  onRangeTypeChange: rangeType => set({ rangeType }),
}));

export default useGanttState;
