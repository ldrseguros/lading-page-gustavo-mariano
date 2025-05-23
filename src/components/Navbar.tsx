import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

const Navbar = ({ scrollToSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Sobre", id: "about" },
    { name: "Cases", id: "cases" },
    { name: "Depoimentos", id: "testimonials" },
    { name: "Vídeos", id: "videos" },
    { name: "Seguros", id: "insurance" },
    { name: "Análise Estratégica", id: "strategic-analysis" },
    { name: "Contato", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-sm py-2 shadow-md"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection("top")}
            className="text-white text-xl font-serif font-bold cursor-pointer flex items-center gap-2"
          >
            <img
              src="/Logo_GM_Branca.svg"
              alt="Gustavo Mariano"
              width={40}
              height={40}
            />
            <img
              src="/Logo_Escrita_Branca.svg"
              alt="Gustavo Mariano"
              width={200}
              height={200}
            />
          </button>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-sm">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
