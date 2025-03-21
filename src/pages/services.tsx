
import { Button } from "@/components/ui/button"
import {
  Calculator,
  FileText,
  Users,
  BarChartIcon as ChartBar,
  Shield,
  Building,
  FileCheck,
  PieChart,
  Briefcase,
  Landmark,
  BookOpen,
  Coins,
  Scale,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  Smartphone,
  Heart,
  ShoppingCart,
  Home,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Contact } from "@/components/contact"
import { Pricing } from "@/components/pricing"

export function ServicesPage() {
  // Array of all services with their details
  const allServices = [
    {
      id: "contabilidade-fiscal",
      icon: <FileText className="h-10 w-10 text-pink-500" />,
      title: "Contabilidade Fiscal",
      shortDescription: "Gestão completa de obrigações fiscais, reduzindo impostos legalmente.",
      fullDescription:
        "Nossa equipe especializada em contabilidade fiscal cuida de todas as obrigações tributárias da sua empresa, garantindo conformidade com a legislação e identificando oportunidades para redução legal da carga tributária.",
      features: [
        "Escrituração fiscal completa",
        "Apuração e declaração de impostos (ICMS, IPI, ISS, PIS, COFINS)",
        "Emissão e gestão de notas fiscais",
        "Elaboração e envio de obrigações acessórias (SPED, EFD, ECD, ECF)",
        "Acompanhamento de alterações na legislação fiscal",
        "Representação junto aos órgãos fiscalizadores",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "departamento-pessoal",
      icon: <Users className="h-10 w-10 text-pink-500" />,
      title: "Departamento Pessoal",
      shortDescription: "Administração de folha de pagamento, férias, rescisões e obrigações trabalhistas.",
      fullDescription:
        "Nosso departamento pessoal cuida de todos os aspectos relacionados à gestão de colaboradores, desde a admissão até o desligamento, garantindo conformidade com a legislação trabalhista e previdenciária.",
      features: [
        "Admissão e registro de funcionários",
        "Cálculo e processamento de folha de pagamento",
        "Férias, 13º salário e rescisões",
        "Cálculo e recolhimento de encargos sociais (INSS, FGTS, IRRF)",
        "Envio de obrigações acessórias (CAGED, RAIS, DIRF, eSocial)",
        "Homologações e acordos trabalhistas",
        "Gestão de benefícios e controle de ponto",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "consultoria-financeira",
      icon: <ChartBar className="h-10 w-10 text-pink-500" />,
      title: "Consultoria Financeira",
      shortDescription: "Análise de indicadores e orientação para tomada de decisões estratégicas.",
      fullDescription:
        "Nossa consultoria financeira oferece análises detalhadas e orientações estratégicas para auxiliar na tomada de decisões, otimização de recursos e crescimento sustentável do seu negócio.",
      features: [
        "Análise de demonstrações financeiras",
        "Elaboração de indicadores de desempenho (KPIs)",
        "Gestão de fluxo de caixa",
        "Orçamento empresarial e projeções financeiras",
        "Análise de viabilidade de projetos e investimentos",
        "Reestruturação financeira",
        "Estratégias para captação de recursos",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "planejamento-tributario",
      icon: <Shield className="h-10 w-10 text-pink-500" />,
      title: "Planejamento Tributário",
      shortDescription: "Estratégias para redução da carga tributária dentro da legalidade.",
      fullDescription:
        "Desenvolvemos estratégias personalizadas para otimizar a carga tributária da sua empresa, sempre dentro da legalidade, identificando oportunidades de economia fiscal e prevenindo riscos.",
      features: [
        "Análise do regime tributário ideal (Simples, Lucro Presumido, Lucro Real)",
        "Identificação de benefícios fiscais aplicáveis",
        "Reorganização societária para otimização fiscal",
        "Análise de operações interestaduais e internacionais",
        "Recuperação de créditos tributários",
        "Prevenção de contingências fiscais",
        "Planejamento sucessório",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "contabilidade-digital",
      icon: <Calculator className="h-10 w-10 text-pink-500" />,
      title: "Contabilidade Digital",
      shortDescription: "Sistema online para acesso a relatórios e documentos a qualquer momento.",
      fullDescription:
        "Nossa plataforma digital de contabilidade permite que você tenha acesso a todas as informações contábeis e financeiras da sua empresa em tempo real, de qualquer lugar e a qualquer momento.",
      features: [
        "Dashboard personalizado com indicadores financeiros",
        "Acesso a relatórios contábeis e fiscais em tempo real",
        "Gestão digital de documentos e comprovantes",
        "Integração com sistemas de gestão empresarial",
        "Aplicativo móvel para acompanhamento financeiro",
        "Alertas automáticos para vencimentos e obrigações",
        "Comunicação direta com a equipe contábil",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "abertura-empresas",
      icon: <Building className="h-10 w-10 text-pink-500" />,
      title: "Abertura de Empresas",
      shortDescription: "Assessoria completa para legalização e registro de novos negócios.",
      fullDescription:
        "Oferecemos assessoria completa para abertura, alteração ou encerramento de empresas, cuidando de toda a burocracia e garantindo agilidade e segurança em todo o processo.",
      features: [
        "Análise do melhor tipo societário e regime tributário",
        "Elaboração de contrato social e documentos constitutivos",
        "Registro na Junta Comercial, Receita Federal, Estado e Município",
        "Obtenção de alvarás e licenças específicas",
        "Inscrições em órgãos de classe e entidades setoriais",
        "Alterações contratuais e societárias",
        "Processos de baixa e encerramento de empresas",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "auditoria-contabil",
      icon: <FileCheck className="h-10 w-10 text-pink-500" />,
      title: "Auditoria Contábil",
      shortDescription: "Verificação da conformidade das demonstrações financeiras e processos contábeis.",
      fullDescription:
        "Nossos serviços de auditoria contábil verificam a conformidade das demonstrações financeiras e processos contábeis da sua empresa, identificando riscos e oportunidades de melhoria.",
      features: [
        "Auditoria das demonstrações financeiras",
        "Revisão de procedimentos contábeis",
        "Verificação de controles internos",
        "Identificação de riscos e vulnerabilidades",
        "Recomendações para adequação às normas contábeis",
        "Due diligence para processos de fusão e aquisição",
        "Emissão de relatórios e pareceres",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "gestao-patrimonial",
      icon: <PieChart className="h-10 w-10 text-pink-500" />,
      title: "Gestão Patrimonial",
      shortDescription: "Controle e administração de ativos e patrimônio empresarial e pessoal.",
      fullDescription:
        "Nossos serviços de gestão patrimonial auxiliam no controle e administração de ativos empresariais e pessoais, otimizando recursos e garantindo a preservação e crescimento do patrimônio.",
      features: [
        "Inventário e controle de ativos",
        "Avaliação e reavaliação patrimonial",
        "Depreciação e amortização de bens",
        "Planejamento sucessório e patrimonial",
        "Gestão de investimentos",
        "Estruturação de holdings familiares",
        "Proteção patrimonial",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "assessoria-empresarial",
      icon: <Briefcase className="h-10 w-10 text-pink-500" />,
      title: "Assessoria Empresarial",
      shortDescription: "Orientação estratégica para gestão, crescimento e solução de problemas empresariais.",
      fullDescription:
        "Nossa assessoria empresarial oferece orientação estratégica para gestão, crescimento e solução de problemas do seu negócio, com foco em resultados e sustentabilidade.",
      features: [
        "Diagnóstico empresarial",
        "Planejamento estratégico",
        "Reestruturação organizacional",
        "Análise de processos e eficiência operacional",
        "Gestão de custos e formação de preços",
        "Desenvolvimento de indicadores de desempenho",
        "Assessoria para tomada de decisões",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "contabilidade-internacional",
      icon: <Landmark className="h-10 w-10 text-pink-500" />,
      title: "Contabilidade Internacional",
      shortDescription: "Serviços contábeis para empresas com operações internacionais ou subsidiárias estrangeiras.",
      fullDescription:
        "Oferecemos serviços contábeis especializados para empresas com operações internacionais ou subsidiárias estrangeiras, garantindo conformidade com normas contábeis internacionais.",
      features: [
        "Conversão de demonstrações financeiras para normas internacionais (IFRS)",
        "Consolidação de demonstrações de empresas multinacionais",
        "Gestão de operações de importação e exportação",
        "Planejamento tributário internacional",
        "Transfer pricing",
        "Assessoria para investimentos estrangeiros no Brasil",
        "Suporte para empresas brasileiras no exterior",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "contabilidade-gerencial",
      icon: <BookOpen className="h-10 w-10 text-pink-500" />,
      title: "Contabilidade Gerencial",
      shortDescription: "Informações contábeis estratégicas para suporte à gestão e tomada de decisões.",
      fullDescription:
        "Nossa contabilidade gerencial fornece informações contábeis estratégicas para suporte à gestão e tomada de decisões, com foco na otimização de resultados e crescimento sustentável.",
      features: [
        "Elaboração de relatórios gerenciais personalizados",
        "Análise de custos e rentabilidade",
        "Orçamento empresarial e acompanhamento de metas",
        "Análise de desempenho por centro de custos ou unidades de negócio",
        "Indicadores de desempenho financeiro e operacional",
        "Projeções financeiras e análise de cenários",
        "Suporte para reuniões de conselho e diretoria",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "recuperacao-impostos",
      icon: <Coins className="h-10 w-10 text-pink-500" />,
      title: "Recuperação de Impostos",
      shortDescription: "Identificação e recuperação de créditos tributários pagos indevidamente.",
      fullDescription:
        "Nossos especialistas identificam e recuperam créditos tributários pagos indevidamente pela sua empresa, gerando economia significativa e melhorando o fluxo de caixa.",
      features: [
        "Análise de oportunidades de recuperação de créditos",
        "Levantamento de créditos de PIS/COFINS, ICMS, IPI",
        "Identificação de pagamentos em duplicidade ou a maior",
        "Compensação de tributos federais",
        "Restituição de impostos pagos indevidamente",
        "Elaboração de planejamento para utilização de créditos",
        "Acompanhamento de processos administrativos e judiciais",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "compliance-fiscal",
      icon: <Scale className="h-10 w-10 text-pink-500" />,
      title: "Compliance Fiscal",
      shortDescription: "Implementação de políticas e procedimentos para garantir conformidade com a legislação.",
      fullDescription:
        "Nossos serviços de compliance fiscal implementam políticas e procedimentos para garantir a conformidade da sua empresa com a legislação tributária, prevenindo riscos e contingências.",
      features: [
        "Diagnóstico de riscos fiscais e tributários",
        "Implementação de políticas e procedimentos de compliance",
        "Revisão periódica de obrigações fiscais",
        "Treinamento de equipes para conformidade fiscal",
        "Monitoramento de alterações na legislação",
        "Prevenção de autuações fiscais",
        "Suporte em fiscalizações e auditorias",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "transformacao-digital",
      icon: <Smartphone className="h-10 w-10 text-pink-500" />,
      title: "Transformação Digital",
      shortDescription:
        "Implementação de soluções tecnológicas para modernização de processos contábeis e financeiros.",
      fullDescription:
        "Auxiliamos sua empresa na jornada de transformação digital dos processos contábeis e financeiros, implementando soluções tecnológicas que aumentam a eficiência e reduzem custos.",
      features: [
        "Diagnóstico de maturidade digital",
        "Implementação de sistemas de gestão financeira",
        "Automação de processos contábeis e fiscais",
        "Integração de plataformas e sistemas",
        "Digitalização de documentos e processos",
        "Implementação de assinaturas digitais e certificados",
        "Treinamento de equipes para novas tecnologias",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "consultoria-startups",
      icon: <TrendingUp className="h-10 w-10 text-pink-500" />,
      title: "Consultoria para Startups",
      shortDescription: "Serviços contábeis e financeiros especializados para empresas em estágio inicial.",
      fullDescription:
        "Oferecemos serviços contábeis e financeiros especializados para startups e empresas em estágio inicial, com foco em escalabilidade, captação de recursos e governança.",
      features: [
        "Estruturação contábil e fiscal para startups",
        "Preparação para rodadas de investimento",
        "Valuation e modelagem financeira",
        "Gestão de caixa e burn rate",
        "Implementação de governança corporativa",
        "Suporte para captação de recursos e incentivos",
        "Contabilidade para empresas de tecnologia e inovação",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  // FAQ items
  const faqItems = [
    {
      question: "Quais são os regimes tributários disponíveis para minha empresa?",
      answer:
        "No Brasil, existem principalmente quatro regimes tributários: Simples Nacional, Lucro Presumido, Lucro Real e MEI (Microempreendedor Individual). Cada um tem características específicas e é adequado para diferentes tipos e portes de empresas. Nossa equipe realiza uma análise detalhada do seu negócio para recomendar o regime mais vantajoso.",
    },
    {
      question: "Como funciona o acesso à plataforma digital de contabilidade?",
      answer:
        "Nossa plataforma digital está disponível 24 horas por dia, 7 dias por semana, através de login e senha exclusivos. Você pode acessar via navegador web ou através do nosso aplicativo móvel. Na plataforma, você encontra todos os seus documentos contábeis, relatórios financeiros, guias de pagamento e pode se comunicar diretamente com nossa equipe.",
    },
    {
      question: "Qual o prazo para abertura de uma empresa?",
      answer:
        "O prazo para abertura de uma empresa varia conforme a localidade e o tipo de atividade. Em média, o processo leva de 5 a 15 dias úteis para empresas com atividades simples. Para negócios que necessitam de licenças específicas (como vigilância sanitária, ambiental, etc.), o prazo pode ser maior. Nossa equipe trabalha para agilizar ao máximo esse processo.",
    },
    {
      question: "Como é feita a transição da minha contabilidade atual para a COMTATO?",
      answer:
        "A transição é realizada de forma organizada e sem interrupções para seu negócio. Iniciamos com uma reunião de alinhamento, seguida pela coleta de documentos e informações da contabilidade anterior. Realizamos uma análise da situação atual, regularizamos pendências se necessário, e implementamos nossos processos. Todo o histórico contábil é preservado e você recebe treinamento para utilizar nossa plataforma digital.",
    },
    {
      question: "Quais documentos preciso enviar mensalmente para a contabilidade?",
      answer:
        "Os principais documentos mensais incluem: extratos bancários, notas fiscais de compra e venda, comprovantes de pagamentos e recebimentos, folha de ponto dos funcionários e contratos firmados no período. Com nossa plataforma digital, você pode enviar esses documentos de forma simples, através de upload ou integração direta com sistemas de gestão.",
    },
    {
      question: "A COMTATO atende empresas de todos os portes e segmentos?",
      answer:
        "Sim, atendemos desde MEIs e pequenas empresas até grandes corporações, com soluções personalizadas para cada porte e necessidade. Temos especialistas em diversos segmentos como comércio, serviços, indústria, tecnologia, saúde, construção civil e muitos outros, oferecendo conhecimento específico para cada área de atuação.",
    },
    {
      question: "Como funciona a precificação dos serviços contábeis?",
      answer:
        "Nossa precificação é transparente e baseada no porte da empresa, volume de movimentações, regime tributário, número de funcionários e complexidade das operações. Oferecemos pacotes personalizados que podem incluir desde serviços básicos até soluções completas de consultoria. Todos os serviços e valores são detalhados em contrato, sem surpresas ou custos ocultos.",
    },
    {
      question: "É possível recuperar impostos pagos indevidamente?",
      answer:
        "Sim, é possível recuperar impostos pagos indevidamente ou em excesso. Realizamos uma análise detalhada dos últimos 5 anos fiscais da sua empresa para identificar oportunidades de recuperação de créditos tributários. Os valores recuperados podem ser restituídos ou compensados com tributos futuros, gerando economia significativa para seu negócio.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-pink-100 -z-10" />
          <div className="container text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Nossos <span className="text-pink-500">Serviços</span> Contábeis
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Soluções contábeis completas e personalizadas para cada fase do seu negócio, combinando expertise técnica
              com tecnologia de ponta.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
                Solicitar Proposta
              </Button>
              <Button size="lg" variant="outline" className="border-pink-200 hover:bg-pink-50">
                Ver Todos os Serviços
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600 font-medium mb-4">
                Visão Geral
              </div>
              <h2 className="text-3xl font-bold mb-4">Soluções Completas para Seu Negócio</h2>
              <p className="text-muted-foreground">
                Oferecemos uma ampla gama de serviços contábeis e financeiros para atender às necessidades específicas
                da sua empresa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.slice(0, 6).map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                  <Link
                          className="inline-flex items-center text-pink-500 font-medium group-hover:underline" to={""}                  >
                    Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">Ver Todos os Serviços</Button>
            </div>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600 font-medium mb-4">
                Detalhamento
              </div>
              <h2 className="text-3xl font-bold mb-4">Conheça Nossos Serviços em Detalhes</h2>
              <p className="text-muted-foreground">
                Explore cada um de nossos serviços e descubra como podemos ajudar sua empresa a crescer com
                tranquilidade.
              </p>
            </div>

            <Tabs defaultValue="contabilidade-fiscal" className="w-full">
              <TabsList className="flex flex-wrap justify-center mb-8 h-auto p-1 bg-pink-50">
                {allServices.slice(0, 6).map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="data-[state=active]:bg-pink-500 data-[state=active]:text-white px-4 py-2 m-1"
                  >
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {allServices.slice(0, 6).map((service) => (
                <TabsContent key={service.id} value={service.id} id={service.id}>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        {service.icon}
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{service.fullDescription}</p>
                      <div className="space-y-4">
                        <h4 className="font-semibold">O que incluímos neste serviço:</h4>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button className="bg-pink-500 hover:bg-pink-600 text-white mt-4">Solicitar Proposta</Button>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600 font-medium mb-4">
                Serviços Adicionais
              </div>
              <h2 className="text-3xl font-bold mb-4">Soluções Especializadas</h2>
              <p className="text-muted-foreground">
                Além dos serviços principais, oferecemos soluções especializadas para necessidades específicas do seu
                negócio e setor de atuação.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.slice(6).map((service, index) => (
                <Card key={index} className="border-pink-100 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mb-2">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-pink-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <p className="text-sm text-muted-foreground">
                          E mais {service.features.length - 3} benefícios...
                        </p>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-pink-200 hover:bg-pink-50 text-pink-500">
                      Saiba Mais
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-gradient-to-b from-white to-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600 font-medium mb-4">
                Setores de Atuação
              </div>
              <h2 className="text-3xl font-bold mb-4">Expertise em Diversos Segmentos</h2>
              <p className="text-muted-foreground">
                Contamos com especialistas em diversos setores, oferecendo soluções contábeis adaptadas às
                particularidades de cada segmento.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Comércio", icon: <Briefcase className="h-6 w-6" /> },
                { name: "Serviços", icon: <Users className="h-6 w-6" /> },
                { name: "Indústria", icon: <Building className="h-6 w-6" /> },
                { name: "Tecnologia", icon: <Smartphone className="h-6 w-6" /> },
                { name: "Saúde", icon: <Heart className="h-6 w-6" /> },
                { name: "Construção Civil", icon: <Building className="h-6 w-6" /> },
                { name: "Agronegócio", icon: <Landmark className="h-6 w-6" /> },
                { name: "Educação", icon: <BookOpen className="h-6 w-6" /> },
                { name: "Transporte", icon: <TrendingUp className="h-6 w-6" /> },
                { name: "E-commerce", icon: <ShoppingCart className="h-6 w-6" /> },
                { name: "Imobiliário", icon: <Home className="h-6 w-6" /> },
                { name: "Terceiro Setor", icon: <Heart className="h-6 w-6" /> },
              ].map((industry, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl border border-pink-100 flex items-center gap-3 hover:shadow-md transition-shadow hover:border-pink-200"
                >
                  <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
                    {industry.icon}
                  </div>
                  <span className="font-medium">{industry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Pricing />

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mx-auto mb-16">
              <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600 font-medium mb-4">
                Dúvidas Frequentes
              </div>
              <h2 className="text-3xl font-bold mb-4">Perguntas e Respostas</h2>
              <p className="text-muted-foreground">
                Encontre respostas para as dúvidas mais comuns sobre nossos serviços contábeis.
              </p>
            </div>

            <div className="mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-5 w-5 text-pink-500 flex-shrink-0" />
                        <span>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pl-7">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">Não encontrou o que procurava? Entre em contato conosco.</p>
                <Button className="bg-pink-500 hover:bg-pink-600 text-white">Fale com um Especialista</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600 font-medium mb-4">
                Depoimentos
              </div>
              <h2 className="text-3xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
              <p className="text-muted-foreground">
                A satisfação de nossos clientes é o nosso maior orgulho e motivação para continuar inovando.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  text: "A COMTATO transformou completamente a gestão financeira da minha empresa. O acesso a relatórios em tempo real e o atendimento personalizado fazem toda a diferença.",
                  name: "Maria Silva",
                  company: "Boutique Elegance",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  text: "Trabalhar com a COMTATO nos permitiu focar no crescimento do negócio enquanto eles cuidam de toda a parte contábil e fiscal. O planejamento tributário que fizeram economizou muito dinheiro.",
                  name: "João Oliveira",
                  company: "Tech Solutions",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  text: "A transição para o digital foi muito mais tranquila do que imaginei. A equipe da COMTATO nos acompanhou em cada passo e hoje temos muito mais controle sobre nossas finanças.",
                  name: "Ana Costa",
                  company: "Café Aroma",
                  image: "/placeholder.svg?height=100&width=100",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-pink-50 p-8 rounded-xl border border-pink-100">
                  <div className="flex items-center gap-1 text-pink-500 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic mb-8 text-muted-foreground">{testimonial.text}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
    </div>
  )
}

