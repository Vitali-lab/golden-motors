import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";
import { Loader } from "./components/Loader/Loader";
import "./index.css";
import "./styles/animations.css";

const App = lazy(() => import("./App"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </StrictMode>,
);
