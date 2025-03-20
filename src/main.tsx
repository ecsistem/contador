import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"; // Updated import
import { App } from "./App";
import { AboutUs } from "./pages/about";
import { Layout } from "./components/Layout";

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="sobre-nos" element={<AboutUs />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);