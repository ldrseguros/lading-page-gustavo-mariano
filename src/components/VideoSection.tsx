
const VideoSection = () => {
  // Placeholder para futuros vídeos e entrevistas
  const videoContent = [
    {
      id: "video-placeholder-1",
      title: "Entrevista: O Futuro do Mercado de Seguros",
      thumbnail: "https://via.placeholder.com/640x360/1A1F2C/FFFFFF?text=Entrevista+Gustavo+Mariano",
      description: "Nesta entrevista, Gustavo Mariano discute tendências e inovações no mercado de seguros corporativos.",
    },
    {
      id: "video-placeholder-2",
      title: "Palestra: Gestão de Riscos para Empresas",
      thumbnail: "https://via.placeholder.com/640x360/403E43/FFFFFF?text=Palestra+Gestão+de+Riscos",
      description: "Palestra realizada no Congresso Nacional de Seguros sobre estratégias de proteção para empresas.",
    },
  ];

  return (
    <section id="videos" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto section-fade">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-navy mb-3 text-center">
          Vídeos e Entrevistas
        </h2>
        <p className="text-silver text-center mb-12 max-w-2xl mx-auto">
          Acompanhe palestras, entrevistas e participações em eventos do setor
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {videoContent.map((video) => (
            <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-2">{video.title}</h3>
                <p className="text-charcoal mb-4">{video.description}</p>
                <button className="text-navy font-medium flex items-center">
                  <span>Em breve</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-navy italic">
            Novos vídeos e entrevistas serão adicionados em breve. Fique atento!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
