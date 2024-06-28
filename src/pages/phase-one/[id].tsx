import DetailsTable from "@/components/details-table";
import { phaseOneItems } from "@/data/phase-one-items";
import DashboardLayout from "@/layout/dashboard-layout";
import { useParams } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

const PhaseOneItems = () => {
  const id = useParams().id;

  const item = phaseOneItems.find((item) => item.slug === id);

  return (
    <DashboardLayout contained title={item?.label}>
      <div className="flex flex-col gap-8">
        {item?.content.map((content, index) => {
          let component = null;
          switch (content.type) {
            case "table":
              component = (
                <div className="space-y-4" key={index}>
                  <h2 className="text-lg capitalize font-bold">
                    {content.title}
                  </h2>
                  <DetailsTable data={content.data} />;
                </div>
              );
              break;
            case "section":
              component = (
                <div className="space-y-2" key={index}>
                  <h2 className="text-lg capitalize font-bold">
                    {content.title}
                  </h2>
                  <p className="text-sm">{content.description}</p>
                </div>
              );
              break;
            case "image":
              component = (
                <img
                  src={content.url}
                  alt={item.label}
                  key={index}
                  className="w-full h-auto"
                />
              );
              break;
          }
          return component;
        })}
      </div>
      <ScrollRestoration />
    </DashboardLayout>
  );
};

export default PhaseOneItems;
