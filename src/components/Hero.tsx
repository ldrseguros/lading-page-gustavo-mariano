import { ChevronDown } from "lucide-react";

interface HeroProps {
  scrollToSection: () => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center text-center px-4 py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-charcoal opacity-90 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden mt-8 md:mt-16 mb-6 md:mb-8 border-4 border-white/20 shadow-2xl">
          <img
            src="/lovable-uploads/2f31e982-c7bd-4347-b604-00a07f24d8a6.png"
            alt="Gustavo Mariano"
            className="w-full h-full object-cover object-[40%_30%]"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-serif text-white mb-4 md:mb-6 animate-fade-in">
          Gustavo Mariano
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 md:mb-8 max-w-2xl px-2 animate-fade-in animate-delay-200">
          "Sou um estrategista apaixonado por proteger histórias de sucesso."
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-10 animate-fade-in animate-delay-300 px-2">
          <span className="bg-white/10 text-white px-3 py-2 text-sm sm:text-base rounded-full backdrop-blur-sm">
            Especialista em Seguros
          </span>
          <span className="bg-white/10 text-white px-3 py-2 text-sm sm:text-base rounded-full backdrop-blur-sm">
            Mentor em Negócios
          </span>
          <span className="bg-white/10 text-white px-3 py-2 text-sm sm:text-base rounded-full backdrop-blur-sm">
            Estrategista Corporativo
          </span>
        </div>

        <div className="mb-8 md:mb-12 animate-fade-in animate-delay-400">
          <a
            href="https://wa.me/5562996920050?text=Olá,%20gostaria%20de%20receber%20uma%20análise%20estratégica%20gratuita%20para%20minha%20empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-3xl border border-green-400/20"
          >
            🎯 Quero minha análise estratégica gratuita
          </a>
          <p className="text-white/60 text-sm mt-3 max-w-md mx-auto">
            Descubra oportunidades ocultas na sua apólice em uma consultoria
            personalizada
          </p>
        </div>

        <button
          onClick={scrollToSection}
          className="animate-bounce flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="text-white" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
