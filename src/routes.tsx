import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "@/pages/login";
import Home from "./pages";
import Timeline from "./pages/timeline";
import ChainageDescription from "./pages/chainage-description";
import Phase from "./pages/phase";
import ChainageDetails from "./pages/chainage/[id]";

const loader = async () => {
  if (!localStorage.getItem("isLoggedIn")) {
    return redirect("/login");
  }
  return null;
};

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
    loader,
  },
  {
    path: "/timeline",
    element: <Timeline />,
    loader,
  },
  {
    path: "/phase",
    element: <Phase />,
    loader,
  },
  {
    path: "/chainage-description",
    element: <ChainageDescription />,
    loader,
  },
  {
    path: "/chainage",
    children: [
      {
        path: "/chainage/:id",
        element: <ChainageDetails />,
      },
    ],
  },
]);

export const routeTitles = {
  "/": "Project Overview",
  "/timeline": "Timeline",
  "/phase": "Phase 1",
  "/chainage-description": "Chainage Description",
};
