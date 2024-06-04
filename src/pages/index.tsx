import DetailsTable from "@/components/details-table";
import { Card } from "@/components/ui/card";

import DashboardLayout from "@/layout/dashboard-layout";
import { Link } from "react-router-dom";

const salientFeaturesData: {
  header?: string[];
  rows: (string | string[] | string[][])[][];
} = {
  header: ["Sr. No", "Parameters/Issues", "Description"],
  rows: [
    ["1", "Length (km)", "104.250"],
    ["2", "Total land acquired (ha)", "619.572"],
    ["3", "Govt. land (ha)", "118.586"],
    ["4", "Pvt. Land (ha)", "384.521"],
    ["5", "Forest land (ha)*", "116.465"],
    [
      "6",
      "Area under protected/ important or sensitive species of flora or fauna/Wildlife Sanctuary",
      "The alignment does not pass through any wildlife sanctuary, protected area and its eco sensitive zone.",
    ],
    ["7", "No. of trees", "17000 Tentative"],
    ["8", "Area under water bodies (ha)*", "5"],
    ["9", "No. of structure to be impacted due to proposed alignment", "180"],
    ["10", "No. of families", "180 Tentative"],
    [
      "11",
      "No. of structure to be constructed",
      [
        ["Major Bridge", "07"],
        ["Major Bridge (Elephant Underpass Also)", "03"],
        ["Minor Bridge", "21"],
        ["Minor Bridge (Canal)", "09"],
        ["Minor Bridge (Elephant Underpass Also)", "01"],
        ["MNB CUM UNDERPASS (Canal)", "03"],
        ["ROB", "00"],
        ["Vehicular Underpass", "10"],
        ["Light Vehicular Underpass", "18"],
        ["Small Vehicular Underpass (SVUP)", "26"],
        ["Vehicular Overpass (VOP)", "02"],
        ["Flyovers", "06"],
        ["Elephant Underpass", "11"],
        ["Box Culverts", "278"],
        ["Pipe Culverts", "122"],
        ["Viaduct", "01"],
        ["PUP", "21"],
      ],
    ],
    [
      "12",
      "Total water requirement",
      "3500 KL/day. Water will be extracted from surface sources. The ground water will be abstracted for camp site after obtaining the permission from competent authority.",
    ],
    ["13", "Toll Plaza", "5"],
    ["14", "Truck Bye lays", "2"],
    ["15", "RoW (m)", "60"],
    [
      "16",
      "Construction material",
      [
        "Coarse aggregate Cement (MT) - 128960",
        "Coarse Sand (cum) - 1248",
        "Coarse Agg. (cum) - 707200",
        "Fine Agg. (cum) - 1414400",
        "Steel (ton) - 4160",
        "Bitumen (ton) - 15392000",
        "Bitumen Emulsion (ton) - 1331200",
        "Borrow Earth (cum) - 6656000",
      ],
    ],
    [
      "17",
      "Connectivity",
      "The projected road will connect to Bilaspur & Korba by Bilaspur-Urga-Pathalgaon Highway and Jharkhand border via Jashpur",
    ],
    ["18", "Project cost (cr.)", "3,150.47"],
  ],
};

const totalProjectCostData = {
  header: [
    "Sr. No",
    "Description of Item",
    "Amount (Rs. In Crore)",
    "Cost (%)",
  ],
  rows: [
    ["1", "Site Clearance", "5.38", "0.24"],
    ["2", "Earth Work", "429.98", "19.02"],
    ["3", "Non-Bituminous Courses", "175.47", "7.76"],
    ["4", "Rigid Pavement (PQC & DLC)", "4.24", "0.19"],
    ["5", "Bituminous Courses", "313.93", "13.89"],
    ["6", "VUP/SVUP/LVUP", "125.89", "5.57"],
    ["7", "VOP", "6.72", "0.30"],
    ["8", "EUP", "24.60", "1.09"],
    ["9", "Flyover/Viaduct/Interchange/Loop", "31.84", "1.41"],
    ["10", "Box Culverts/ Hume Pipe Culverts", "119.53", "5.29"],
    ["11", "Major bridge/Minor Bridge", "289.25", "12.80"],
    ["12", "RE Wall/RCC Retaining/ Toe Wall", "244.31", "10.81"],
    [
      "13",
      "Drainage and Protective Works (Including Friction slab Crash Barrier, Line & Chute Drain, RWH, Fencing, Metal Beam Crash Barrier & Turfing)",
      "385.23",
      "17.04",
    ],
    ["14", "Truck Lay Bays", "2.22", "0.10"],
    ["15", "Advance Traffic Management System", "20.87", "0.92"],
    [
      "16",
      "Traffic Signs, Marking, Road Studs and Road Appurtenances",
      "19.90",
      "0.88",
    ],
    ["17", "Miscellaneous works", "11.42", "0.51"],
    ["18", "Rest Area Development", "3.10", "0.14"],
    ["19", "Toll Plaza & Ramp Plaza", "41.17", "1.82"],
    ["20", "Highway Lighting", "5.07", "0.22"],
    ["A", "Civil Construction Cost", "2,260.09", "100.00"],
    ["B", "Utility Cost", "32.93", ""],
    ["C", "Total - Civil Construction Cost (1+2)", "2,293.02", ""],
    ["D", "GST Charge @ 18%", "412.74", ""],
    ["E", "Total Cost (C+D)", "2,705.77", ""],
    ["F", "IC/Pre-operative Cost", "121.17", ""],
    ["G", "Finance Charges", "", ""],
    ["H", "Interest During Construction", "", ""],
    [
      "I",
      "Estimated Project Cost Including Centages (E+F+G+H)",
      "2,826.94",
      "",
    ],
    [
      "J",
      "Land Acquisition cost including R&R and compensation for structures",
      "283.41",
      "",
    ],
    ["K", "Cost of Forest Clearance & Environment Mitigation", "40.12", ""],
    ["L", "Total Project Cost (Including LA and FC)", "3,150.47", ""],
  ],
};

const Home = () => {
  return (
    <DashboardLayout contained>
      <div className="flex flex-col justify-center items-center max-w-[900px] mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <Link to="/phase" className="block col-span-6">
            <Card className="w-full overflow-hidden relative cursor-pointer">
              <p className="font-bold text-white text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Phase 1
              </p>
              <img alt="Phase 1 Image" src="/google_earth_left.png" />
            </Card>
          </Link>
          <Card className="block col-span-6 overflow-hidden relative cursor-not-allowed">
            <p className="font-bold text-white text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Phase 2
            </p>
            <img alt="Phase 2 Image" src="/google_earth_right.png" />
          </Card>
        </div>
        <div className="flex flex-col gap-8 mt-12">
          <div className="space-y-2">
            <h2 className="text-lg capitalize font-bold">Introduction</h2>
            <p className="leading-relaxed">
              The Government of India has taken up development of Economic
              Corridors, Inter Corridors, Feeder Corridors and National
              Corridors to improve the efficiency of Freight Movements in India
              under Bharatmala Pariyojana. National Highway Authority of India
              has been appointed as Nodal Agency for proposed development of
              Pathalgaon – Kunkuri CG/JH Border section of which is a part
              Bharatmala Pariyojana, (Lot-5/Package-7).
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg capitalize font-bold">
              Description of the project
            </h2>
            <p className="leading-relaxed">
              The proposed highway starts from village Turua Ama near Pathalgaon
              22°33'42.96"N 83°33'52.61"E and ends at CG-JH border near Shankh
              river 22°56'24.10"N 84°23'52.45"E in Jashpur district in the state
              of Chhattisgarh. Scope of present report is confined to the
              package 7 (Ch.0+000toCh.104.250+000) This is a green field
              alignment, and is proposed for 4-Lane .The proposed length of
              Project Highway is about 104.250 kms. The road passes through
              approx. 100 villages of Jashpur district through important
              villages/towns like Pathalgaon, Kansabel, Kunkuri, Duldula,
              Jashpur e.t.c
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg capitalize font-bold">
              Benefits of project
            </h2>
            <p className="leading-relaxed">
              The benefits of the Project are multi-fold. It will substantially
              reduce the travel time between Pathalgaon-Kunkuri in Jhaspur
              District and the other remote areas falling on the alignment. In
              addition to the improved connectivity, it will also provide a
              boost to the economic status of the villages / towns falling in
              the dedicated Project area. The proposed route between
              Pathalgaon-Kunkuri-Jashpur measures about 104 km which shall be
              reduced the time travel to about 2.5 hrs. as compared to the
              existing route NH 43.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg capitalize font-bold">
              Salient features of the project
            </h2>
            <DetailsTable data={salientFeaturesData} />
          </div>
          <div className="space-y-4">
            <h2 className="text-lg capitalize font-bold">Total project cost</h2>
            <DetailsTable data={totalProjectCostData} />
            <ul className="list-disc ml-4 flex flex-col gap-2">
              <li>
                Civil Cost per Km. (A/104.250 Km):
                <span className="font-bold"> 21.68 Crore</span>{" "}
              </li>
              <li>
                Total Project Cost per Km. (L/104.250 Km):
                <span className="font-bold"> 30.22 Crore</span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
