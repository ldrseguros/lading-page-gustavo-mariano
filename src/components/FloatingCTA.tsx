import { MessageSquare, X } from "lucide-react";
import { useState } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-pulse">
      <div className="relative">
        {/* Botão de fechar */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center text-xs transition-colors z-10"
          aria-label="Fechar"
        >
          <X size={12} />
        </button>

        {/* CTA Principal */}
        <a
          href="https://wa.me/5562996920050?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20conhecer%20melhor%20seus%20serviços"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
            <MessageSquare size={20} />
          </div>
          <div className="hidden sm:block text-sm font-semibold">
            <div>💬 Fale comigo</div>
            <div className="text-xs opacity-90">
              Atendimento rápido e personalizado
            </div>
          </div>
        </a>

        {/* Versão mobile - somente ícone */}
        <div className="sm:hidden">
          <a
            href="https://wa.me/5562996920050?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20conhecer%20melhor%20seus%20serviços"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <MessageSquare size={24} />
          </a>
        </div>
      </div>

      {/* Indicador de pulsação */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default FloatingCTA;
