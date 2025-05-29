import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-10 px-4">
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
              Desenvolvido com <Heart className="mx-1 text-red-500" size={14} />{" "}
              por Gustavo Mariano © {currentYear}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
