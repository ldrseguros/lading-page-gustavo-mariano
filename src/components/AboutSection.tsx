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
    <section id="about" className="py-12 md:py-20 px-4 bg-softgray">
      <div className="max-w-6xl mx-auto section-fade">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-navy mb-4 md:mb-6">
            Destaques Profissionais
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
          <div className="flex-shrink-0 order-1 lg:order-1 w-full sm:w-auto">
            <div className="relative mx-auto w-fit">
              <div className="absolute -top-2 md:-top-4 -left-2 md:-left-4 w-full h-full bg-navy rounded-lg"></div>
              <img
                src="/lovable-uploads/5ed7bdd1-9bef-483f-b1b1-2e63ea628338.png"
                alt="Gustavo Mariano"
                className="rounded-lg w-64 h-80 sm:w-72 sm:h-84 md:w-80 md:h-96 object-cover object-[40%_30%] relative z-10 mx-auto"
              />
            </div>
          </div>

          <div className="flex-1 max-w-2xl order-2 lg:order-2 w-full">
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-navy mt-1 flex-shrink-0" size={18} />
                  <p className="ml-2 md:ml-3 text-charcoal text-sm md:text-base lg:text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border border-gray-100">
              <div className="flex items-center mb-3 md:mb-4">
                <Award className="text-navy" size={20} />
                <h3 className="ml-2 text-lg md:text-xl font-semibold text-navy">
                  Experiência e Visão
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed text-sm md:text-base">
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
