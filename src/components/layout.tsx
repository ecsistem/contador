import { Outlet } from "react-router-dom";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { Cta } from "./cta";

export function Layout() {
  return (
    <div className="bg-[#f8fafc]">
      <Nav />
        <Outlet />
      <Cta />
      <Footer />
    </div>
  );
}