import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home";
import { AboutUs } from "./pages/about";
import { Layout } from "./components/layout";

export function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre-nos" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}