
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const cta = ctaRef.current;
    const image = imageRef.current;

    if (heading) heading.classList.add("animate-slide-down");
    
    setTimeout(() => {
      if (subheading) subheading.classList.add("animate-slide-up");
    }, 300);
    
    setTimeout(() => {
      if (cta) cta.classList.add("animate-fade-in");
    }, 600);
    
    setTimeout(() => {
      if (image) image.classList.add("animate-scale-up");
    }, 900);
  }, []);

  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden hero-gradient">
      <div className="absolute inset-0 dot-pattern z-[-1]" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-block px-3 py-1 bg-samsung-blue/10 text-samsung-blue rounded-full text-sm font-medium mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Эксклюзивно от Samsung
            </div>
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 leading-tight"
            >
              Начните зарабатывать на <span className="text-gradient">интернет-маркетинге</span> уже через месяц!
            </h1>
            <p 
              ref={subheadingRef}
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl opacity-0"
            >
              Практический курс с обратной связью от экспертов. Разработан специально для молодых предпринимателей, которые хотят освоить продвижение в интернете.
            </p>
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-center gap-4 opacity-0"
            >
              <a href="#signup" className="cta-button group w-full sm:w-auto text-center shine-effect">
                <span className="flex items-center justify-center">
                  Записаться на курс со скидкой 30%!
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <div className="text-samsung-text-gray mt-2 sm:mt-0 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full shadow-sm">
                Старт 15 июня
              </div>
            </div>
          </div>
          <div 
            ref={imageRef}
            className="md:w-1/2 opacity-0"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-samsung-blue/10 rounded-full animate-float-enhanced"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-samsung-light-blue/10 rounded-full animate-float-enhanced" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-20 right-16 w-16 h-16 bg-samsung-blue/5 rounded-full animate-float-enhanced" style={{ animationDelay: "1.5s" }}></div>
              
              <div className="glass-card rounded-2xl overflow-hidden shadow-2xl relative z-10 shine-effect">
                <div className="p-6 bg-gradient-to-br from-samsung-blue/5 to-samsung-light-blue/5">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Digital Marketing Team" 
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-2">Освойте интернет-маркетинг за 30 дней</h3>
                      <p className="text-gray-600 mb-4">и увеличьте продажи на 50%</p>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex -space-x-2 hover:space-x-1 transition-all duration-300">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden hover:scale-110 transition-transform duration-300">
                              <img 
                                src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                                alt={`Student ${i}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-samsung-blue to-samsung-light-blue flex items-center justify-center text-white text-xs border-2 border-white hover:scale-110 transition-transform duration-300">
                            +42
                          </div>
                        </div>
                        <div className="text-samsung-blue font-medium">
                          4.9 ★★★★★
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
