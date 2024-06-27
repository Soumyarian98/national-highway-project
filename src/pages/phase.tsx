import CrossSectionTypes from "@/components/cross-section-types";
// import DetailsTable from "@/components/details-table";
import { Button } from "@/components/ui/button";
import VideoPlayer from "@/components/video-player";
import DashboardLayout from "@/layout/dashboard-layout";
import { useNavigate } from "react-router-dom";

// const gradeSeparatedStructuresData = {
//   header: ["Sr. No", "Structure Type", "Total Numbers"],
//   rows: [
//     ["1", "Minor Bridge", "10"],
//     ["2", "Minor Bridge (Canal)", "4"],
//     ["3", "Minor Bridge cum Underpass (Canal)", "3"],
//     ["4", "Major Bridge", "5"],
//     ["5", "Vehicle Overpass (VOP)", "2"],
//     ["6", "Vehicular Underpass (VUP)", "4"],
//     ["7", "Light Vehicle Underpasses (LVUP)", "10"],
//     ["8", "Small Vehicle Underpasses (SVUP)", "13"],
//     ["9", "Elephant Underpasses (EUP)", "5"],
//     ["10", "Flyovers", "4"],
//     ["11", "Cattle and Pedestrian Underpasses (PUP)", "10"],
//     ["12", "Box Culvert", "147"],
//     ["13", "Pipe Culverts", "62"],
//     ["14", "Viaduct", "1"],
//   ],
// };

// const settlementsData = {
//   header: ["Chainage", "Name of Settlements"],
//   rows: [
//     ["1+800", "Chaura Ama"],
//     ["5+600", "Batura Baha"],
//     ["17+900", "Pongro"],
//     ["37+300", "Thethe Tangar"],
//     ["45+800", "Remate"],
//     ["50+000", "Bemtatoli"],
//     ["50+600", "Bemtatoli"],
//   ],
// };

// const forestDetails = {
//   header: [
//     "Sr. No",
//     "Chainage Start(km)",
//     "Chainage End(km)",
//     "Length(m)",
//     "Width LHS",
//     "Width RHS",
//     "Total(m)",
//     "Remarks",
//   ],
//   rows: [
//     ["1", "00 + 000", "28 + 200", "28200", "30", "30", "60", ""],
//     ["2", "28 + 200", "28 + 720", "520", "22.5", "22.5", "45", "Forest"],
//     ["3", "28 + 720", "31 + 000", "2280", "30", "30", "60", ""],
//     ["4", "31 + 000", "32 + 000", "1000", "22.5", "22.5", "45", "Forest"],
//     ["5", "32 + 000", "36 + 700", "4700", "30", "30", "60", ""],
//     ["6", "36 + 700", "37 + 400", "700", "22.5", "22.5", "45", "Forest"],
//     ["7", "37 + 400", "46 + 900", "9500", "30", "30", "60", ""],
//     ["8", "46 + 900", "47 + 460", "560", "22.5", "22.5", "45", "Forest"],
//     ["9", "47 + 450", "50 + 600", "3140", "30", "30", "60", ""],
//   ],
// };

const Phase = () => {
  const navigate = useNavigate();

  // const segments = [
  //   { label: "Introduction", startTime: 0, endTime: 60 },
  //   { label: "Problem", startTime: 60, endTime: 150 },
  //   { label: "Solution", startTime: 150, endTime: 240 },
  //   { label: "Conclusion", startTime: 240, endTime: 300 },
  // ];

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
            <VideoPlayer src="https://utfs.io/f/ad183797-0fb6-4879-b90c-260b7f71daca-e0m3b2.m4v" />
          </div>
          {/* <div className="space-y-4">
            <h2 className="text-lg capitalize font-bold">
              Grade separated structures{" "}
            </h2>
            <DetailsTable data={gradeSeparatedStructuresData} />
          </div> */}
          {/* <div className="space-y-4">
            <h2 className="text-lg capitalize font-bold">
              Details of settlements
            </h2>
            <DetailsTable data={settlementsData} />
          </div> */}
          {/* <div className="space-y-4">
            <h2 className="text-lg capitalize font-bold">RoW Details</h2>
            <DetailsTable data={forestDetails} />
          </div> */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Phase;
