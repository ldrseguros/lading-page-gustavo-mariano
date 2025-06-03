import palestra from "../assets/images/palestra.jpg";

const VideoSection = () => {
  // Placeholder para futuros vídeos e entrevistas
  const videoContent = [
    {
      id: "video-1",
      title: "Entrevista: O Futuro do Mercado de Seguros",
      thumbnail: "https://img.youtube.com/vi/HrWw8J1eyRo/maxresdefault.jpg",
      videoUrl: "https://youtu.be/HrWw8J1eyRo?si=tBF3vNzmVHWgyTHH",
      embedUrl: "https://www.youtube.com/embed/HrWw8J1eyRo",
      description:
        "Nesta entrevista, Gustavo Mariano discute tendências e inovações no mercado de seguros corporativos.",
      isVideo: true,
    },
    {
      id: "image-placeholder-1",
      title: "Palestra: Gestão de Riscos para Empresas",
      thumbnail: palestra,
      description:
        "Palestra realizada sobre estratégias de proteção para empresas.",
      isVideo: false,
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
            <div
              key={video.id}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100"
            >
              {video.isVideo ? (
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-72 object-cover group-hover:opacity-90 transition-opacity"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
              ) : (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-72 object-cover object-[center_10%]"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-2">
                  {video.title}
                </h3>
                <p className="text-charcoal mb-4">{video.description}</p>
                {video.isVideo ? (
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Assistir no YouTube
                  </a>
                ) : (
                  <button className="text-navy font-medium flex items-center"></button>
                )}
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
