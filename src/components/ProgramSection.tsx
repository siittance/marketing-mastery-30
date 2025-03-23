
import { useRef, useEffect } from "react";
import { CheckCircle } from "lucide-react";

const ProgramSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const programModules = [
    {
      id: 1,
      title: "Основы интернет-маркетинга",
      duration: "Неделя 1",
      topics: ["Современные каналы продвижения", "Анализ целевой аудитории", "Создание маркетинговой стратегии"]
    },
    {
      id: 2,
      title: "Сайт и SEO-оптимизация",
      duration: "Неделя 2", 
      topics: ["Создание продающего сайта", "Основы SEO", "Аналитика и отслеживание конверсий"]
    },
    {
      id: 3,
      title: "Социальные сети и контент",
      duration: "Неделя 3",
      topics: ["Стратегия присутствия в соцсетях", "Создание вовлекающего контента", "Работа с блогерами и лидерами мнений"]
    },
    {
      id: 4,
      title: "Реклама и аналитика",
      duration: "Неделя 4",
      topics: ["Настройка рекламных кампаний", "Оптимизация рекламного бюджета", "Анализ эффективности и масштабирование"]
    }
  ];

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
    <section id="program" className="py-20">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 section-animate"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Программа обучения</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Интенсивный 30-дневный курс с практическими заданиями и обратной связью
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programModules.map((module, index) => (
            <div 
              key={module.id} 
              className="glass-card rounded-2xl p-8 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: "forwards" }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-samsung-blue/10 text-samsung-blue text-sm font-medium px-3 py-1 rounded-full">
                  {module.duration}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-6">{module.title}</h3>
              <ul className="space-y-3">
                {module.topics.map((topic, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-samsung-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
