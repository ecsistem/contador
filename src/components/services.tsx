import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Building2, Calculator, ChartBar, Users } from "lucide-react";

export function Services() {
    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20">
            <div className="container mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Nossos Serviços</h2>
                    <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
                </div>
                
                {/* Desktop view - Grid layout */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-all p-6 flex flex-col items-center text-center">
                            <div className="bg-pink-50 p-4 rounded-full mb-5">
                                <service.icon className="h-10 w-10 text-pink-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </Card>
                    ))}
                </div>

                {/* Mobile view - Carousel */}
                <div className="md:hidden">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {services.map((service, index) => (
                                <CarouselItem key={index} className="pl-1 md:pl-2">
                                    <Card className="bg-white border-0 shadow-sm p-6 h-full flex flex-col items-center text-center">
                                        <div className="bg-pink-50 p-3 rounded-full mb-4">
                                            <service.icon className="h-8 w-8 text-pink-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2 text-gray-800">{service.title}</h3>
                                        <p className="text-sm text-gray-600">{service.description}</p>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center mt-4">
                            <CarouselPrevious className="mr-2 static translate-y-0" />
                            <CarouselNext className="ml-2 static translate-y-0" />
                        </div>
                    </Carousel>
                </div>
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