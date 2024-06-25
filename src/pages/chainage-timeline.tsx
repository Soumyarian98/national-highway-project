// import { Gantt, Task } from "gantt-task-react";
// import "gantt-task-react/dist/index.css";

import DetailsTable from "@/components/details-table";
import Gantt from "@/components/gantt";
import { ganttData } from "@/components/gantt/data";
import { constructionProgramData } from "@/components/gantt/new-data";
import { Task } from "@/components/gantt/types";
import LoadingIndicator from "@/components/loading-indicator";
import { Slider } from "@/components/ui/slider";
import DashboardLayout from "@/layout/dashboard-layout";
import { useQuery } from "@tanstack/react-query";

const costData = {
  rows: [
    ["Budget Allocated", "₹ 2,80,93,039.75"],
    ["Budget Spent", "₹ 1,74,17,684.65"],
    ["Remaining Budget", "₹ 1,06,75,355.1"],
  ],
};

const ChainageTimeline = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["gantt-tasks"],
    queryFn: async () => {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(ganttData);
        }, 1000);
      });
      return res as Task[];
    },
  });

  return (
    <DashboardLayout title="Construction timeline for MNB 20 +368">
      {isLoading && (
        <div className="flex justify-center">
          <LoadingIndicator className="size-12 text-primary" />
        </div>
      )}
      {data && <Gantt tasks={constructionProgramData} />}
      {data && (
        <div className="grid grid-cols-12 gap-12 mt-12">
          <div className="col-span-12">
            <div className="space-y-4">
              <h2 className="text-lg capitalize font-bold">Overall Progress</h2>
              <Slider value={[62]} max={100} step={1} />
            </div>
          </div>
          <div className="col-span-6">
            <div className="space-y-2">
              <h2 className="text-lg capitalize font-bold">
                Projected Progress
              </h2>
              <img className="rounded-md" src="/minior_bridge_projected.png" />
            </div>
          </div>
          <div className="col-span-6">
            <div className="space-y-2">
              <h2 className="text-lg capitalize font-bold">Current Progress</h2>
              <img className="rounded-md" src="/minor_bridge_current.png" />
            </div>
          </div>
          <div className="col-span-6">
            <div className="space-y-4">
              <h2 className="text-lg capitalize font-bold">Cost Summary</h2>
              <DetailsTable data={costData} />
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default ChainageTimeline;
