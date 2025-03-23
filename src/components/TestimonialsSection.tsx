
import { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Анна Смирнова",
    role: "Владелица онлайн-магазина",
    content: "После курса моя прибыль выросла на 67%! Особенно полезными оказались модули по SEO и контент-маркетингу. Рекомендую всем предпринимателям, которые хотят масштабировать бизнес.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Максим Петров",
    role: "Основатель стартапа",
    content: "Благодаря курсу мы разработали маркетинговую стратегию с нуля и привлекли первых клиентов уже через 2 недели после запуска. Эксперты Samsung дали ценные советы по позиционированию.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Елена Козлова",
    role: "Фрилансер",
    content: "Я всегда боялась маркетинга, но этот курс всё изменил. Теперь я не только продвигаю свои услуги, но и консультирую клиентов. Окупила стоимость обучения в первый же месяц!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    // Clean up
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-samsung-blue/5 to-samsung-light-blue/5">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 section-animate"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших выпускников</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Узнайте, как курс помог другим предпринимателям развить свой бизнес
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`glass-card rounded-2xl p-8 transition-all duration-500 absolute inset-0 ${
                  index === activeIndex ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 -z-10 translate-y-4'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-samsung-blue text-samsung-blue" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-lg italic">"{testimonial.content}"</blockquote>
              </div>
            ))}
          </div>

          {/* Testimonial height placeholder */}
          <div className="invisible">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Имя Фамилия</h4>
                  <p className="text-gray-600">Должность</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-lg italic">
                "Длинный отзыв, который обеспечивает необходимую высоту для контейнера, чтобы избежать скачков при смене отзывов. Это пример длинного отзыва, который может быть у нас на сайте."
              </blockquote>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all ${
                  index === activeIndex ? 'bg-samsung-blue scale-125' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
