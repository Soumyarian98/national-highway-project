import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "@/routes";
import { Toaster } from "sonner";
import { useGLTF } from "@react-three/drei";

import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";

useGLTF.preload(
  "https://utfs.io/f/da836bb2-5ca4-4f07-bbeb-f5cf4ad7bbdf-hb7n1.glb"
);
useGLTF.preload(
  "https://utfs.io/f/f320517c-1998-4155-ae7e-3138cb940fa5-f0ipwn.glb"
);
useGLTF.preload("/full_road_1.glb");

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="roadways-project-theme">
        <RouterProvider router={router} />
        <Toaster position="top-center" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
