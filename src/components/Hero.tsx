import { ChevronDown } from "lucide-react";

interface HeroProps {
  scrollToSection: () => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center text-center px-4 py-20 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-charcoal opacity-90 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mt-16 mb-8 border-4 border-white/20 shadow-2xl">
          <img
            src="/lovable-uploads/2f31e982-c7bd-4347-b604-00a07f24d8a6.png"
            alt="Gustavo Mariano"
            className="w-full h-full object-cover object-[40%_30%]"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6 animate-fade-in">
          Gustavo Mariano
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl animate-fade-in animate-delay-200">
          "Sou um estrategista apaixonado por proteger histórias de sucesso."
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in animate-delay-300">
          <span className="bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-sm">
            CEO da LDR Seguros
          </span>
          <span className="bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-sm">
            Sócio da Aureum Soluções em Saúde
          </span>
          <span className="bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-sm">
            21 anos no setor de seguros
          </span>
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
