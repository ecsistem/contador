import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hero } from '@/components/hero';
import { Nav } from '@/components/nav';
import { Services } from './components/services';
import { Partners } from './components/partners';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';

export function App() {
  return (
    <div className="bg-[#f8fafc]">
      <Nav />
      <Hero />
      <Partners />
      <Services />

      {/* Benefits Section */}
      <section id="benefits" className="container mx-auto px-4 py-20 bg-gradient-to-b from-pink-50 to-[#f8fafc]">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="Benefícios da Contabilidade Moderna"
                  width={500}
                  height={500}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Por que escolher nossa contabilidade?</h2>
                <p className="text-muted-foreground">
                  Nossa abordagem moderna combina tecnologia avançada com atendimento personalizado para oferecer o
                  melhor serviço contábil para sua empresa.
                </p>
                <div className="space-y-4">
                  {[
                    "Atendimento personalizado e ágil",
                    "Plataforma digital para acesso 24/7",
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
                <Button className="bg-pink-500 hover:bg-pink-600 text-white mt-4">Conheça Todos os Benefícios</Button>
              </div>
            </div>
          </div>
        </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Por que nos escolher?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-white hover:bg-gray-50 transition-colors">
              <div className='flex items-center justify-center w-12 h-12 min-w-12 max-w-12pnp bg-pink-100 rounded-full'>
              <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">O que nossos clientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
       {/* Pricing Section */}
       <section id="pricing" className="py-20 bg-gradient-to-b from-pink-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Planos que se adaptam ao seu negócio</h2>
              <p className="text-muted-foreground">
                Escolha o plano ideal para sua empresa e comece a transformar sua contabilidade hoje mesmo.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Essencial",
                  price: "R$ 499",
                  description: "Ideal para MEIs e pequenos negócios",
                  features: [
                    "Contabilidade fiscal básica",
                    "Declarações obrigatórias",
                    "Folha de pagamento (até 3 funcionários)",
                    "Acesso à plataforma digital",
                    "Suporte por e-mail",
                  ],
                  highlighted: false,
                },
                {
                  name: "Empresarial",
                  price: "R$ 899",
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
                },
                {
                  name: "Premium",
                  price: "R$ 1.499",
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
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-6 border ${
                    plan.highlighted ? "border-pink-300 bg-white shadow-lg relative" : "border-pink-100 bg-white/80"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-end justify-center gap-1 mb-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/mês</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
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
              Todos os planos incluem suporte e acesso à plataforma digital. Consulte condições específicas para seu
              segmento.
            </div>
          </div>
        </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Pronto para transformar sua contabilidade?</h2>
                <p className="text-muted-foreground">
                  Entre em contato conosco hoje mesmo e descubra como podemos ajudar seu negócio a crescer com nossa
                  contabilidade moderna e eficiente.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-pink-500"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Telefone</p>
                      <p className="text-muted-foreground">(11) 4002-8922</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-pink-500"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">E-mail</p>
                      <p className="text-muted-foreground">contato@contamoderna.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-pink-500"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-muted-foreground">Av. Paulista, 1000 - São Paulo, SP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-pink-100 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Fale Conosco</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome
                      </label>
                      <Input id="name" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Empresa
                      </label>
                      <Input id="company" placeholder="Sua empresa" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        E-mail
                      </label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Telefone
                      </label>
                      <Input id="phone" placeholder="(00) 00000-0000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea id="message" placeholder="Como podemos ajudar?" rows={4} />
                  </div>
                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">Enviar Mensagem</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-pink-500 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Pronto para simplificar sua contabilidade?</h2>
                <p className="text-pink-100">
                  Agende uma consulta gratuita e descubra como podemos ajudar seu negócio.
                </p>
              </div>
              <Button size="lg" className="bg-white text-pink-500 hover:bg-pink-50">
                Agendar Consulta Gratuita
              </Button>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Comtato</h3>
              <p className="text-gray-600">Sua contabilidade inteligente</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-900">Serviços</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Consultoria Fiscal</li>
                <li>Análise Financeira</li>
                <li>Gestão de Folha</li>
                <li>Abertura de Empresa</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-900">Empresa</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Sobre Nós</li>
                <li>Carreiras</li>
                <li>Blog</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-900">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Termos de Uso</li>
                <li>Privacidade</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600">
              © 2025 Comtato. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}



const features = [
  {
    title: "Atendimento Personalizado",
    description: "Equipe dedicada para atender todas as suas necessidades."
  },
  {
    title: "Tecnologia Avançada",
    description: "Sistemas modernos para gestão eficiente."
  },
  {
    title: "Economia Garantida",
    description: "Estratégias comprovadas para redução de custos."
  },
  {
    title: "Suporte 24/7",
    description: "Assistência contínua para seu negócio."
  },
  {
    title: "Conformidade Legal",
    description: "Sempre atualizado com as legislações vigentes."
  },
  {
    title: "Relatórios Detalhados",
    description: "Informações claras e objetivas sobre seu negócio."
  }
];

const testimonials = [
  {
    name: "Ana Silva",
    company: "Tech Solutions",
    text: "A Comtato transformou nossa gestão fiscal. Economizamos mais de 30% em impostos no primeiro ano."
  },
  {
    name: "Carlos Santos",
    company: "Mercado Express",
    text: "Profissionais excepcionais e atendimento de primeira linha. Recomendo fortemente."
  },
  {
    name: "Marina Costa",
    company: "Startup Innovation",
    text: "A melhor decisão que tomamos foi contratar a Comtato. Nossos processos contábeis nunca foram tão eficientes."
  }
];
