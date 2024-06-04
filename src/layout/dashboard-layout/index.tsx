import { Button } from "@/components/ui/button";
import Sidebar from "./sidebar";
import { FiMenu } from "react-icons/fi";
import { useSidebar } from "@/hooks/use-sidebar";
import { useLocation } from "react-router-dom";
import { routeTitles } from "@/routes";
import clsx from "clsx";

interface DashboardLayoutProps {
  contained?: boolean;
  children: React.ReactNode | React.ReactNode[];
}

const DashboardLayout = ({ children, contained }: DashboardLayoutProps) => {
  const { isOpen, toggleSidebar } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="grid grid-cols-12 h-full">
      {isOpen && (
        <div className="col-span-2 h-full">
          <Sidebar />
        </div>
      )}
      <div className={clsx("h-full", isOpen ? "col-span-10" : "col-span-12")}>
        <div className="flex items-center gap-4 p-4 border-b">
          <div
            className={clsx(
              "flex items-center gap-4",
              contained ? "w-[900px] mx-auto" : "w-full"
            )}>
            {!isOpen && (
              <Button size="sm" variant="default" onClick={toggleSidebar}>
                <FiMenu />
              </Button>
            )}
            <h1 className="text-3xl font-bold">
              {/*@ts-ignore*/}
              {routeTitles[currentPath]}
            </h1>
          </div>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
