import { Calculator, ChartBar, Users, Building2, ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function App() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <nav className="container mx-auto p-4 flex justify-between items-center border-b">
        <h1 className="text-2xl font-bold text-gray-900">ContaMax</h1>
        <div className="flex gap-6">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">Serviços</Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">Sobre</Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">Contato</Button>
          <Button className="bg-pink-500 text-white hover:bg-pink-600">
            Agendar Consulta
          </Button>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold leading-tight text-gray-900 animate-fade-up">
            Contabilidade Inteligente para seu Negócio
          </h2>
          <p className="text-gray-600 text-lg">
            Junte-se a mais de 500 empresas que já economizaram milhões em impostos com nossa consultoria especializada.
          </p>
          <Button size="lg" className="bg-pink-500 text-white hover:bg-pink-600 group">
            Começar Agora
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-pink-600/10 rounded-lg blur-lg"></div>
          <Card className="relative bg-white shadow-xl p-8 border border-gray-100">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <h3 className="text-4xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-600">Clientes Ativos</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-4xl font-bold text-gray-900">98%</h3>
                <p className="text-gray-600">Satisfação</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-4xl font-bold text-gray-900">15M+</h3>
                <p className="text-gray-600">Economizados</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-4xl font-bold text-gray-900">10+</h3>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Nossos Serviços</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="bg-white border-gray-100 p-6 h-full hover:shadow-lg transition-shadow">
                    <service.icon className="h-12 w-12 mb-4 text-pink-500" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Por que nos escolher?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0" />
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

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Entre em Contato</h2>
            <p className="text-gray-600 mb-8">
              Estamos aqui para ajudar seu negócio a crescer. Entre em contato conosco para uma consulta gratuita.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-pink-500" />
                <p className="text-gray-600">(11) 9999-9999</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-pink-500" />
                <p className="text-gray-600">contato@contamax.com.br</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-pink-500" />
                <p className="text-gray-600">São Paulo, SP</p>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="h-5 w-5 text-pink-500" />
                <p className="text-gray-600">Seg - Sex: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
          <Card className="p-6 border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Agende uma Consulta</h3>
            <Button className="w-full bg-pink-500 text-white hover:bg-pink-600">
              Agendar Agora
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">ContaMax</h3>
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
              © 2024 ContaMax. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    title: "Consultoria Fiscal",
    description: "Estratégias inteligentes para minimizar sua carga tributária legalmente.",
    icon: Calculator
  },
  {
    title: "Análise Financeira",
    description: "Relatórios detalhados e insights para tomada de decisões.",
    icon: ChartBar
  },
  {
    title: "Gestão de Folha",
    description: "Administração completa de funcionários e encargos.",
    icon: Users
  },
  {
    title: "Abertura de Empresa",
    description: "Suporte completo para iniciar seu negócio.",
    icon: Building2
  }
];

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
    text: "A ContaMax transformou nossa gestão fiscal. Economizamos mais de 30% em impostos no primeiro ano."
  },
  {
    name: "Carlos Santos",
    company: "Mercado Express",
    text: "Profissionais excepcionais e atendimento de primeira linha. Recomendo fortemente."
  },
  {
    name: "Marina Costa",
    company: "Startup Innovation",
    text: "A melhor decisão que tomamos foi contratar a ContaMax. Nossos processos contábeis nunca foram tão eficientes."
  }
];
