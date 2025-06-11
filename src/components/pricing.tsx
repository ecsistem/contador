import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

export function Pricing() {
    return (
        <section
        id="pricing"
        className="py-20 bg-gradient-to-b from-pink-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Planos que se adaptam ao seu negócio
            </h2>
            <p className="text-muted-foreground">
              Escolha o plano ideal para sua empresa e comece a transformar sua
              contabilidade hoje mesmo.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "MEI",
                price: "R$ 150",
                description: "Ideal para MEIs e pequenos negócios",
                features: [
                  "Contabilidade fiscal básica",
                  "Declarações obrigatórias",
                  "Folha de pagamento (até 3 funcionários)",
                  "Acesso à plataforma digital",
                  "Suporte por e-mail",
                ],
                highlighted: false,
                mensal: true,
              },
              {
                name: "Simples Nacional",
                price: "R$ 350",
                description: "Perfeito para empresas em crescimento",
                features: [
                  "Contabilidade fiscal completa",
                  "Todas as declarações obrigatórias",
                  "Folha de pagamento (até 10 funcionários)",
                  "Consultoria mensal",
                  "Relatórios gerenciais",
                  "Planejamento tributário básico",
                  "Suporte prioritário",
                ],
                highlighted: true,
                mensal: true,
              },
              {
                name: "Lucro Real e Lucro Presumido",
                price: "A consultar ",
                description: "Para empresas que buscam excelência",
                features: [
                  "Contabilidade fiscal e gerencial",
                  "Todas as declarações obrigatórias",
                  "Folha de pagamento ilimitada",
                  "Consultoria semanal",
                  "Relatórios gerenciais avançados",
                  "Planejamento tributário completo",
                  "Suporte 24/7",
                  "Consultor dedicado",
                ],
                highlighted: false,
                mensal: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 border ${
                  plan.highlighted
                    ? "border-pink-300 bg-white shadow-lg relative"
                    : "border-pink-100 bg-white/80"
                }`}
              >
                {/* {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </div>
                )} */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center gap-1 mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.mensal && <span className="text-muted-foreground">/mês</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-pink-500 hover:bg-pink-600 text-white"
                      : "bg-white hover:bg-pink-50 text-pink-500 border border-pink-200"
                  }`}
                >
                  Contratar Agora
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">
            Todos os planos incluem suporte e acesso à plataforma digital.
            Consulte condições específicas para seu segmento.
          </div>
        </div>
      </section>
    )
}