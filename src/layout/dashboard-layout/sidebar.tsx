import { Button } from "@/components/ui/button";
import { useSidebar } from "@/hooks/use-sidebar";
import clsx from "clsx";
import { FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { toggleSidebar } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="h-full flex flex-col gap-4 border-r">
      <div className="px-4 py-6 flex justify-end">
        <Button size="sm" variant="secondary" onClick={toggleSidebar}>
          <FiX />
        </Button>
      </div>
      <div className="px-4 pb-6">
        <ul className="space-y-1.5">
          <li>
            <Link
              className={clsx(
                "flex items-center gap-x-3.5 py-2 px-2.5 rounded-lg hover:bg-muted transition-all duration-200",
                currentPath === "/" &&
                  "bg-muted-foreground text-primary-foreground hover:bg-muted-foreground"
              )}
              to={"/"}>
              Project Overview
            </Link>
          </li>
          <li>
            <Link
              className={clsx(
                "flex items-center gap-x-3.5 py-2 px-2.5 rounded-lg hover:bg-muted transition-all duration-200",
                currentPath === "/timeline" &&
                  "bg-muted-foreground text-primary-foreground hover:bg-muted-foreground"
              )}
              to={"/timeline"}>
              Project Timeline
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
