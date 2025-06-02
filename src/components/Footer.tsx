import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* CTA final no rodapé - lembrete estratégico */}
      <div className="bg-gradient-to-r from-navy to-blue-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Não deixe sua empresa desprotegida
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Cada dia sem a proteção adequada é um risco desnecessário. Comece
            hoje mesmo a construir uma estratégia sólida de proteção.
          </p>
          <a
            href="https://wa.me/5562996920050?text=Olá,%20quero%20proteger%20minha%20empresa%20adequadamente%20e%20gostaria%20de%20começar%20agora"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
          >
            🚀 Começar proteção agora
          </a>
        </div>
      </div>

      {/* Rodapé tradicional */}
      <div className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-serif font-bold">Gustavo Mariano</h3>
              <p className="text-white/70 text-sm mt-1">
                Especialista em Seguros e Estratégias Corporativas
              </p>
            </div>

            <div className="flex items-center">
              <span className="text-white/70 text-sm flex items-center">
                Desenvolvido com{" "}
                <Heart className="mx-1 text-red-500" size={14} /> por Gustavo
                Mariano © {currentYear}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
