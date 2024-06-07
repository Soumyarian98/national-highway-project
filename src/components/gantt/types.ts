export interface Task {
  id: string;
  parentPath: string[];

  title: string;
  startDate: string;
  endDate: string;

  color?: string;
  progress?: number;

  subTasks: Task[];
}
