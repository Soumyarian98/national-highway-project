import { mainReportData } from "./main-report-data";
import { totalProjectCostData } from "./total-project-cost";

interface TableType {
  title: string;
  data: any;
  type: "table";
}

interface SectionType {
  title: string;
  description: string;
  type: "section";
}

interface ImageType {
  url: string;
  type: "image";
}

interface PhaseOneItem {
  label: string;
  slug: string;
  isActive: boolean;
  content: (TableType | SectionType | ImageType)[];
}

export const phaseOneItems: PhaseOneItem[] = [
  {
    label: "Main report",
    slug: "main-report",
    isActive: true,
    content: [
      {
        type: "table",
        title: "Salient Features of the Project",
        data: mainReportData,
      },
    ],
  },
  {
    label: "Geotech report",
    slug: "geotech-report",
    isActive: false,
    content: [],
  },
  {
    label: "EIA report",
    slug: "eia-report",
    isActive: true,
    content: [
      {
        type: "section",
        title: "Ambient Air",
        description: `Ambient Air Quality Monitoring reveals that the minimum & maximum 
                    Concentrations of PM10 for all the 9 AAQ monitoring stations were 
                    found to be 56.05 μg/m3 (at AAQ8- Jholanga-CH 89+400) to 90.58 μg/m3 
                    (at AAQ1-Chaura Ama-02+300) 
                    The result of PM2.5 reveals that the minimum concentration of 26.62 
                    μg/m3 (at AAQ3- Khuntitoli -CH 26+200) to 58.13 μg/m3 (at AAQ1-. 
                    ChauraAma -02+300). 
                    The gaseous pollutants SO2 and NOx were within the prescribed CPCB 
                    limit of 80 μg/m3. For residential and rural areas at all stations. The 
                    minimum & maximum concentrations of SO2 were found to be 4.82 
                    μg/m3 (AAQ1- Chaura Ama-02+300) to 21.14 μg/m3 (AAQ4- 
                    Pharsakhani -39+200) respectively. 
                    The minimum & maximum concentrations of NOx were found to be 
                    9.18 μg/m3 (at AAQ2- Lambdand -CH 15+500) to 23.8 μg/m3. (AAQ4- 
                    Pharsakhani -39+200) respectively. `,
      },
      {
        type: "section",
        title: "Noise Levels",
        description: `Noise monitoring was carried out at 9 locations. The results of the 
                    monitoring program indicated that both the daytime and night time 
                    levels of noise were well within the prescribed limits of NAAQS to 
                    marginal rise. 
                    In PM levels some locations monitored due to increase in vehicle density.`,
      },
      {
        type: "section",
        title: "Water Quality",
        description: `Ground water samples were analyzed and concluded that: 
                        The ground water from all sources remains suitable for drinking 
                        purposes as all the constituents are within the limits prescribed by 
                        drinking water standards promulgated by Indian Standards IS: 10500.`,
      },
      {
        type: "section",
        title: "Soil Quality",
        description: `Samples collected from identified locations indicate the soil is sandy type 
                        and the pH value ranging from 7.19 to 7.98, which shows that the soil is 
                        neutral to alkaline in nature. In the collected soil samples the 
                        conductivity ranged from 378.10-498.02 μmhos/cm. Phosphorus was 
                        highly dominant amongst all the heavy metals present and varied from 
                        12.80 to 18.71 mg/Kg.`,
      },
      {
        type: "section",
        title: "Ecology and Biodiversity",
        description: `There are no ecologically sensitive areas present in the study area.`,
      },
    ],
  },
  {
    label: "Technical schedule",
    slug: "technical-schedule",
    isActive: false,
    content: [],
  },
  { label: "GAD Plans", slug: "gad-plans", isActive: false, content: [] },
  { label: "LAP", slug: "lap", isActive: false, content: [] },
  {
    label: "Plan & Profile",
    slug: "plan-profile",
    isActive: false,
    content: [],
  },
  {
    label: "URP",
    slug: "urp",
    isActive: false,
    content: [
      {
        type: "image",
        url: "https://uploadthing-prod.s3.us-west-2.amazonaws.com/04d3affc-29ef-406f-9781-e89966cadc93-1t1v.png",
      },
    ],
  },
  {
    label: "Drainage plan",
    slug: "drainage-plan",
    isActive: true,
    content: [
      {
        type: "image",
        url: "https://uploadthing-prod.s3.us-west-2.amazonaws.com/54c534a7-8481-4a35-adfa-ac34fc5e6d3c-5dn5i7.png",
      },
      {
        type: "image",
        url: "https://uploadthing-prod.s3.us-west-2.amazonaws.com/7bb3a81b-76c1-4750-afde-a79acd4efa32-5dn5i6.png",
      },
      {
        type: "image",
        url: "https://uploadthing-prod.s3.us-west-2.amazonaws.com/1225a32a-c254-491a-b88c-fc26ee54ec30-5dn5i5.png",
      },
    ],
  },
  {
    label: "Traffic signage plan",
    slug: "traffic-signage-plan",
    isActive: true,
    content: [
      {
        type: "image",
        url: "https://uploadthing-prod.s3.us-west-2.amazonaws.com/e249fb40-1367-4e14-8ee2-000d58e30054-ddeeir.png",
      },
      {
        type: "image",
        url: "https://uploadthing-prod.s3.us-west-2.amazonaws.com/48f9cefc-3027-44ed-a1d2-b5b59a649bc2-ddeeis.png",
      },
    ],
  },
  {
    label: "Cost estimate",
    slug: "cost-estimate",
    isActive: true,
    content: [
      {
        type: "table",
        title: "Total project cost",
        data: totalProjectCostData,
      },
    ],
  },
];
