import { useQuery } from "@tanstack/react-query";

import Gantt from "@/components/gantt";
import { Task } from "@/components/gantt/types";
import LoadingIndicator from "@/components/loading-indicator";
import DashboardLayout from "@/layout/dashboard-layout";
import { phaseOneTimelineData } from "@/data/phase-one-timeline-data";

const PhaseTimeline = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["gantt-tasks"],
    queryFn: async () => {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(phaseOneTimelineData);
        }, 1000);
      });
      return res as Task[];
    },
  });

  return (
    <DashboardLayout title="Phase 1 Timeline">
      {isLoading && (
        <div className="flex justify-center">
          <LoadingIndicator className="size-12 text-primary" />
        </div>
      )}
      {data && <Gantt tasks={data} />}
    </DashboardLayout>
  );
};

export default PhaseTimeline;
