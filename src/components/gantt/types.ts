export interface Task {
  id: string;
  parentPath: string[];

  title: string;
  startDate: string;
  endDate: string;

  color?: string;
  cost?: string;
  progress?: number;

  subTasks: Task[];
}
