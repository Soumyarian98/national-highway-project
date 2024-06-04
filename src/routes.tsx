import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/login";
import Home from "./pages";
import Timeline from "./pages/timeline";
import ChainageDescription from "./pages/chainage-description";
import Phase from "./pages/phase";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/timeline",
    element: <Timeline />,
  },
  {
    path: "/phase",
    element: <Phase />,
  },
  {
    path: "/chainage-description",
    element: <ChainageDescription />,
  },
]);

export const routeTitles = {
  "/": "Project Overview",
  "/timeline": "Timeline",
  "/phase": "Phase 1",
  "/chainage-description": "Chainage Description",
};
