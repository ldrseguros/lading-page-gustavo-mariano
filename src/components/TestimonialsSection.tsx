import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "A LDR redefiniu minha visão sobre corretoras. Agilidade, atenção e eficiência em cada detalhe. Hoje, confio plenamente na LDR e no Gustavo Mariano para proteger o que é essencial para o meu negócio.",
      author: "Wellington Delcy",
      position: "CEO da ION Tecnologia",
    },
    {
      quote:
        "A LDR faz parte do meu dia a dia. Confio neles para tudo: do seguro residencial e veicular ao de responsabilidade civil. O atendimento é excelente em todas as etapas — desde a contratação até o suporte quando preciso acionar algum seguro. Admiro a transparência e a integridade com que sempre me oferecem as opções mais adequadas às minhas necessidades. Este ano, renovei todos os meus seguros com a LDR, e sempre que posso, recomendo de olhos fechados!",
      author: "Dra. Kelly de Castro",
      position: "Advogada",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient">
      <div className="max-w-6xl mx-auto section-fade">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-3 text-center">
          Depoimentos
        </h2>
        <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
          O que nossos clientes e parceiros dizem sobre nossa atuação
        </p>

        <div className="relative bg-white rounded-lg p-8 md:p-12 shadow-xl">
          <Quote className="text-navy/10 absolute top-6 left-6" size={64} />

          <div className="text-center px-4 sm:px-12">
            <p className="text-xl md:text-2xl text-charcoal italic mb-8 relative z-10">
              "{testimonials[activeIndex].quote}"
            </p>

            <div>
              <p className="font-semibold text-navy text-lg">
                {testimonials[activeIndex].author}
              </p>
              <p className="text-silver">
                {testimonials[activeIndex].position}
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center hover:bg-navy/10 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} className="text-navy" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center hover:bg-navy/10 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} className="text-navy" />
            </button>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-navy" : "bg-navy/20"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
