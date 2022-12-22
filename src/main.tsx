import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import "@/global";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

root.render(
  <StrictMode>
    <Suspense fallback={<>loading</>}>
      <App />
    </Suspense>
  </StrictMode>
);
