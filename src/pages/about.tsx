import { Contact } from "@/components/contact"
import { Button } from "@/components/ui/button"
import {
  Award,
  Users,
  Target,
  Clock,
  CheckCircle,
  ArrowRight,
  Building,
  Briefcase,
  GraduationCap,
  Heart,
  TrendingUp,
  MapPin,
} from "lucide-react"
import Rapha from "/images/rapha.jpeg"

export function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-pink-100 -z-10" />
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Conheça a <span className="text-pink-500">COMTATO</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Somos uma equipe apaixonada por transformar a contabilidade tradicional em uma experiência moderna,
              transparente e eficiente para empresas de todos os tamanhos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
                Conheça Nossa Equipe
              </Button>
              <Button size="lg" variant="outline" className="border-pink-200 hover:bg-pink-50">
                Nossa História
              </Button>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  alt="Nossa História"
                  src="/images/logo.svg"
                width={500}
                height={500}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600 font-medium">
                  Nossa História
                </div>
                <h2 className="text-3xl font-bold">Sobre a COMTATO Contabilidade</h2>
                <p className="text-muted-foreground">
                Fundada com a missão de transformar a contabilidade em uma ferramenta estratégica para os negócios, nossa empresa se dedica a fornecer soluções contábeis personalizadas, com foco no crescimento e sucesso de nossos clientes. Com uma equipe de profissionais experientes e qualificados, nosso objetivo é ser mais do que um prestador de serviços: queremos ser um verdadeiro parceiro do seu negócio, ajudando a simplificar a gestão financeira e a otimizar processos.
                </p>
                <p className="text-muted-foreground">
                Com anos de experiência, entendemos as complexidades do ambiente empresarial e trabalhamos para transformar a contabilidade em uma aliada na tomada de decisões, fornecendo dados e insights que promovem a sustentabilidade e o sucesso dos negócios. Acreditamos que, além de cumprir as obrigações legais, a contabilidade deve ajudar os empresários a planejar o futuro de forma estratégica e assertiva.
                </p>
                <p className="text-muted-foreground">
                Seja você um pequeno empresário ou um Microempreendedor Individual (MEI), estamos aqui para oferecer soluções contábeis de qualidade, garantindo a saúde financeira do seu negócio e impulsionando o seu crescimento sustentável.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600 font-medium mb-4">
                Nossa Essência
              </div>
              <h2 className="text-3xl font-bold mb-4">Missão, Visão e Valores</h2>
              <p className="text-muted-foreground">
                Nossos princípios fundamentais guiam cada decisão que tomamos e cada serviço que oferecemos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 mb-6">
                  <Target className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Missão</h3>
                <p className="text-muted-foreground">
                  Transformar a contabilidade em uma ferramenta estratégica de crescimento para empresas brasileiras,
                  através de soluções, atendimento humanizado e expertise técnica.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 mb-6">
                  <TrendingUp className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Visão</h3>
                <p className="text-muted-foreground">
                Ser reconhecida como a parceira estratégica que transforma a contabilidade em um diferencial competitivo para empresas de todos os portes, oferecendo soluções inovadoras e consultivas que garantem crescimento sustentável e tomada de decisões mais assertivas.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 mb-6">
                  <Heart className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Valores</h3>
                <ul className="text-muted-foreground text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span>Inovação constante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span>Transparência em todas as ações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span>Excelência técnica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span>Empatia com o cliente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span>Responsabilidade social</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600 font-medium mb-4">
        Nossa Equipe
      </div>
      <h2 className="text-3xl font-bold mb-4">Conheça os Especialistas</h2>
      <p className="text-muted-foreground">
        Nossa equipe é formada por profissionais apaixonados por contabilidade e tecnologia, comprometidos em
        oferecer o melhor serviço para nossos clientes.
      </p>
    </div>

    <div className="flex justify-center">
      <div className="max-w-md">
        {[
          {
            name: "Raphael Tavares",
            role: "CEO & Especialista Tributário",
            bio: "Contador com mais de 20 anos de experiência, especialista em gestão estratégica e inovação em serviços contábeis.",
            education: "Mestrado em Contabilidade pela UFPA",
            image: Rapha,
          },
        ].map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
          >
            <div className="relative">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={400}
                height={400}
                className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <p className="font-medium mb-2">{member.bio}</p>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-sm">{member.education}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-pink-500 font-medium mb-4">{member.role}</p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-pink-500 hover:underline"
              >
                Ver perfil completo <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="text-center mt-12">
      <Button className="bg-pink-500 hover:bg-pink-600 text-white">Conheça Toda a Equipe</Button>
    </div>
  </div>
</section>

        {/* Timeline Section */}
        <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600 font-medium mb-4">
                Nossa Trajetória
              </div>
              <h2 className="text-3xl font-bold mb-4">Marcos Importantes</h2>
              <p className="text-muted-foreground">
                Uma jornada de inovação, crescimento e compromisso com a excelência em contabilidade.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-200 hidden md:block" />

              <div className="space-y-12">
                {[
                  {
                    year: "2010",
                    title: "Fundação da COMTATO",
                    description:
                      "Início das operações com apenas 3 colaboradores e 15 clientes em uma pequena sala comercial.",
                    icon: <Building className="h-6 w-6 text-pink-500" />,
                  },
                  {
                    year: "2013",
                    title: "Primeiro Escritório Próprio",
                    description: "Aquisição do primeiro escritório próprio e expansão da equipe para 15 colaboradores.",
                    icon: <MapPin className="h-6 w-6 text-pink-500" />,
                  },
                  {
                    year: "2015",
                    title: "Lançamento da Plataforma Digital",
                    description:
                      "Desenvolvimento e lançamento da plataforma digital própria, revolucionando o atendimento aos clientes.",
                    icon: <Briefcase className="h-6 w-6 text-pink-500" />,
                  },
                  {
                    year: "2017",
                    title: "Expansão para São Paulo",
                    description: "Abertura do escritório em São Paulo, marcando o início da expansão nacional.",
                    icon: <TrendingUp className="h-6 w-6 text-pink-500" />,
                  },
                  {
                    year: "2019",
                    title: "Prêmio de Inovação",
                    description:
                      "Reconhecimento como empresa mais inovadora do setor contábil pelo Conselho Federal de Contabilidade.",
                    icon: <Award className="h-6 w-6 text-pink-500" />,
                  },
                  {
                    year: "2022",
                    title: "500 Clientes Atendidos",
                    description:
                      "Marco de 100 empresasatendidas simultaneamente e abertura de escritórios em mais 4 capitais.",
                    icon: <Users className="h-6 w-6 text-pink-500" />,
                  },
                  {
                    year: "2024",
                    title: "Lançamento do App Mobile",
                    description: "Lançamento do aplicativo móvel, permitindo acesso à contabilidade na palma da mão.",
                    icon: <Clock className="h-6 w-6 text-pink-500" />,
                  },
                ].map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start md:items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      <div
                        className={`bg-white p-6 rounded-xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"} max-w-lg`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600 font-bold">
                            {milestone.year}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-pink-100 border-4 border-white flex items-center justify-center z-10">
                        {milestone.icon}
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
    </div>
  )
}
