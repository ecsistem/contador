import {
  Calculator,
  ChartBar,
  Users,
  Building2,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function App() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      {/* Hero Section */}
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">ContaMax</h1>
        <div className="flex gap-6">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Serviços
          </Button>
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Sobre
          </Button>
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Contato
          </Button>
          <Button className="bg-lime-400 text-black hover:bg-lime-500">
            Agendar Consulta
          </Button>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold leading-tight text-white animate-fade-up">
            Contabilidade Inteligente para seu Negócio
          </h2>
          <p className="text-gray-400 text-lg">
            Junte-se a mais de 500 empresas que já economizaram milhões em
            impostos com nossa consultoria especializada.
          </p>
          <Button
            size="lg"
            className="bg-lime-400 text-black hover:bg-lime-500 group"
          >
            Começar Agora
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-lime-400/20 to-lime-500/10 rounded-lg blur-lg"></div>
          <Card className="relative bg-zinc-800/50 border-white/10 p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <h3 className="text-4xl font-bold text-white">500+</h3>
                <p className="text-gray-400">Clientes Ativos</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-4xl font-bold text-white">98%</h3>
                <p className="text-gray-400">Satisfação</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-4xl font-bold text-white">15M+</h3>
                <p className="text-gray-400">Economizados</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-4xl font-bold text-white">10+</h3>
                <p className="text-gray-400">Anos de Experiência</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Nossos Serviços
        </h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 p-2"
              >
                <Card className="bg-zinc-800/50 border-white/10 p-6 h-full hover:bg-zinc-700/50 transition-colors">
                  <service.icon className="h-12 w-12 mb-4 text-lime-400" />
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white" />
          <CarouselNext className="text-white" />
        </Carousel>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-lime-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border-white/10 p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Pronto para Começar?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Agende uma consulta gratuita e descubra como podemos ajudar seu
            negócio a crescer com inteligência fiscal.
          </p>
          <Button
            size="lg"
            className="bg-lime-400 text-black hover:bg-lime-500"
          >
            Agendar Consulta Gratuita
          </Button>
        </Card>
      </section>
    </div>
  );
}

const services = [
  {
    title: 'Consultoria Fiscal',
    description:
      'Estratégias inteligentes para minimizar sua carga tributária legalmente.',
    icon: Calculator,
  },
  {
    title: 'Análise Financeira',
    description: 'Relatórios detalhados e insights para tomada de decisões.',
    icon: ChartBar,
  },
  {
    title: 'Gestão de Folha',
    description: 'Administração completa de funcionários e encargos.',
    icon: Users,
  },
  {
    title: 'Abertura de Empresa',
    description: 'Suporte completo para iniciar seu negócio.',
    icon: Building2,
  },
];

const features = [
  {
    title: 'Atendimento Personalizado',
    description: 'Equipe dedicada para atender todas as suas necessidades.',
  },
  {
    title: 'Tecnologia Avançada',
    description: 'Sistemas modernos para gestão eficiente.',
  },
  {
    title: 'Economia Garantida',
    description: 'Estratégias comprovadas para redução de custos.',
  },
  {
    title: 'Suporte 24/7',
    description: 'Assistência contínua para seu negócio.',
  },
  {
    title: 'Conformidade Legal',
    description: 'Sempre atualizado com as legislações vigentes.',
  },
  {
    title: 'Relatórios Detalhados',
    description: 'Informações claras e objetivas sobre seu negócio.',
  },
];
