// import { Gantt, Task } from "gantt-task-react";
// import "gantt-task-react/dist/index.css";

import Gantt from "@/components/gantt";
import { ganttData } from "@/components/gantt/data";
import { constructionProgramData } from "@/components/gantt/new-data";
import { Task } from "@/components/gantt/types";
import LoadingIndicator from "@/components/loading-indicator";
import DashboardLayout from "@/layout/dashboard-layout";
import { useQuery } from "@tanstack/react-query";

const Timeline = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["gantt-tasks"],
    queryFn: async () => {
      const res = await new Promise(resolve => {
        setTimeout(() => {
          resolve(ganttData);
        }, 1000);
      });
      return res as Task[];
    },
  });

  return (
    <DashboardLayout>
      {isLoading && (
        <div className="flex justify-center">
          <LoadingIndicator className="size-12 text-primary" />
        </div>
      )}
      {data && <Gantt tasks={data} />}
    </DashboardLayout>
  );
};

export default Timeline;
