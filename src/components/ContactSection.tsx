import { Instagram, Linkedin, Globe, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://wa.me/5562996920050",
      icon: MessageSquare,
      color: "bg-green-600",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/gustavo_mariano",
      icon: Instagram,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gustavoamariano",
      icon: Linkedin,
      color: "bg-blue-600",
    },
    {
      name: "LDR Seguros",
      url: "https://ldrseguros.com.br",
      icon: Globe,
      color: "bg-navy",
    },
    {
      name: "Aureum Soluções",
      url: "https://aureumseguros.com.br",
      icon: Globe,
      color: "bg-amber-700",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-softgray">
      <div className="max-w-6xl mx-auto section-fade">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-navy mb-3">
            Entre em Contato
          </h2>
          <p className="text-silver max-w-2xl mx-auto">
            Estou à disposição para discutir soluções personalizadas para sua
            empresa, oportunidades de parceria ou mentorias no setor de seguros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/lovable-uploads/27bea5b6-7dc7-4458-a5bd-3262d438a7cc.png"
              alt="Gustavo Mariano sorrindo"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          <div>
            <div className="bg-white rounded-lg p-6 shadow-md mb-6">
              <h3 className="text-xl font-semibold text-navy mb-4">
                Solicite uma consultoria personalizada
              </h3>
              <p className="text-charcoal mb-6">
                Agende uma conversa para discutirmos as melhores estratégias de
                proteção para seu negócio ou carreira.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} text-white py-3 px-4 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity`}
                >
                  <link.icon className="mr-2" size={18} />
                  <span>{link.name}</span>
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
