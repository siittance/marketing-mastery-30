
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-samsung-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold mb-4">Samsung Marketing</div>
            <p className="text-gray-400 max-w-xs mb-6">
              Образовательная платформа для предпринимателей от компании Samsung
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Интернет-маркетинг</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SMM-продвижение</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контент-маркетинг</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SEO-оптимизация</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Команда</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Mail size={16} className="mr-2" />
                  <a href="mailto:education@samsung.com" className="hover:text-white transition-colors">
                    education@samsung.com
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone size={16} className="mr-2" />
                  <a href="tel:+78001234567" className="hover:text-white transition-colors">
                    8 (800) 123-45-67
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <div>© 2023 Samsung Electronics. Все права защищены.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
