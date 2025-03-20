"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Building, FileText, CheckCircle, AlertCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function AberturaDaEmpresaPage() {

  // Form state
  const [formData, setFormData] = useState({
    businessType: "mei", // Default to MEI
    fullName: "",
    birthDate: "",
    cpf: "",
    rg: "",
    voterID: "",
    govPassword: "",
     // Endereço residencial detalhado
     residentialCep: "",
     residentialStreet: "",
     residentialNumber: "",
     residentialComplement: "",
     residentialNeighborhood: "",
     residentialCity: "",
     residentialState: "",
     // Endereço da empresa detalhado
     businessCep: "",
     businessStreet: "",
     businessNumber: "",
     businessComplement: "",
     businessNeighborhood: "",
     businessCity: "",
     businessState: "",
     businessActivities: "",
     businessName: "",
     email: "",
    phone: "",
  })

  const [sameAddress, setSameAddress] = useState(false)

  // Error state
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user selects
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  // Format CPF as user types
  const formatCPF = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")

    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, "$1.$2")
      value = value.replace(/(\d{3})(\d)/, "$1.$2")
      value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

      setFormData((prev) => ({ ...prev, cpf: value }))
    }
  }

  // Format phone as user types
  const formatPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")

    if (value.length <= 11) {
      if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`
      }
      if (value.length > 10) {
        value = `${value.slice(0, 10)}-${value.slice(10)}`
      }

      setFormData((prev) => ({ ...prev, phone: value }))
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Nome completo é obrigatório"
    }

    if (!formData.birthDate) {
      newErrors.birthDate = "Data de nascimento é obrigatória"
    }

    if (!formData.cpf.trim() || formData.cpf.replace(/\D/g, "").length !== 11) {
      newErrors.cpf = "CPF válido é obrigatório"
    }

    if (!formData.rg.trim()) {
      newErrors.rg = "RG é obrigatório"
    }

    if (!formData.voterID.trim()) {
      newErrors.voterID = "Título de eleitor é obrigatório"
    }

    if (!formData.govPassword.trim()) {
      newErrors.govPassword = "Senha do GOV.BR é obrigatória"
    }

    // Validação do endereço residencial
    if (!formData.residentialCep.trim()) {
      newErrors.residentialCep = "CEP é obrigatório"
    }

    if (!formData.residentialStreet.trim()) {
      newErrors.residentialStreet = "Rua é obrigatória"
    }

    if (!formData.residentialNumber.trim()) {
      newErrors.residentialNumber = "Número é obrigatório"
    }

    if (!formData.residentialNeighborhood.trim()) {
      newErrors.residentialNeighborhood = "Bairro é obrigatório"
    }

    if (!formData.residentialCity.trim()) {
      newErrors.residentialCity = "Cidade é obrigatória"
    }

    if (!formData.residentialState.trim()) {
      newErrors.residentialState = "Estado é obrigatório"
    }

    if (!formData.businessActivities.trim()) {
      newErrors.businessActivities = "Atividades comerciais são obrigatórias"
    }

    // Validação do endereço da empresa
    if (!formData.businessCep.trim()) {
      newErrors.businessCep = "CEP é obrigatório"
    }

    if (!formData.businessStreet.trim()) {
      newErrors.businessStreet = "Rua é obrigatória"
    }

    if (!formData.businessNumber.trim()) {
      newErrors.businessNumber = "Número é obrigatório"
    }

    if (!formData.businessNeighborhood.trim()) {
      newErrors.businessNeighborhood = "Bairro é obrigatório"
    }

    if (!formData.businessCity.trim()) {
      newErrors.businessCity = "Cidade é obrigatória"
    }

    if (!formData.businessState.trim()) {
      newErrors.businessState = "Estado é obrigatório"
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Nome fantasia é obrigatório"
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail válido é obrigatório"
    }

    if (!formData.phone.trim() || formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Telefone válido é obrigatório"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Format data for WhatsApp
  const formatWhatsAppMessage = () => {
    return `*Formulário Abertura De Empresa*
*Tipo de Empresa:* ${getBusinessTypeName(formData.businessType)}
*Nome completo:* ${formData.fullName}
*Data de nascimento:* ${formData.birthDate}
*CPF:* ${formData.cpf}
*RG:* ${formData.rg}
*Título de eleitor:* ${formData.voterID}
*Senha do aplicativo GOV.BR:* ${formData.govPassword}

*Endereço Residencial:*
CEP: ${formData.residentialCep}
Rua: ${formData.residentialStreet}
Número: ${formData.residentialNumber}
Complemento: ${formData.residentialComplement}
Bairro: ${formData.residentialNeighborhood}
Cidade: ${formData.residentialCity}
Estado: ${formData.residentialState}

*Atividades Comerciais:* ${formData.businessActivities}

*Endereço da Empresa:*
CEP: ${formData.businessCep}
Rua: ${formData.businessStreet}
Número: ${formData.businessNumber}
Complemento: ${formData.businessComplement}
Bairro: ${formData.businessNeighborhood}
Cidade: ${formData.businessCity}
Estado: ${formData.businessState}

*Nome de Fantasia:* ${formData.businessName}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}`
  }

  // Get business type full name
  const getBusinessTypeName = (type: string) => {
    const types: Record<string, string> = {
      mei: "Microempreendedor Individual (MEI)",
      me: "Microempresa (ME)",
      epp: "Empresa de Pequeno Porte (EPP)",
      ei: "Empresário Individual (EI)",
      eireli: "Empresa Individual de Responsabilidade Limitada (EIRELI)",
      ltda: "Sociedade Limitada (LTDA)",
      sa: "Sociedade Anônima (S.A.)",
    }
    return types[type] || type
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Format message for WhatsApp
      const message = encodeURIComponent(formatWhatsAppMessage())

      // WhatsApp phone number - replace with your actual business number
      const phoneNumber = "5511999999999" // Example: 5511999999999

      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`

      // Open WhatsApp in a new tab
      window.open(whatsappURL, "_blank")
    } else {
      // Scroll to the first error
      const firstErrorField = Object.keys(errors)[0]
      const element = document.querySelector(`[name="${firstErrorField}"]`)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }
  }

  // Business type descriptions
  const businessTypes = [
    {
      id: "mei",
      title: "Microempreendedor Individual (MEI)",
      description: "Ideal para profissionais autônomos com faturamento anual de até R$ 81.000,00.",
      benefits: [
        "Baixo custo mensal (apenas DAS)",
        "Processo simplificado de abertura",
        "Isenção de tributos federais",
        "Cobertura previdenciária",
        "Emissão de notas fiscais",
      ],
      limitations: [
        "Limite de faturamento de R$ 81.000,00 por ano",
        "Pode contratar apenas 1 funcionário",
        "Atividades limitadas (não pode ter sócio)",
        "Não pode ter filiais",
      ],
    },
    {
      id: "me",
      title: "Microempresa (ME)",
      description: "Para negócios com faturamento anual de até R$ 360.000,00.",
      benefits: [
        "Pode optar pelo Simples Nacional",
        "Pode ter sócios",
        "Sem limite para contratação de funcionários",
        "Maior variedade de atividades permitidas",
      ],
      limitations: [
        "Limite de faturamento de R$ 360.000,00 por ano",
        "Carga tributária maior que o MEI",
        "Processo de abertura mais complexo",
      ],
    },
    {
      id: "epp",
      title: "Empresa de Pequeno Porte (EPP)",
      description: "Para empresas com faturamento anual entre R$ 360.000,00 e R$ 4.800.000,00.",
      benefits: [
        "Pode optar pelo Simples Nacional",
        "Pode ter sócios",
        "Sem limite para contratação de funcionários",
        "Possibilidade de exportação simplificada",
      ],
      limitations: [
        "Limite de faturamento de R$ 4.800.000,00 por ano",
        "Carga tributária progressiva conforme faturamento",
      ],
    },
    {
      id: "ei",
      title: "Empresário Individual (EI)",
      description: "Empresa individual com responsabilidade ilimitada do proprietário.",
      benefits: [
        "Processo de abertura relativamente simples",
        "Controle total sobre o negócio",
        "Pode optar pelo Simples Nacional",
      ],
      limitations: [
        "Responsabilidade ilimitada (bens pessoais respondem por dívidas)",
        "Não pode ter sócios",
        "Limitações para captação de investimentos",
      ],
    },
    {
      id: "eireli",
      title: "Empresa Individual de Responsabilidade Limitada (EIRELI)",
      description: "Empresa individual com responsabilidade limitada ao capital social.",
      benefits: [
        "Responsabilidade limitada ao capital social",
        "Controle total sobre o negócio",
        "Pode optar pelo Simples Nacional",
      ],
      limitations: [
        "Capital social mínimo de 100 salários mínimos",
        "Não pode ter sócios",
        "Processo de abertura mais complexo",
      ],
    },
    {
      id: "ltda",
      title: "Sociedade Limitada (LTDA)",
      description: "Empresa com dois ou mais sócios e responsabilidade limitada ao capital social.",
      benefits: [
        "Responsabilidade limitada ao capital social",
        "Pode ter múltiplos sócios",
        "Flexibilidade na distribuição de lucros",
        "Pode optar pelo Simples Nacional (se elegível)",
      ],
      limitations: [
        "Processo de abertura mais complexo",
        "Necessidade de contrato social",
        "Maior custo de manutenção",
      ],
    },
    {
      id: "sa",
      title: "Sociedade Anônima (S.A.)",
      description: "Empresa de capital aberto ou fechado, com ações negociáveis.",
      benefits: [
        "Facilidade para captação de investimentos",
        "Possibilidade de abrir capital na bolsa",
        "Responsabilidade limitada ao valor das ações",
        "Continuidade do negócio independente dos acionistas",
      ],
      limitations: [
        "Processo de abertura complexo e custoso",
        "Necessidade de publicação de balanços",
        "Não pode optar pelo Simples Nacional",
        "Maior regulamentação e fiscalização",
      ],
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
              Abertura de <span className="text-pink-500">Empresas</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Inicie seu negócio de forma rápida e segura. Cuidamos de toda a burocracia para você focar no que
              realmente importa: seu negócio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-pink-500 hover:bg-pink-600 text-white"
                onClick={() => {
                  const element = document.getElementById("form-section")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Iniciar Abertura
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pink-200 hover:bg-pink-50"
                onClick={() => {
                  const element = document.getElementById("business-types")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Tipos de Empresa
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600 font-medium mb-4">
                Processo Simplificado
              </div>
              <h2 className="text-3xl font-bold mb-4">Como Funciona a Abertura da Sua Empresa</h2>
              <p className="text-muted-foreground">
                Nosso processo é rápido, seguro e totalmente digital. Acompanhe cada etapa da abertura da sua empresa.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Preenchimento do Formulário",
                  description: "Preencha o formulário com seus dados pessoais e informações do negócio.",
                  icon: <FileText className="h-10 w-10 text-pink-500" />,
                },
                {
                  step: "2",
                  title: "Análise e Consultoria",
                  description: "Nossa equipe analisa as informações e oferece consultoria personalizada.",
                  icon: <Building className="h-10 w-10 text-pink-500" />,
                },
                {
                  step: "3",
                  title: "Registro nos Órgãos",
                  description: "Realizamos todos os registros necessários nos órgãos competentes.",
                  icon: <Calculator className="h-10 w-10 text-pink-500" />,
                },
                {
                  step: "4",
                  title: "Empresa Pronta",
                  description: "Você recebe todos os documentos e sua empresa está pronta para operar.",
                  icon: <CheckCircle className="h-10 w-10 text-pink-500" />,
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  {index < 3 && (
                    <div className="absolute top-10 left-full w-full h-0.5 bg-pink-200 hidden md:block -z-10 transform -translate-x-1/2" />
                  )}
                  <div className="bg-white p-6 rounded-xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow text-center h-full flex flex-col items-center">
                    <div className="h-20 w-20 rounded-full bg-pink-50 flex items-center justify-center mb-4 relative">
                      {step.icon}
                      <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Types Section */}
        <section id="business-types" className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600 font-medium mb-4">
                Tipos de Empresa
              </div>
              <h2 className="text-3xl font-bold mb-4">Escolha o Modelo Ideal para Seu Negócio</h2>
              <p className="text-muted-foreground">
                Conheça os diferentes tipos de empresa e escolha o que melhor se adapta às suas necessidades e
                objetivos.
              </p>
            </div>

            <Tabs defaultValue="mei" className="w-full">
              <TabsList className="flex flex-wrap justify-center mb-8 h-auto p-1 bg-pink-50">
                {businessTypes.map((type) => (
                  <TabsTrigger
                    key={type.id}
                    value={type.id}
                    className="data-[state=active]:bg-pink-500 data-[state=active]:text-white px-4 py-2 m-1"
                  >
                    {type.title.split(" ")[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {businessTypes.map((type) => (
                <TabsContent key={type.id} value={type.id}>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <img
                        src={`/placeholder.svg?height=400&width=600&text=${type.title}`}
                        alt={type.title}
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold">{type.title}</h3>
                      <p className="text-muted-foreground">{type.description}</p>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Vantagens:</h4>
                        <div className="space-y-2">
                          {type.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Limitações:</h4>
                        <div className="space-y-2">
                          {type.limitations.map((limitation, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                              <span>{limitation}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        className="bg-pink-500 hover:bg-pink-600 text-white mt-4"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, businessType: type.id }))
                          const element = document.getElementById("form-section")
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" })
                          }
                        }}
                      >
                        Abrir {type.title.split(" ")[0]}
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Form Section */}
        <section id="form-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600 font-medium mb-4">
                Formulário de Abertura
              </div>
              <h2 className="text-3xl font-bold mb-4">Preencha os Dados para Abertura da Sua Empresa</h2>
              <p className="text-muted-foreground">
                Forneça as informações necessárias para iniciarmos o processo de abertura da sua empresa. Todos os dados
                são tratados com segurança e confidencialidade.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Tipo de Empresa</CardTitle>
                    <CardDescription>Selecione o tipo de empresa que deseja abrir</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={formData.businessType}
                      onValueChange={(value) => handleSelectChange("businessType", value)}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {businessTypes.map((type) => (
                        <div key={type.id} className="flex items-center space-x-2">
                          <RadioGroupItem value={type.id} id={type.id} />
                          <Label htmlFor={type.id} className="cursor-pointer">
                            {type.title}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Dados Pessoais</CardTitle>
                    <CardDescription>Informações do responsável legal pela empresa</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">
                          Nome completo <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          placeholder="Digite seu nome completo"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={errors.fullName ? "border-red-500" : ""}
                        />
                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="birthDate">
                          Data de nascimento <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="birthDate"
                          name="birthDate"
                          type="date"
                          value={formData.birthDate}
                          onChange={handleChange}
                          className={errors.birthDate ? "border-red-500" : ""}
                        />
                        {errors.birthDate && <p className="text-red-500 text-sm">{errors.birthDate}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cpf">
                          CPF <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="cpf"
                          name="cpf"
                          placeholder="000.000.000-00"
                          value={formData.cpf}
                          onChange={formatCPF}
                          className={errors.cpf ? "border-red-500" : ""}
                        />
                        {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rg">
                          RG <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="rg"
                          name="rg"
                          placeholder="Digite seu RG"
                          value={formData.rg}
                          onChange={handleChange}
                          className={errors.rg ? "border-red-500" : ""}
                        />
                        {errors.rg && <p className="text-red-500 text-sm">{errors.rg}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="voterID">
                          Título de eleitor <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="voterID"
                          name="voterID"
                          placeholder="Digite seu título de eleitor"
                          value={formData.voterID}
                          onChange={handleChange}
                          className={errors.voterID ? "border-red-500" : ""}
                        />
                        {errors.voterID && <p className="text-red-500 text-sm">{errors.voterID}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="govPassword">
                        Senha do aplicativo GOV.BR <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="govPassword"
                        name="govPassword"
                        type="password"
                        placeholder="Digite sua senha do GOV.BR"
                        value={formData.govPassword}
                        onChange={handleChange}
                        className={errors.govPassword ? "border-red-500" : ""}
                      />
                      {errors.govPassword && <p className="text-red-500 text-sm">{errors.govPassword}</p>}
                      <p className="text-sm text-muted-foreground">
                        Sua senha será utilizada apenas para o processo de abertura e não será armazenada.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="residentialAddress">
                        Endereço de Residência <span className="text-red-500">*</span>
                      </Label>

                      <div className="grid grid-cols-2 gap-4 mb-2">
                        <div className="space-y-2">
                          <Label htmlFor="residentialCep">
                            CEP <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="residentialCep"
                            name="residentialCep"
                            placeholder="00000-000"
                            value={formData.residentialCep}
                            onChange={handleChange}
                            className={errors.residentialCep ? "border-red-500" : ""}
                          />
                          {errors.residentialCep && <p className="text-red-500 text-sm">{errors.residentialCep}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-2">
                        <div className="col-span-2 space-y-2">
                          <Label htmlFor="residentialStreet">
                            Rua/Avenida <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="residentialStreet"
                            name="residentialStreet"
                            placeholder="Nome da rua"
                            value={formData.residentialStreet}
                            onChange={handleChange}
                            className={errors.residentialStreet ? "border-red-500" : ""}
                          />
                          {errors.residentialStreet && (
                            <p className="text-red-500 text-sm">{errors.residentialStreet}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="residentialNumber">
                            Número <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="residentialNumber"
                            name="residentialNumber"
                            placeholder="Nº"
                            value={formData.residentialNumber}
                            onChange={handleChange}
                            className={errors.residentialNumber ? "border-red-500" : ""}
                          />
                          {errors.residentialNumber && (
                            <p className="text-red-500 text-sm">{errors.residentialNumber}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 mb-2">
                        <div className="space-y-2">
                          <Label htmlFor="residentialComplement">Complemento</Label>
                          <Input
                            id="residentialComplement"
                            name="residentialComplement"
                            placeholder="Apto, Bloco, etc."
                            value={formData.residentialComplement}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="residentialNeighborhood">
                            Bairro <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="residentialNeighborhood"
                            name="residentialNeighborhood"
                            placeholder="Bairro"
                            value={formData.residentialNeighborhood}
                            onChange={handleChange}
                            className={errors.residentialNeighborhood ? "border-red-500" : ""}
                          />
                          {errors.residentialNeighborhood && (
                            <p className="text-red-500 text-sm">{errors.residentialNeighborhood}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="residentialCity">
                            Cidade <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="residentialCity"
                            name="residentialCity"
                            placeholder="Cidade"
                            value={formData.residentialCity}
                            onChange={handleChange}
                            className={errors.residentialCity ? "border-red-500" : ""}
                          />
                          {errors.residentialCity && <p className="text-red-500 text-sm">{errors.residentialCity}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="residentialState">
                            Estado <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="residentialState"
                            name="residentialState"
                            placeholder="UF"
                            value={formData.residentialState}
                            onChange={handleChange}
                            className={errors.residentialState ? "border-red-500" : ""}
                          />
                          {errors.residentialState && <p className="text-red-500 text-sm">{errors.residentialState}</p>}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessAddress">
                        Endereço da Empresa <span className="text-red-500">*</span>
                      </Label>

                      <div className="grid grid-cols-2 gap-4 mb-2">
                        <div className="space-y-2">
                          <Label htmlFor="businessCep">
                            CEP <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="businessCep"
                            name="businessCep"
                            placeholder="00000-000"
                            value={formData.businessCep}
                            onChange={handleChange}
                            className={errors.businessCep ? "border-red-500" : ""}
                            disabled={sameAddress}
                          />
                          {errors.businessCep && <p className="text-red-500 text-sm">{errors.businessCep}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-2">
                        <div className="col-span-2 space-y-2">
                          <Label htmlFor="businessStreet">
                            Rua/Avenida <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="businessStreet"
                            name="businessStreet"
                            placeholder="Nome da rua"
                            value={formData.businessStreet}
                            onChange={handleChange}
                            className={errors.businessStreet ? "border-red-500" : ""}
                            disabled={sameAddress}
                          />
                          {errors.businessStreet && <p className="text-red-500 text-sm">{errors.businessStreet}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="businessNumber">
                            Número <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="businessNumber"
                            name="businessNumber"
                            placeholder="Nº"
                            value={formData.businessNumber}
                            onChange={handleChange}
                            className={errors.businessNumber ? "border-red-500" : ""}
                            disabled={sameAddress}
                          />
                          {errors.businessNumber && <p className="text-red-500 text-sm">{errors.businessNumber}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 mb-2">
                        <div className="space-y-2">
                          <Label htmlFor="businessComplement">Complemento</Label>
                          <Input
                            id="businessComplement"
                            name="businessComplement"
                            placeholder="Sala, Andar, etc."
                            value={formData.businessComplement}
                            onChange={handleChange}
                            disabled={sameAddress}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="businessNeighborhood">
                            Bairro <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="businessNeighborhood"
                            name="businessNeighborhood"
                            placeholder="Bairro"
                            value={formData.businessNeighborhood}
                            onChange={handleChange}
                            className={errors.businessNeighborhood ? "border-red-500" : ""}
                            disabled={sameAddress}
                          />
                          {errors.businessNeighborhood && (
                            <p className="text-red-500 text-sm">{errors.businessNeighborhood}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="businessCity">
                            Cidade <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="businessCity"
                            name="businessCity"
                            placeholder="Cidade"
                            value={formData.businessCity}
                            onChange={handleChange}
                            className={errors.businessCity ? "border-red-500" : ""}
                            disabled={sameAddress}
                          />
                          {errors.businessCity && <p className="text-red-500 text-sm">{errors.businessCity}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="businessState">
                            Estado <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="businessState"
                            name="businessState"
                            placeholder="UF"
                            value={formData.businessState}
                            onChange={handleChange}
                            className={errors.businessState ? "border-red-500" : ""}
                            disabled={sameAddress}
                          />
                          {errors.businessState && <p className="text-red-500 text-sm">{errors.businessState}</p>}
                        </div>
                      </div>

                      <div className="flex items-center mt-2">
                        <input
                          type="checkbox"
                          id="sameAddress"
                          className="mr-2"
                          checked={sameAddress}
                          onChange={(e) => {
                            setSameAddress(e.target.checked)
                            if (e.target.checked) {
                              setFormData((prev) => ({
                                ...prev,
                                businessCep: prev.residentialCep,
                                businessStreet: prev.residentialStreet,
                                businessNumber: prev.residentialNumber,
                                businessComplement: prev.residentialComplement,
                                businessNeighborhood: prev.residentialNeighborhood,
                                businessCity: prev.residentialCity,
                                businessState: prev.residentialState,
                              }))
                            }
                          }}
                        />
                        <label htmlFor="sameAddress" className="text-sm cursor-pointer">
                          Mesmo endereço da residência
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Dados de Contato</CardTitle>
                    <CardDescription>Informações para contato</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          E-mail <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Telefone <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="(00) 00000-0000"
                          value={formData.phone}
                          onChange={formatPhone}
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Importante</p>
                      <p className="text-sm text-muted-foreground">
                        Ao enviar este formulário, você concorda com nossa política de privacidade e autoriza o uso dos
                        seus dados para o processo de abertura da empresa. Após o envio, nossa equipe entrará em contato
                        via WhatsApp para dar continuidade ao processo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button type="submit" size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
                    Enviar Formulário via WhatsApp
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600 font-medium mb-4">
                Dúvidas Frequentes
              </div>
              <h2 className="text-3xl font-bold mb-4">Perguntas e Respostas</h2>
              <p className="text-muted-foreground">
                Encontre respostas para as dúvidas mais comuns sobre abertura de empresas.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "Quanto tempo leva para abrir uma empresa?",
                    answer:
                      "O prazo para abertura varia conforme o tipo de empresa e a localidade. Em média, uma MEI pode ser aberta em 1-2 dias úteis, enquanto outros tipos de empresa podem levar de 5 a 15 dias úteis. Empresas que necessitam de licenças específicas podem ter prazos maiores.",
                  },
                  {
                    question: "Quais documentos são necessários para abrir uma empresa?",
                    answer:
                      "Os documentos básicos incluem: RG e CPF dos sócios, comprovante de residência, título de eleitor, e em alguns casos, certificado de reservista (para homens). Para empresas com mais de um sócio, também é necessário o contrato social. Dependendo do tipo de atividade, podem ser exigidas licenças específicas.",
                  },
                  {
                    question: "Qual o custo para abrir uma empresa?",
                    answer:
                      "Os custos variam conforme o tipo de empresa e a localidade. Para MEI, o processo é gratuito. Para outros tipos, há taxas de registro na Junta Comercial, Receita Federal, e órgãos municipais. Além disso, há custos com contabilidade e eventuais licenças específicas. Consulte-nos para um orçamento personalizado.",
                  },
                  {
                    question: "Posso abrir uma empresa mesmo tendo nome negativado?",
                    answer:
                      "Sim, é possível abrir uma empresa mesmo com o nome negativado. A restrição de crédito pessoal não impede a abertura de uma pessoa jurídica. No entanto, isso pode afetar a obtenção de crédito para a empresa no futuro.",
                  },
                  {
                    question: "Preciso ter um endereço comercial para abrir uma empresa?",
                    answer:
                      "Depende do tipo de empresa e da atividade. MEIs e algumas empresas de serviços podem utilizar o endereço residencial. Para atividades comerciais ou industriais, geralmente é necessário um endereço comercial com alvará adequado. Consulte-nos para verificar as exigências específicas para seu caso.",
                  },
                  {
                    question: "Como funciona a tributação para cada tipo de empresa?",
                    answer:
                      "A tributação varia conforme o tipo de empresa e o regime tributário escolhido. MEIs pagam um valor fixo mensal (DAS). Empresas no Simples Nacional pagam um percentual sobre o faturamento, que varia conforme a atividade. Já empresas no Lucro Presumido ou Lucro Real têm tributação mais complexa. Nossa equipe pode ajudar a escolher o regime mais vantajoso para seu caso.",
                  },
                ].map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-pink-500 flex-shrink-0" />
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
      </main>
    </div>
  )
}

