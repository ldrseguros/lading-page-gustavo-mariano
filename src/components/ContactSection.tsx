import { Instagram, Linkedin, Globe, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/gustavo_mariano",
      icon: Instagram,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      cta: "Conteúdo exclusivo",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gustavoamariano",
      icon: Linkedin,
      color: "bg-blue-600",
      cta: "Networking profissional",
    },
    {
      name: "LDR Seguros",
      url: "https://ldrseguros.com.br",
      icon: Globe,
      color: "bg-navy",
      cta: "Site institucional",
    },
    {
      name: "Aureum Soluções",
      url: "https://aureumseguros.com.br",
      icon: Globe,
      color: "bg-amber-700",
      cta: "Soluções corporativas",
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 px-4 bg-softgray">
      <div className="max-w-6xl mx-auto section-fade">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-navy mb-3">
            Entre em Contato
          </h2>
          <p className="text-silver max-w-2xl mx-auto text-sm md:text-base">
            Estou à disposição para discutir soluções personalizadas para sua
            empresa, oportunidades de parceria ou mentorias no setor de seguros.
          </p>
        </div>

        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-navy to-blue-800 rounded-xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para proteger seu patrimônio?
            </h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Agende uma consultoria gratuita e descubra como otimizar sua
              estratégia de proteção
            </p>
            <a
              href="https://wa.me/5562996920050?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria%20gratuita%20sobre%20estratégias%20de%20proteção"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-navy hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg"
            >
              📅 Agendar consultoria gratuita
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/lovable-uploads/27bea5b6-7dc7-4458-a5bd-3262d438a7cc.png"
              alt="Gustavo Mariano sorrindo"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          <div className="order-1 md:order-2">
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-md mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl font-semibold text-navy mb-3 md:mb-4">
                Vamos conversar sobre seu futuro
              </h3>
              <p className="text-charcoal mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                Escolha o canal de sua preferência para iniciarmos uma conversa
                sobre as melhores estratégias de proteção para seu negócio ou
                carreira.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} text-white py-3 px-3 md:px-4 rounded-lg flex flex-col items-center justify-center hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base group`}
                >
                  <link.icon
                    className="mb-2 group-hover:scale-110 transition-transform"
                    size={20}
                  />
                  <span className="font-semibold">{link.name}</span>
                  <span className="text-xs opacity-80 mt-1">{link.cta}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
