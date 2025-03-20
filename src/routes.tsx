import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home";
import { AboutUs } from "./pages/about";
import { Layout } from "./components/layout";
import { ServicesPage } from "./pages/services";
import AberturaDaEmpresaPage from "./pages/business-open";

export function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre-nos" element={<AboutUs />} />
          <Route path="servicos" element={<ServicesPage />} />
          <Route path="abrir-empresa" element={<AberturaDaEmpresaPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}