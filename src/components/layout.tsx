import { Outlet } from "react-router-dom";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { Cta } from "./cta";
import { CookieConsent } from "./cookie-consent";

export function Layout() {
  return (
    <div className="bg-[#f8fafc]">
      <Nav />
        <Outlet />
      <Cta />
      <Footer />
      <CookieConsent />
    </div>
  );
}