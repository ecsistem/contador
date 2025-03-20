import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-center w-full pt-6">
      <nav className="container rounded-xl backdrop-blur-md bg-white/80 shadow-lg border border-white/30 overflow-hidden">
        <div className="p-4 flex justify-between items-center">
            <div className="flex items-center">
            <NavLink to="/" end>
              <img src="/images/logo.png" alt="Logo" width={160} height={80} className="h-10 w-auto" />
            </NavLink>
            </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-white/40 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-5">
            <NavLink className="text-gray-700 hover:text-gray-900 hover:bg-white/50 font-medium" to="/" end>
              Início
            </NavLink>
            <NavLink className="text-gray-700 hover:text-gray-900 hover:bg-white/50 font-medium" to="/servicos" end>
            Serviços
            </NavLink>
            <NavLink className="text-gray-700 hover:text-gray-900 hover:bg-white/50 font-medium" to="/sobre-nos" end>
            Sobre
            </NavLink>
            <NavLink className="text-gray-700 hover:text-gray-900 hover:bg-white/50 font-medium" to="/abrir-empresa" end>
            Abrir empresa
            </NavLink>
            <NavLink className="text-gray-700 hover:text-gray-900 hover:bg-white/50 font-medium" to="/contatos" end>
            Contatos
            </NavLink>
            <Button className="bg-pink-500 text-white hover:bg-pink-600 shadow-md transition-all duration-300 hover:shadow-lg rounded-full px-6">
              Agendar Consulta
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 border-t border-white/20">
            <div className="flex flex-col p-4 space-y-3">
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 hover:bg-white/50 w-full justify-start font-medium">Serviços</Button>
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 hover:bg-white/50 w-full justify-start font-medium">Sobre</Button>
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 hover:bg-white/50 w-full justify-start font-medium">Contato</Button>
              <Button className="bg-pink-500 text-white hover:bg-pink-600 w-full shadow-md transition-all duration-300 hover:shadow-lg rounded-full">
                Agendar Consulta
              </Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}