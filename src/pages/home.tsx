import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";
import { Services } from "../components/services";
import { Pricing } from "../components/pricing";
import { Contact } from "../components/contact";

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      {/* Benefits Section */}
      <section
        id="benefits"
        className="container mx-auto px-4 sm:px-6 py-16 md:py-20 bg-gradient-to-b from-pink-50 to-[#f8fafc] rounded-lg"
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/logo.svg"
                alt="COMTATO Logo"
                width={500}
                height={500}
              />
            </div>
            <div className="space-y-4 md:space-y-6 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold">
                Por que escolher nossa contabilidade?
              </h2>
              <p className="text-muted-foreground">
                O mercado está cada vez mais dinâmico e competitivo, e ter um
                profissional contábil que vai além da burocracia e atua como um
                verdadeiro parceiro de negócios faz toda a diferença. A
                Contabilidade Consultiva proporciona maior previsibilidade
                financeira, otimização de resultados e segurança na gestão
                empresarial. 
                <br />
                Empresas que adotam esse modelo contábil conseguem
                crescer com mais solidez, tomar decisões embasadas e evitar
                surpresas financeiras. Portanto, contar com uma contabilidade
                consultiva é um diferencial estratégico para qualquer negócio
                que deseja se destacar no mercado.
              </p>
              <div className="space-y-3 md:space-y-4">
                {[
                  "Atendimento personalizado e ágil",
                  "Equipe especializada e atualizada",
                  "Redução de custos operacionais",
                  "Segurança e conformidade fiscal",
                  "Relatórios gerenciais detalhados",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white mt-4 w-full sm:w-auto">
                Conheça Todos os Benefícios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Por que nos escolher?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 rounded-lg bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 min-w-12 max-w-12pnp bg-pink-100 rounded-full">
                <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Pricing />
      <Contact />
    </>
  );
}

const features = [
  {
    title: "Atendimento Personalizado",
    description: "Equipe dedicada para atender todas as suas necessidades.",
  },
  {
    title: "Tecnologia Avançada",
    description: "Sistemas modernos para gestão eficiente.",
  },
  {
    title: "Economia Garantida",
    description: "Estratégias comprovadas para redução de custos.",
  },
  {
    title: "Suporte 24/7",
    description: "Assistência contínua para seu negócio.",
  },
  {
    title: "Conformidade Legal",
    description: "Sempre atualizado com as legislações vigentes.",
  },
  {
    title: "Relatórios Detalhados",
    description: "Informações claras e objetivas sobre seu negócio.",
  },
];
