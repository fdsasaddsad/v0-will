"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Menu,
  X,
  Instagram,
  Phone,
  MapPin,
  MessageCircle,
  Star,
  Calendar,
  Award,
  Shield,
  CheckCircle,
} from "lucide-react"

export default function ManoWillSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    details: "",
  })

  const portfolioImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f1-ZyyWXty7Gv9vAmceOXYZv7lq6lth3L.jpeg", // f1 - skull with snake and floral elements
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f2-5Hk5Sihj5SWrqgD2i7unZLg5vB4enO.jpeg", // f2 - samurai mask with tentacles
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f3-IWhoyVOyy2xgwZMIX8GfTKqi6pHgkA.jpeg", // f3 - tiger head with flowing design
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f4-9HzhZn9TqFfK9halph7aoHV1kws3S1.jpeg", // f4 - sun design with flowing hair/flames
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f5-EayiKHUapjvV0Rhs2GcERkp7uZieHg.jpeg", // f5 - dragon with red accents
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f6-outaHotuOBOpLLZsgoakX5IOG5Xgrn.jpeg", // f6 - Cheshire cat with Alice in Wonderland theme
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f7-horbb0zd6HMWi1w5p53hLqoASSCtzC.jpeg", // f7 - woman portrait with snake/medusa elements
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f8-gxtMKBmEEklRmJGvOryZitQQTuivhO.jpeg", // f8 - hooded figure/nun with religious imagery
  ]

  const handleWhatsAppContact = () => {
    const message =
      formData.name && formData.details
        ? `Olá Mano Will, gostaria de agendar uma tattoo. Meu nome é ${formData.name}, tenho interesse em ${formData.details}.`
        : "Olá Mano Will, gostaria de agendar uma tattoo."

    const whatsappUrl = `https://wa.me/5515991273146?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen blackwork-pattern">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full bg-background/98 backdrop-blur-sm border-b-2 border-white/20 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold artistic-text tracking-wider text-white">MANO WILL</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("inicio")} className="hover:text-primary transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="hover:text-primary transition-colors">
              Portfólio
            </button>
            <button onClick={() => scrollToSection("sobre")} className="hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("seguranca")} className="hover:text-primary transition-colors">
              Segurança
            </button>
            <button onClick={() => scrollToSection("contato")} className="hover:text-primary transition-colors">
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left hover:text-primary transition-colors"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("seguranca")}
                className="text-left hover:text-primary transition-colors"
              >
                Segurança
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left hover:text-primary transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 min-h-screen flex items-center hero-pattern">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-bold artistic-text mb-6 text-balance text-white">MANO WILL</h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 font-medium tracking-wide">
              ESPECIALISTA EM BLACKWORK
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-white text-black hover:bg-white/90 min-w-[200px] font-bold border-2 border-white"
                onClick={handleWhatsAppContact}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar Horário
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 min-w-[200px] bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold"
                onClick={scrollToPortfolio}
              >
                Ver Portfólio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 dotwork-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold artistic-text text-center mb-16 text-white">
            PORTFÓLIO BLACKWORK
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 border-2 border-white/20 bg-black/50"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="p-0">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Trabalho de blackwork ${index + 1} - Mano Will`}
                    className="w-full h-64 md:h-72 object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 geometric-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold artistic-text text-center mb-16 text-white">
              SOBRE O ARTISTA
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-base leading-relaxed mb-6 text-balance text-white/90">
                  <strong className="text-white">Mano Will</strong> é tatuador especializado no estilo{" "}
                  <strong className="text-white">Blackwork</strong>, um universo onde o preto é protagonista e ganha
                  vida através de linhas firmes, contrastes intensos e sombreados profundos. Seu trabalho é marcado pela
                  busca constante de unir estética, identidade e significado, transformando cada tatuagem em uma peça
                  única e carregada de expressão.
                </p>
                <p className="text-base leading-relaxed mb-6 text-balance text-white/90">
                  Entre os temas que mais inspiram suas criações estão as{" "}
                  <strong className="text-white">mitologias</strong>, com seus símbolos atemporais e arquétipos
                  poderosos; os <strong className="text-white">animais selvagens</strong>, que representam instinto,
                  força e liberdade; e a <strong className="text-white">natureza</strong>, fonte de energia vital,
                  equilíbrio e conexão com o essencial. Esses elementos se tornaram pilares de sua arte, refletindo a
                  profundidade do Blackwork e sua capacidade de transmitir emoção através do contraste do preto sobre a
                  pele.
                </p>
                <p className="text-base leading-relaxed mb-6 text-balance text-white/90">
                  Ao mesmo tempo, Mano Will acredita que a arte da tatuagem é um campo em constante transformação. Por
                  isso, além de seus temas favoritos, mantém-se aberto a explorar novas ideias e composições, criando
                  projetos exclusivos que dialogam com a história, a personalidade e os desejos de cada cliente.
                </p>
                <p className="text-base leading-relaxed mb-8 text-balance text-white/90">
                  Mais do que apenas estética, cada tatuagem é pensada como uma forma de expressão pessoal. No estúdio,
                  o compromisso é oferecer um trabalho realizado com técnica, autenticidade e segurança, em um ambiente
                  profissional e acolhedor, garantindo que cada pessoa saia não apenas com uma tatuagem, mas com uma
                  marca que represente quem realmente é.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-white" />
                    <span className="text-sm text-white/90">Especialista em blackwork e dotwork</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-white" />
                    <span className="text-sm text-white/90">Estúdio privado exclusivo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-white" />
                    <span className="text-sm text-white/90">Atendimento personalizado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-white" />
                    <span className="text-sm text-white/90">
                      Conheça mais do portfólio no Instagram:{" "}
                      <a
                        href="https://www.instagram.com/manowilltattoo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80 transition-colors font-bold"
                      >
                        @manowilltattoo
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-lg transform rotate-3 border-2 border-white/20"></div>
                <img
                  src="/mano-will-portrait.png"
                  alt="Mano Will - Tatuador especialista em blackwork"
                  className="relative w-full rounded-lg shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 border-2 border-white/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="seguranca" className="py-20 mandala-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold artistic-text text-center mb-16 text-white">
              SEGURANÇA & HIGIENE
            </h2>
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-white mx-auto mb-6" />
              <p className="text-lg text-balance leading-relaxed text-white/90">
                Sua segurança é nossa prioridade. Seguimos rigorosamente todos os protocolos de higiene e esterilização
                para garantir um ambiente 100% seguro e profissional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-white/20 bg-black/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
                    <CheckCircle className="w-6 h-6 text-white" />
                    Esterilização Completa
                  </h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                      <span>Agulhas descartáveis de uso único</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                      <span>Tubos e biqueiras sempre novos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                      <span>Tintas de qualidade hospitalar</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-white/20 bg-black/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
                    <CheckCircle className="w-6 h-6 text-white" />
                    Ambiente Controlado
                  </h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                      <span>Limpeza e desinfecção constante</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                      <span>Uso de luvas e materiais descartáveis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                      <span>Protocolos de segurança rigorosos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-black/70 border-2 border-white/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Compromisso com a Excelência</h3>
                  <p className="text-base text-balance leading-relaxed text-white/90">
                    Cada sessão é realizada com o máximo cuidado e atenção aos detalhes. Você pode confiar que está em
                    mãos profissionais, em um ambiente que prioriza sua saúde e bem-estar acima de tudo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 blackwork-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold artistic-text text-center mb-16 text-white">CONTATO</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2 border-white/20 bg-black/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-white">Agende sua tatuagem blackwork</h3>
                <div className="space-y-4">
                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black/70 border-white/30 text-white placeholder:text-white/60"
                  />
                  <Textarea
                    placeholder="Descreva sua ideia de tatuagem blackwork..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    rows={4}
                    className="bg-black/70 border-white/30 text-white placeholder:text-white/60"
                  />
                  <Button
                    className="w-full bg-white text-black hover:bg-white/90 font-bold"
                    size="lg"
                    onClick={handleWhatsAppContact}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enviar mensagem via WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-2 border-white/20 bg-black/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-5 h-5 text-white" />
                    <h3 className="text-lg font-bold text-white">Telefone</h3>
                  </div>
                  <a href="tel:+5515991273146" className="text-lg hover:text-white/80 transition-colors text-white/90">
                    (15) 99127-3146
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-white/20 bg-black/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-white" />
                    <h3 className="text-lg font-bold text-white">Endereço</h3>
                  </div>
                  <address className="not-italic text-balance text-white/90">
                    R. Penha Donolla de Barros, 11
                    <br />
                    Jardim Eucaliptos
                    <br />
                    Sorocaba - SP, 18079-661
                  </address>
                </CardContent>
              </Card>

              <Card className="border-2 border-white/20 bg-black/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Instagram className="w-5 h-5 text-white" />
                    <h3 className="text-lg font-bold text-white">Instagram</h3>
                  </div>
                  <a
                    href="https://www.instagram.com/mano.will/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-white/80 transition-colors text-white/90"
                  >
                    @mano.will
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="border-2 border-white/20 bg-black/50">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.123456789!2d-47.4583!3d-23.5019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf60f8f8f8f8f8%3A0x8f8f8f8f8f8f8f8f!2sR.%20Penha%20Donolla%20de%20Barros%2C%2011%20-%20Jardim%20Eucaliptos%2C%20Sorocaba%20-%20SP%2C%2018079-661%2C%20Brazil!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do estúdio Mano Will - R. Penha Donolla de Barros, 11, Jardim Eucaliptos, Sorocaba"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-2 border-white/20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.instagram.com/mano.will/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors text-white"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://wa.me/5515991273146"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors text-white"
            >
              <MessageCircle size={24} />
            </a>
          </div>
          <p className="text-white/80">© 2024 Mano Will. Todos os direitos reservados.</p>
          <p className="text-white/60 text-sm mt-2">
            Feito por{" "}
            <a
              href="https://mateuskolling.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors underline"
            >
              mateuskolling.com
            </a>
          </p>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <Button
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg z-40 bg-white text-black hover:bg-white/90 border-2 border-white"
        onClick={handleWhatsAppContact}
      >
        <MessageCircle size={24} />
      </Button>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh] w-full">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Trabalho de blackwork em destaque"
              className="w-full h-full max-h-[85vh] object-contain rounded-lg border-2 border-white/30"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/90 text-black border-2 border-white"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
