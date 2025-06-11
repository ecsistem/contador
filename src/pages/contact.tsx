import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-pink-100 -z-10" />
          <div className="container text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Entre em <span className="text-pink-500">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Estamos prontos para atender suas necessidades contábeis e financeiras. Fale conosco hoje mesmo.
            </p>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Nossos Canais</h2>
                  <p className="text-muted-foreground mb-8">
                    Nosso atendimento é 100% digital. Utilize os canais abaixo ou preencha o formulário ao lado.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Telefones</h3>
                      <p className="text-muted-foreground mb-1">(61) 99633-3545 (WhatsApp)</p>
                      <p className="text-muted-foreground">(91) 99114-4551</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">E-mail</h3>
                      <p className="text-muted-foreground">atendimento@comtatocontabilidade.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Horário de Atendimento</h3>
                      <p className="text-muted-foreground mb-1">Segunda a sexta-feira de 08h às 18h</p>
                      <p className="text-muted-foreground">Sábados de 08h às 12h</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
                  <div className="flex gap-4">
                    <Link
                      to="https://instagram.com"
                      target="_blank"
                      className="h-12 w-12 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition-colors"
                    >
                      <Instagram className="h-6 w-6 text-pink-500" />
                    </Link>
                    <Link
                      to="https://facebook.com"
                      target="_blank"
                      className="h-12 w-12 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition-colors"
                    >
                      <Facebook className="h-6 w-6 text-pink-500" />
                    </Link>
                    <Link
                      to="https://linkedin.com"
                      target="_blank"
                      className="h-12 w-12 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="h-6 w-6 text-pink-500" />
                    </Link>
                    <Link
                      to="https://twitter.com"
                      target="_blank"
                      className="h-12 w-12 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition-colors"
                    >
                      <Twitter className="h-6 w-6 text-pink-500" />
                    </Link>
                    <Link
                      to="https://youtube.com"
                      target="_blank"
                      className="h-12 w-12 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition-colors"
                    >
                      <Youtube className="h-6 w-6 text-pink-500" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-pink-100">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome Completo</Label>
                          <Input id="name" placeholder="Seu nome" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Empresa (Opcional)</Label>
                          <Input id="company" placeholder="Sua empresa" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail</Label>
                          <Input id="email" type="email" placeholder="seu@email.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone / WhatsApp</Label>
                          <Input id="phone" placeholder="(00) 00000-0000" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Assunto</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o assunto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">Informações Gerais</SelectItem>
                            <SelectItem value="services">Serviços Contábeis</SelectItem>
                            <SelectItem value="opening">Abertura de Empresa</SelectItem>
                            <SelectItem value="tax">Planejamento Tributário</SelectItem>
                            <SelectItem value="support">Suporte Técnico</SelectItem>
                            <SelectItem value="other">Outro Assunto</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem</Label>
                        <Textarea id="message" placeholder="Como podemos ajudar?" rows={5} />
                      </div>

                      <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                        Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-16 bg-gradient-to-b from-white to-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Contato Rápido</h2>
              <p className="text-muted-foreground">Escolha a forma mais conveniente para falar conosco.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-pink-100 hover:shadow-md transition-shadow text-center">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Ligue para Nós</h3>
                  <p className="text-muted-foreground mb-4">Fale diretamente com um de nossos especialistas.</p>
                  <a href="tel:+5591991144551" className="w-full">
                    <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">(91) 99114-4551</Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-pink-100 hover:shadow-md transition-shadow text-center">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                    <MessageSquare className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">Envie uma mensagem e receba uma resposta rápida.</p>
                  <a
                    href="https://wa.me/5561996333545"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Iniciar Conversa</Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-pink-100 hover:shadow-md transition-shadow text-center">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">E-mail</h3>
                  <p className="text-muted-foreground mb-4">Envie sua dúvida ou solicitação para nosso e-mail.</p>
                  <a href="mailto:atendimento@comtatocontabilidade.com.br" className="w-full">
                    <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">Enviar E-mail</Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}