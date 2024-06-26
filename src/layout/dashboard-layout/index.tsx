import { Button } from "@/components/ui/button";
import Sidebar from "./sidebar";
import { useSidebar } from "@/hooks/use-sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { routeTitles } from "@/routes";
import clsx from "clsx";
import { LogOut, Menu } from "lucide-react";

interface DashboardLayoutProps {
  contained?: boolean;
  children: React.ReactNode | React.ReactNode[];
  title?: string;
}

const DashboardLayout = ({
  children,
  contained,
  title,
}: DashboardLayoutProps) => {
  const { isOpen, toggleSidebar } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();
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
              "flex items-center gap-4 justify-between",
              contained ? "w-[1024px] mx-auto" : "w-full"
            )}>
            <div className="flex items-center gap-4">
              {!isOpen && (
                <Button size="icon" variant="secondary" onClick={toggleSidebar}>
                  <Menu />
                </Button>
              )}
              <h1 className="text-2xl font-bold">
                {/*@ts-ignore*/}
                {routeTitles[currentPath] ? routeTitles[currentPath] : title}
              </h1>
            </div>
            <Button
              size="icon"
              variant="secondary"
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                navigate("/login");
              }}>
              <LogOut size={18} />
            </Button>
          </div>
        </div>
        <div
          className={clsx(
            "p-6",
            contained ? "max-w-[1024px] mx-auto lg:px-0" : "w-full"
          )}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
