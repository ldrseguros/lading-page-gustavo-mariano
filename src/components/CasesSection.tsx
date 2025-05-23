
import { Building, Users, Shield } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      name: "Sicoob",
      description: "Contrato de mais de 16 anos, fornecendo soluções personalizadas para cooperativas financeiras.",
      icon: Building,
      color: "bg-green-50 text-green-700",
    },
    {
      name: "Disbral (Indústria Asfáltica)",
      description: "Estruturação de soluções corporativas adaptadas às necessidades específicas do setor industrial.",
      icon: Shield,
      color: "bg-blue-50 text-blue-700",
    },
    {
      name: "Escritórios de Contabilidade e Advocacia",
      description: "Proteção personalizada para profissionais liberais e suas empresas, garantindo continuidade nos negócios.",
      icon: Users,
      color: "bg-purple-50 text-purple-700",
    },
  ];

  return (
    <section id="cases" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto section-fade">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-navy mb-3 text-center">
          Cases de Sucesso
        </h2>
        <p className="text-silver text-center mb-12 max-w-2xl mx-auto">
          Histórias de parcerias duradouras e soluções estratégicas que protegem o patrimônio e garantem a continuidade dos negócios.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div key={index} className="casestudy-item">
              <div className={`w-12 h-12 rounded-full ${item.color.split(' ')[0]} flex items-center justify-center mb-4`}>
                <item.icon className={item.color.split(' ')[1]} size={24} />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">{item.name}</h3>
              <p className="text-charcoal">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-navy text-white p-8 rounded-lg">
          <h3 className="text-2xl font-serif font-bold mb-4">Profissionais da Saúde</h3>
          <p className="mb-6">
            Desenvolvimento de coberturas específicas para médicos, dentistas e clínicas, 
            protegendo tanto o profissional quanto sua estrutura de trabalho.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <img 
              src="/lovable-uploads/b666b3da-06ba-4fbd-88df-1c340dd6dca8.png" 
              alt="Gustavo Mariano em reunião com clientes" 
              className="w-full sm:w-64 h-auto rounded-lg"
            />
            <div>
              <h4 className="text-xl font-semibold mb-2">Abordagem Consultiva</h4>
              <p className="text-white/80">
                Cada solução é desenvolvida após uma análise profunda do negócio e seus riscos específicos, 
                garantindo uma proteção adequada e personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
