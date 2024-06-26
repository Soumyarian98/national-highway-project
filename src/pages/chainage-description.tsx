import DashboardLayout from "@/layout/dashboard-layout";
import { useMemo, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import BridgeViewer from "@/components/bridge-viewer";
import BridgeWithFilter from "@/components/bridge-with-filter";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import ChainageDetails from "./chainage/[id]";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "@/components/video-player";

const chainageData = [
  { id: "0", label: "18+600 - 18+700", point: { left: 2, top: 82 } },
  { id: "1", label: "18+700 - 18+800", point: { left: 5, top: 79.18 } },
  { id: "2", label: "18+800 - 18+900", point: { left: 8.88, top: 75.63 } },
  { id: "3", label: "18+900 - 19+000", point: { left: 12.11, top: 73.09 } },
  { id: "4", label: "19+000 - 19+100", point: { left: 16.33, top: 69.03 } },
  { id: "5", label: "19+100 - 19+200", point: { left: 20.77, top: 64.97 } },
  { id: "6", label: "19+200 - 19+300", point: { left: 25, top: 60.91 } },
  { id: "7", label: "19+300 - 19+400", point: { left: 29.11, top: 57.36 } },
  { id: "8", label: "19+400 - 19+500", point: { left: 33, top: 53.8 } },
  { id: "9", label: "19+500 - 19+600", point: { left: 37.44, top: 50 } },
  { id: "10", label: "19+600 - 19+700", point: { left: 41.11, top: 46.7 } },
  {
    id: "11",
    label: "19+700 - 19+800",
    point: { left: 45.77, top: 42.13 },
  },
  {
    id: "12",
    label: "19+800 - 19+900",
    point: { left: 49.77, top: 38.83 },
  },
  { id: "13", label: "19+900 - 20+000", point: { left: 54, top: 34.77 } },
  {
    id: "14",
    label: "20+000 - 20+100",
    point: { left: 58.11, top: 30.96 },
  },
  {
    id: "15",
    label: "20+100 - 20+200",
    point: { left: 61.88, top: 27.66 },
  },
  {
    id: "16",
    label: "20+200 - 20+300",
    point: { left: 65.66, top: 24.36 },
  },
  {
    id: "17",
    label: "20+300 - 20+400",
    point: { left: 69.77, top: 20.56 },
  },
];

const ChainageDescription = () => {
  const [selectedChainageId, setSelectedChainageId] = useState<
    string | undefined
  >();
  const navigate = useNavigate();

  const selectedChainage = useMemo(() => {
    return chainageData.find((chain) => chain.id === selectedChainageId);
  }, [selectedChainageId]);

  return (
    <DashboardLayout contained>
      <div className="space-y-12">
        <div className="relative rounded-lg overflow-hidden">
          <img alt="map area" src="/map_area.png" />
          <TooltipProvider>
            {chainageData.map((chain) => (
              <Tooltip key={chain.id}>
                <div
                  onClick={() => setSelectedChainageId(chain.id)}
                  className="absolute flex justify-center items-center rounded-full"
                  style={{
                    left: `${chain.point.left}%`,
                    top: `${chain.point.top}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <TooltipTrigger asChild>
                    <div
                      className={clsx(
                        "w-3 h-3 border-2 border-white rounded-full",
                        selectedChainageId === chain.id
                          ? "bg-red-700 scale-150"
                          : "bg-blue-700"
                      )}
                    ></div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">{chain.label}</TooltipContent>
                </div>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
        <div>
          {selectedChainage ? (
            <div>
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-lg capitalize font-bold">
                  {selectedChainage.label}
                </h2>
                <div className="flex gap-2">
                  <Button
                    onClick={() => setSelectedChainageId(undefined)}
                    size="sm"
                    variant="outline"
                  >
                    Reset
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => navigate("/chainage-timeline")}
                  >
                    View Project Timeline
                  </Button>
                </div>
              </div>
              <div>
                <BridgeWithFilter id={selectedChainageId!} />
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-lg capitalize font-bold mb-4">
                Full Bridge View
              </h2>
              <div>
                <BridgeViewer setSelectedId={setSelectedChainageId} />
              </div>
            </div>
          )}
        </div>
        {selectedChainageId === "17" && (
          <div>
            <div className="flex justify-between items-center gap-4 mb-2">
              <h2 className="text-lg capitalize font-bold">MNB at 20+368</h2>
            </div>
            <VideoPlayer
              segments={[
                { label: "Excavation", startTime: 0, endTime: 18 },
                { label: "PCC", startTime: 18, endTime: 25 },
                {
                  label: "Bar Reinforcement",
                  startTime: 25,
                  endTime: 36,
                },
                {
                  label: "Concrete in Foundation",
                  startTime: 36,
                  endTime: 39,
                },
                {
                  label: "Concrete in Substructure",
                  startTime: 39,
                  endTime: 44,
                },
                {
                  label: "Concrete in Superstructure",
                  startTime: 44,
                  endTime: 50,
                },
                {
                  label: "Re-wall",
                  startTime: 50,
                  endTime: 60,
                },
                {
                  label: "Retaining wall",
                  startTime: 60,
                  endTime: 79,
                },
                {
                  label: "Other Miscellaneous",
                  startTime: 79,
                  endTime: 90,
                },
                {
                  label: "Roadworks",
                  startTime: 90,
                  endTime: 97,
                },
              ]}
              src="https://utfs.io/f/7b5b554f-f6ed-4df1-9049-fdd49c4cc012-qy2kap.mp4"
            />
          </div>
        )}
        {selectedChainageId === "17" && <ChainageDetails />}
      </div>
    </DashboardLayout>
  );
};

export default ChainageDescription;
