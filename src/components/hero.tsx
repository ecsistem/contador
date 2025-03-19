import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-transparent to-pink-50">
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
            Contabilidade <span className="text-transparent bg-clip-text bg-pink-500">Inteligente</span> para seu Negócio
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Junte-se a mais de 500 empresas que já economizaram milhões em impostos com nossa consultoria especializada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:opacity-90 transition-all group px-8 py-6 text-lg">
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-pink-200 text-pink-600 hover:bg-pink-50 px-8 py-6 text-lg">
              Conhecer Planos
            </Button>
          </div>
        </div>
      </div>

      {/* Results section - Bottom */}
      {/* <div className="container mx-auto px-6 pb-12 z-10">
        <div className="relative mx-auto max-w-5xl mt-8 mb-4">
          <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-2xl blur-xl"></div>
          <Card className="relative bg-white/80 backdrop-blur-sm shadow-2xl p-8 border border-gray-100/50 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Resultados Comprovados</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-4 transform hover:scale-105 transition-transform">
                <h3 className="text-5xl font-bold text-pink-500 bg-clip-text">500+</h3>
                <p className="text-gray-600 mt-2 font-medium">Clientes Ativos</p>
              </div>
              <div className="text-center p-4 transform hover:scale-105 transition-transform">
                <h3 className="text-5xl font-bold text-pink-500 bg-clip-text">98%</h3>
                <p className="text-gray-600 mt-2 font-medium">Satisfação</p>
              </div>
              <div className="text-center p-4 transform hover:scale-105 transition-transform">
                <h3 className="text-5xl font-bold text-pink-500 bg-clip-text">15M+</h3>
                <p className="text-gray-600 mt-2 font-medium">Economizados</p>
              </div>
              <div className="text-center p-4 transform hover:scale-105 transition-transform">
                <h3 className="text-5xl font-bold text-pink-500 bg-clip-text">10+</h3>
                <p className="text-gray-600 mt-2 font-medium">Anos de Experiência</p>
              </div>
            </div>
          </Card>
        </div>
      </div> */}
    </section>
  );
}