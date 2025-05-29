import { Award, Check } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "Mentor e Especialista em Expansão de Negócios",
    "Líder em soluções corporativas para indústrias e usinas",
    "Formador de equipes de alta performance em vendas",
    "CEO da LDR Seguros",
    "Sócio da Aureum Soluções em Saúde",
    "21 anos de experiência no setor de seguros",
    "Referência em soluções corporativas em seguros de frotas, transporte, cargas, empresarial e responsabilidade civil",
    "Executivo com visão estratégica em crescimento empresarial",
    "Entusiasta de tecnologia e inteligência artificial aplicada à gestão e excelência no atendimento ao cliente",
    "Inspirado por valores cristãos e ética profissional",
    "Já atuou como palestrante em eventos do setor de seguros e negócios",
  ];

  return (
    <section id="about" className="py-20 px-4 bg-softgray">
      <div className="max-w-6xl mx-auto section-fade">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-navy mb-6">
            Destaques Profissionais
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          <div className="flex-shrink-0 order-1 lg:order-1">
            <div className="relative mx-auto w-fit">
              <div className="absolute -top-4 -left-4 w-full h-full bg-navy rounded-lg"></div>
              <img
                src="/lovable-uploads/5ed7bdd1-9bef-483f-b1b1-2e63ea628338.png"
                alt="Gustavo Mariano"
                className="rounded-lg max-w-96 h-full object-cover object-[40%_30%] relative z-10"
              />
            </div>
          </div>

          <div className="flex-1 max-w-2xl order-2 lg:order-2">
            <div className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-navy mt-1 flex-shrink-0" size={20} />
                  <p className="ml-3 text-charcoal text-lg">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <Award className="text-navy" size={24} />
                <h3 className="ml-2 text-xl font-semibold text-navy">
                  Experiência e Visão
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                Com mais de duas décadas no mercado de seguros, Gustavo Mariano
                desenvolve estratégias personalizadas que protegem o patrimônio
                e o futuro dos seus clientes, sempre pautado pela ética e
                excelência profissional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
