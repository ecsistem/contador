import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Building2, Calculator, ChartBar, Users } from "lucide-react";
export function Services() {
    return (
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
    )
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