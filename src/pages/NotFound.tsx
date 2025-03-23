
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-samsung-gray to-white p-4">
      <div className="max-w-lg text-center glass-card rounded-2xl p-12 animate-fade-in">
        <h1 className="text-6xl font-bold mb-4 text-samsung-blue">404</h1>
        <p className="text-xl text-gray-600 mb-8">Упс! Страница не найдена</p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-samsung-blue text-white rounded-full transition-all hover:bg-samsung-light-blue"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
