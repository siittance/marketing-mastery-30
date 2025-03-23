
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";

const SignupSection = () => {
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

  const calculateDiscount = (original: number, discount: number) => {
    return original - (original * (discount / 100));
  };

  return (
    <section id="signup" className="py-20 bg-samsung-gray">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 section-animate"
      >
        <div className="max-w-5xl mx-auto glass-card rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 bg-white">
              <h2 className="text-3xl font-bold mb-4">Начните обучение уже сегодня</h2>
              <p className="text-gray-600 mb-8">
                Количество мест в группе ограничено. Забронируйте своё место прямо сейчас и получите бонусные материалы от экспертов Samsung.
              </p>
              
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-lg font-semibold">Стоимость обучения:</div>
                  <div className="text-right">
                    <div className="text-gray-500 line-through">₽49,990</div>
                    <div className="text-2xl font-bold text-samsung-blue">
                      ₽{calculateDiscount(49990, 30).toLocaleString('ru-RU')}
                    </div>
                  </div>
                </div>
                <div className="bg-samsung-blue/10 text-samsung-blue text-sm font-medium px-4 py-2 rounded-lg mb-4">
                  Скидка 30% действует еще 3 дня!
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-samsung-blue mr-3 flex-shrink-0"></div>
                    <span>Доступ к материалам курса на 12 месяцев</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-samsung-blue mr-3 flex-shrink-0"></div>
                    <span>Персональный наставник на время обучения</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-samsung-blue mr-3 flex-shrink-0"></div>
                    <span>Сертификат от Samsung по окончании курса</span>
                  </div>
                </div>
              </div>
              
              <a 
                href="#contact-form" 
                className="cta-button w-full flex items-center justify-center group"
              >
                <span className="flex items-center">
                  Записаться на курс со скидкой 30%
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>
            
            <div id="contact-form" className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-samsung-blue to-samsung-light-blue text-white">
              <h3 className="text-2xl font-semibold mb-6">Оставьте заявку</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Введите ваше имя"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="example@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 px-4 bg-white text-samsung-blue font-medium rounded-lg transition-all hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  Отправить заявку
                </button>
                
                <p className="text-sm text-white/70 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
