
import { Check, Clock, Users, Medal } from "lucide-react";
import { useEffect, useRef } from "react";

const benefits = [
  {
    id: 1,
    title: "Пошаговые уроки",
    description: "Легко усваиваемый материал, разбитый на логичные модули",
    icon: <Clock className="w-10 h-10 text-samsung-blue" />,
    delay: 100
  },
  {
    id: 2,
    title: "Поддержка 24/7",
    description: "Персональный наставник и доступ к закрытому сообществу",
    icon: <Users className="w-10 h-10 text-samsung-blue" />,
    delay: 300
  },
  {
    id: 3,
    title: "Сертификат по окончании",
    description: "Официальный документ от Samsung повысит ваш статус",
    icon: <Medal className="w-10 h-10 text-samsung-blue" />,
    delay: 500
  }
];

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="benefits" className="py-20 bg-samsung-gray">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 section-animate"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Преимущества нашего курса</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Разработано экспертами Samsung, чтобы помочь вам быстро освоить необходимые навыки и достичь результатов
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="benefit-card opacity-0 animate-fade-in" 
              style={{ animationDelay: `${benefit.delay}ms`, animationFillMode: "forwards" }}
            >
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
              <div className="mt-6 flex">
                <span className="inline-flex items-center text-samsung-blue font-medium">
                  <Check className="w-5 h-5 mr-2" /> Включено в курс
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
