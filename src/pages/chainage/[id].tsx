import DetailsTable from "@/components/details-table";
import { minorBridgeQuantityCalculation } from "@/data/minor-bridge-quantity-calculation-data";
// import DashboardLayout from "@/layout/dashboard-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const assumptions = [
  "GSB thickness is taken as 200m",
  "WMM thickness is taken as 250 mm",
  "DBM thickness is taken as 110 mm",
  "BC thickness is taken as 40 mm",
  "Clear Ht. of the Box is taken as 5 m",
  "SOR 2022 Chhatisgarh is followed",
  "Pavement layers upto WMM spread across the entire width",
  "Bituminous layers (DBM+BC) within 10.5m carriageway width each side",
];

const abstractCostEstimate = {
  header: ["Sno.", "Description", "Amount"],
  rows: [
    ["1", "Excavation", "₹ 10,07,673.23"],
    ["2", "PCC", "₹ 6,41,977.07"],
    [
      "3",
      "Supplying, fitting and placing HYSD bar reinforcement",
      "₹ 47,47,277.58",
    ],
    ["4", "Concrete in Foundation (M35)", "₹ 41,22,737.83"],
    ["5", "Concrete in Substructure (M35)", "₹ 49,77,884.44"],
    ["6", "Concrete in Superstructure (M35)", "₹ 11,72,170.63"],
    [
      "7",
      "Back filling behind abutment, wing wall and return wall",
      "₹ 49,11,192.00",
    ],
    ["8", "Roadworks", "₹ 17,28,005.27"],
    [
      "9",
      "Other Miscellaneous (RE wall, retaining wall etc.)",
      "₹ 22,30,209.00",
    ],
    ["", "ESCALATION 10% ON RATES (2022-24)", "₹ 25,53,912.70"],
    ["", "Total Cost", "₹ 2,80,93,039.75"],
  ],
};

const ChainageDetails = () => {
  return (
    <>
      <div className="space-y-12">
        {/* <div>
          <div className="relative rounded-lg overflow-hidden">
            <img alt="map area" src="/map_area.png" />
            <div
              className="absolute flex justify-center items-center rounded-full"
              style={{
                left: "45.77%",
                top: "42.13%",
                transform: "translate(-50%, -50%)",
              }}>
              <div className="w-3 h-3 border-2 border-white rounded-full bg-red-700 scale-150"></div>
            </div>
          </div>
        </div> */}
        <div>
          <h2 className="text-lg capitalize font-bold mb-4">
            Cost estimation assumptions for minor bridge at 20+368
          </h2>
          <ul
            className="list-disc pl-2"
            style={{ listStylePosition: "inside" }}>
            {assumptions.map((assumption, index) => (
              <li key={index} className="mb-2 text-sm">
                {assumption}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg capitalize font-bold">
            Abstract cost estimate
          </h2>
          <DetailsTable data={abstractCostEstimate} />
        </div>
        <div>
          <h2 className="text-lg capitalize font-bold">
            Cost estimate for minor bridge at 20+368
          </h2>
          <div className="space-y-6">
            <Accordion
              type="multiple"
              defaultValue={new Array(minorBridgeQuantityCalculation.length)
                .fill("0")
                .map((_, index) => index.toString())}>
              {minorBridgeQuantityCalculation.map((data, index) => (
                <AccordionItem key={index} value={index.toString()}>
                  <AccordionTrigger className="text-left text-sm hover:no-underline">
                    <div className="flex gap-4 items-center">
                      <div className="font-bold aspect-square">{index + 1}</div>
                      <div>{data.title}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <DetailsTable data={data.tableData} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChainageDetails;
