import { Building, Users, Shield } from "lucide-react";

const CasesSection = () => {
  return (
    <section id="cases" className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto section-fade">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-navy mb-3 text-center">
          Cases de Sucesso
        </h2>
        <p className="text-silver text-center mb-8 md:mb-12 max-w-4xl mx-auto text-sm md:text-base">
          Com mais de 21 anos de atuação no mercado de seguros, minha jornada é
          marcada por histórias reais de transformação, proteção e crescimento —
          tanto para empresas quanto para pessoas.
        </p>

        <div className="max-w-4xl mx-auto">
          <p className="text-charcoal mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
            Cada cliente atendido representa um capítulo de aprendizado:
          </p>

          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="text-navy text-base md:text-lg mt-1 flex-shrink-0">
                🔹
              </div>
              <p className="text-charcoal text-sm md:text-base leading-relaxed">
                Desde a resolução de falhas críticas até a consolidação de
                estratégias personalizadas de proteção;
              </p>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="text-navy text-base md:text-lg mt-1 flex-shrink-0">
                🔹
              </div>
              <p className="text-charcoal text-sm md:text-base leading-relaxed">
                Da estruturação de seguros para empresas de pequeno, médio e
                grande porte — à entrega de soluções sob medida para quem
                precisa de proteção real e continuidade nos negócios. Sempre com
                foco em levar a melhor estruturação à realidade de cada cliente;
              </p>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="text-navy text-base md:text-lg mt-1 flex-shrink-0">
                🔹
              </div>
              <p className="text-charcoal text-sm md:text-base leading-relaxed">
                Da gestão de riscos à fidelização com base em ética, clareza e
                confiança.
              </p>
            </div>
          </div>

          <div className="bg-navy text-white p-4 md:p-8 rounded-lg mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 md:mb-4">
              Destaque na Trajetória
            </h3>
            <p className="mb-4 md:mb-6 text-white/90 text-sm md:text-base leading-relaxed">
              Um dos marcos dessa trajetória foi minha atuação no BNI (Business
              Network International) — uma rede que me permitiu mostrar, na
              prática, que servir com propósito atrai conexões sólidas e
              resultados exponenciais.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img
                src="/lovable-uploads/b666b3da-06ba-4fbd-88df-1c340dd6dca8.png"
                alt="Gustavo Mariano em reunião com clientes"
                className="w-full sm:w-64 h-auto rounded-lg"
              />
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  Abordagem Consultiva
                </h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Cada solução é desenvolvida após uma análise profunda do
                  negócio e seus riscos específicos, garantindo uma proteção
                  adequada e personalizada.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-base md:text-lg font-semibold text-navy mb-3 md:mb-4">
              São centenas de empresas protegidas e milhões em patrimônios
              segurados.
            </p>
            <p className="text-charcoal text-base md:text-lg leading-relaxed">
              Esses são os verdadeiros cases que me movem:{" "}
              <strong>
                proteger histórias, preservar legados e impulsionar negócios.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
