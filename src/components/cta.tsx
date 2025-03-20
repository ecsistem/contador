import { Button } from "./ui/button";

export function Cta() {
    return ( 
        <section className="py-20 bg-pink-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Pronto para simplificar sua contabilidade?
              </h2>
              <p className="text-pink-100">
                Agende uma consulta gratuita e descubra como podemos ajudar seu
                negócio.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white text-pink-500 hover:bg-pink-50"
            >
              Agendar Consulta Gratuita
            </Button>
          </div>
        </div>
      </section>
     );
}