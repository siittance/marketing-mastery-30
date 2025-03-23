
import { useRef, useEffect, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: string;
  delay?: number;
  threshold?: number;
  className?: string;
}

const AnimateOnScroll = ({
  children,
  animation = "animate-fade-in",
  delay = 0,
  threshold = 0.1,
  className = "",
}: AnimateOnScrollProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (elementRef.current) {
              elementRef.current.style.animationDelay = `${delay}ms`;
              elementRef.current.style.animationFillMode = "forwards";
              elementRef.current.classList.add(animation);
            }
            
            if (elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation, delay, threshold]);

  return (
    <div ref={elementRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;
