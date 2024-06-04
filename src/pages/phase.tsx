import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DashboardLayout from "@/layout/dashboard-layout";
import { useNavigate } from "react-router-dom";

const gradeSeparatedStructuresData = {
  header: ["Sr. No", "Structure Type", "Total Numbers"],
  rows: [
    ["1", "Minor Bridge", "10"],
    ["2", "Minor Bridge (Canal)", "4"],
    ["3", "Minor Bridge cum Underpass (Canal)", "3"],
    ["4", "Major Bridge", "5"],
    ["5", "Vehicle Overpass (VOP)", "2"],
    ["6", "Vehicular Underpass (VUP)", "4"],
    ["7", "Light Vehicle Underpasses (LVUP)", "10"],
    ["8", "Small Vehicle Underpasses (SVUP)", "13"],
    ["9", "Elephant Underpasses (EUP)", "5"],
    ["10", "Flyovers", "4"],
    ["11", "Cattle and Pedestrian Underpasses (PUP)", "10"],
    ["12", "Box Culvert", "147"],
    ["13", "Pipe Culverts", "62"],
    ["14", "Viaduct", "1"],
  ],
};

const settlementsData = {
  header: ["Chainage", "Name of Settlements"],
  rows: [
    ["1+800", "Chaura Ama"],
    ["5+600", "Batura Baha"],
    ["17+900", "Pongro"],
    ["37+300", "Thethe Tangar"],
    ["45+800", "Remate"],
    ["50+000", "Bemtatoli"],
    ["50+600", "Bemtatoli"],
  ],
};

const forestDetails = {
  header: [
    "Sr. No",
    "Chainage Start(km)",
    "Chainage End(km)",
    "Length(m)",
    "Width LHS",
    "Width RHS",
    "Total(m)",
    "Remarks",
  ],
  rows: [
    ["1", "00 + 000", "28 + 200", "28200", "30", "30", "60", ""],
    ["2", "28 + 200", "28 + 720", "520", "22.5", "22.5", "45", "Forest"],
    ["3", "28 + 720", "31 + 000", "2280", "30", "30", "60", ""],
    ["4", "31 + 000", "32 + 000", "1000", "22.5", "22.5", "45", "Forest"],
    ["5", "32 + 000", "36 + 700", "4700", "30", "30", "60", ""],
    ["6", "36 + 700", "37 + 400", "700", "22.5", "22.5", "45", "Forest"],
    ["7", "37 + 400", "46 + 900", "9500", "30", "30", "60", ""],
    ["8", "46 + 900", "47 + 460", "560", "22.5", "22.5", "45", "Forest"],
    ["9", "47 + 450", "50 + 600", "3140", "30", "30", "60", ""],
  ],
};

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

const Phase = () => {
  const navigate = useNavigate();

  const getTable = (data: {
    header?: string[];
    rows: (string | string[] | string[][])[][];
  }) => {
    return (
      <Card>
        <Table>
          {data.header && (
            <TableHeader>
              <TableRow>
                {data.header.map((head, index) => (
                  <TableHead key={index}>{head}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
          )}
          <TableBody>
            {data.rows.map((row, index) => (
              <TableRow key={index}>
                {row.map((cell, index) => {
                  if (Array.isArray(cell) && cell.length > 0) {
                    return (
                      <TableCell key={index}>
                        <ul className="list-disc pl-4">
                          {cell.map((item, index) => {
                            if (Array.isArray(item) && item.length > 0) {
                              return (
                                <li
                                  key={index}
                                  className="flex justify-between items-center mb-1">
                                  <span>
                                    {index + 1}. {item[0]}
                                  </span>
                                  <span>{item[1]}</span>
                                </li>
                              );
                            }
                            return <li key={index}>{item}</li>;
                          })}
                        </ul>
                      </TableCell>
                    );
                  }
                  return <TableCell key={index}>{cell}</TableCell>;
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  };

  return (
    <DashboardLayout contained>
      <div className="max-w-[900px] mx-auto">
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute left-[0] right-[54%] top-0 bottom-0 bg-black opacity-40 backdrop-blur-md cursor-not-allowed" />
          <div
            className="absolute left-[46%] right-[26%] top-0 bottom-0 bg-transparent cursor-pointer"
            onClick={() => navigate("/chainage-description")}
          />
          <div className="absolute left-[72%] right-[0] top-0 bottom-0 bg-black opacity-40 backdrop-blur-md cursor-not-allowed" />
          <img src="/google_earth.png" alt="Workplace" />
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
          <div className="space-y-4">
            <h2 className="text-lg capitalize font-bold">
              Grade separated structures{" "}
            </h2>
            {getTable(gradeSeparatedStructuresData)}
          </div>

          <div className="space-y-4">
            <h2 className="text-lg capitalize font-bold">
              Details of settlements along the existing
            </h2>
            {getTable(settlementsData)}
          </div>
          <div className="space-y-4">
            <h2 className="text-lg capitalize font-bold">
              Forest details along the existing alignment
            </h2>
            {getTable(forestDetails)}
          </div>
          <div className="space-y-4">
            <h2 className="text-lg capitalize font-bold">
              Salient features of the project
            </h2>
            {getTable(salientFeaturesData)}
          </div>
          <div className="space-y-4">
            <h2 className="text-lg capitalize font-bold">Total project cost</h2>
            {getTable(totalProjectCostData)}
            <ul className="list-disc ml-4 flex flex-col gap-2">
              <li>
                Civil Cost per Km. (A/104.250 Km):
                <span className="font-bold">21.68</span>{" "}
              </li>
              <li>
                Total Project Cost per Km. (L/104.250 Km):
                <span className="font-bold">30.22</span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Phase;
