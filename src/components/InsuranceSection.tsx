const InsuranceSection = () => {
  return (
    <section id="insurance" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto section-fade">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-navy mb-3 text-center">
          Seguros Personalizados
        </h2>
        <p className="text-silver text-center mb-12 max-w-2xl mx-auto">
          Soluções de seguros adaptadas às necessidades da sua empresa
        </p>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-navy mb-4">
              Gerenciamento de Seguros Eficiente
            </h3>
            <p className="text-charcoal mb-6">
              Oferecemos serviços e soluções rápidas, adequando produtos e
              serviços correlatos à necessidade do seu negócio. Nossa equipe
              especializada está pronta para encontrar as melhores opções de
              seguros para proteger sua empresa.
            </p>
            <ul className="mb-8 space-y-2 text-charcoal">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1"
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
                Atendimento personalizado
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1"
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
                Soluções adaptadas ao seu perfil de risco
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1"
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
                Parceria com as melhores seguradoras do mercado
              </li>
            </ul>
            <a
              href="https://ldr-seguros.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-navy hover:bg-navy/90 text-white font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Faça sua cotação online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
