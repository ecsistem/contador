import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/servicos", label: "Serviços" },
    { to: "/sobre-nos", label: "Sobre" },
    { to: "/abrir-empresa", label: "Abrir empresa" },
    { to: "/contatos", label: "Contatos" },
  ];

  const handleAgendarConsultaClick = () => {
    const whatsappNumber = "5561996333545";
        const message = "Olá! Vim pelo site e gostaria de agendar uma consulta gratuita.";
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex justify-center w-full pt-6">
      <nav className="container rounded-xl backdrop-blur-md bg-white/80 shadow-lg border border-white/30 overflow-hidden">
        <div className="p-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" end>
            <img
              src="/images/logo.png"
              alt="Logo"
              width={160}
              height={80}
              className="h-10 w-auto"
            />
          </NavLink>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-white/40 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                className="text-gray-700 hover:text-gray-900 hover:bg-white/50 font-medium"
                to={link.to}
                end
              >
                {link.label}
              </NavLink>
            ))}
            <Button 
              onClick={handleAgendarConsultaClick}
              className="bg-pink-500 text-white hover:bg-pink-600 shadow-md transition-all duration-300 hover:shadow-lg rounded-full px-6"
            >
              Agendar Consulta
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 border-t border-white/20">
            <div className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  className="text-gray-700 hover:text-gray-900 hover:bg-white/50 font-medium"
                  to={link.to}
                  end
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                className="bg-pink-500 text-white hover:bg-pink-600 w-full shadow-md transition-all duration-300 hover:shadow-lg rounded-full text-center py-2"
                href="https://wa.me/5561996333545"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}