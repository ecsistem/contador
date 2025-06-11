import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function Hero() {

  const handleAgendarConsultaClick = () => {
    const whatsappNumber = "5561996333545";
    const message = "Olá! Vim pelo site e gostaria de agendar uma consulta gratuita.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative py-24 md:py-48 min-h-96 flex flex-col overflow-hidden bg-gradient-to-br from-transparent to-pink-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
      </div>
      
      {/* Main content - Centered */}
      <div className="container mx-auto px-6 flex flex-col items-center justify-center z-10 flex-grow">
        <div className="max-w-4xl text-center space-y-8 animate-fade-up pt-12">
          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-[#0f172a]">
            Contabilidade <span className="text-transparent bg-clip-text bg-pink-500"> consultiva</span> para seu Negócio
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Junte-se a mais de 100 empresasque já economizaram milhões em impostos com nossa consultoria especializada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:opacity-90 transition-all group px-8 py-6 text-lg"
              onClick={handleAgendarConsultaClick}
            >
              Agendar Consulta
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-pink-200 text-pink-600 hover:bg-pink-50 px-8 py-6 text-lg" onClick={() => {
                  const element = document.getElementById("pricing");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}>
              Conhecer Planos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}