const StrategicAnalysisSection = () => {
  return (
    <section id="strategic-analysis" className="py-20 px-4 bg-navy text-white">
      <div className="max-w-6xl mx-auto section-fade">
        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-3 text-center">
          Análise Estratégica
        </h2>
        <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
          Conectamos as condições gerais da seguradora com o contrato de
          prestação de serviço da sua empresa
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-video bg-black/30 rounded-lg overflow-hidden shadow-xl">
            {/* Substitua pelo vídeo real ou use um placeholder */}
            <iframe
              src="https://www.youtube.com/embed/yKwHa9TT9mU"
              title="Análise Estratégica"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col justify-center p-6 bg-navy/50 backdrop-blur-sm rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Proteção Alinhada à Realidade do seu Negócio
            </h3>
            <p className="mb-6">
              Realizamos uma análise estratégica que conecta as condições gerais
              da seguradora com o contrato de prestação de serviço da sua
              empresa, identificando brechas e oportunidades de proteção.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Redução de riscos jurídicos e financeiros
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Fortalecimento da tomada de decisão
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Cobertura alinhada com suas necessidades reais
              </li>
            </ul>

            {/* CTAs melhorados com texto mais persuasivo */}
            <div className="space-y-4">
              <a
                href="https://wa.me/5562996920050?text=Olá,%20vi%20a%20apresentação%20sobre%20análise%20estratégica%20e%20gostaria%20de%20receber%20insights%20personalizados%20para%20minha%20empresa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg"
              >
                💬 Receba insights estratégicos personalizados
              </a>
              <a
                href="https://analise-estrategia-gustavo-mariano.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium py-3 px-6 rounded-lg transition-all duration-300 ease-in-out backdrop-blur-sm"
              >
                📊 Ver apresentação completa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicAnalysisSection;
