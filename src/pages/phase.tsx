import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import CrossSectionTypes from "@/components/cross-section-types";
import VideoPlayer from "@/components/video-player";
import DashboardLayout from "@/layout/dashboard-layout";

const Phase = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout contained>
      <div className="max-w-[1024px] mx-auto">
        <div>
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute left-[0] right-[54%] top-0 bottom-0 bg-black opacity-40 backdrop-blur-md cursor-not-allowed" />
            <div
              className="absolute left-[46%] right-[26%] top-0 bottom-0 bg-transparent cursor-pointer"
              onClick={() => navigate("/chainage-description")}
            />
            <div className="absolute left-[72%] right-[0] top-0 bottom-0 bg-black opacity-40 backdrop-blur-md cursor-not-allowed" />
            <img src="/google_earth.png" alt="Workplace" />
          </div>
          <p className="text-center text-sm mt-2">
            Highlighted area shows the chainages from 18+700 to 20+500
          </p>
        </div>
        <div className="flex flex-col gap-12 mt-12">
          <div className="space-y-2">
            <h2 className="text-lg capitalize font-bold">Introduction</h2>
            <p className="leading-relaxed">
              The Phase-1 construction project involves the development of a
              4-lane highway section spanning from the termination point of
              NH-130A Ch. 00+000 to Ch. 50+600, covering a distance of 50.600
              kilometers (about 31.44 mi), as part of the Raipur-Dhanbad
              Economic Corridor under Bharatmala Pariyojana. The project
              commences near Turua Ama village in Pathalgaon, Chhattisgarh, and
              concludes at the Chhattisgarh/Jharkhand border near Bemtatoli
              village in Kunkuri.
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center gap-4 mb-3">
              <h2 className="text-lg capitalize font-bold">
                Cross section types
              </h2>
            </div>
            <CrossSectionTypes />
          </div>
          <div>
            <div className="flex justify-between items-center gap-4 mb-3">
              <h2 className="text-lg capitalize font-bold">Project Demo</h2>
              <Button size="sm" onClick={() => navigate("/phase-timeline")}>
                Phase 1 Timeline
              </Button>
            </div>
            <VideoPlayer src="https://utfs.io/f/90d0dd0c-dc6b-4a16-8f21-627eb30d11cc-x61lp7.m4v" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Phase;
