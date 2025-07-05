import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold">matvussia</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-gray-300 transition-colors">
                Главная
              </a>
              <a
                href="#projects"
                className="hover:text-gray-300 transition-colors"
              >
                Проекты
              </a>
              <a href="#blog" className="hover:text-gray-300 transition-colors">
                Блог
              </a>
              <a
                href="#contact"
                className="hover:text-gray-300 transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/img/2dc8ab28-1929-487e-aad2-6da86e97c5ba.jpg')`,
          }}
        ></div>
        <div className="relative z-20 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Фотограф
            <span className="block text-gray-300">Matvussia</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Создаю истории через объектив. Каждый кадр — это эмоция, каждая
            фотография — это память.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Смотреть работы
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-gray-400">
              Лучшие работы за последние годы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/img/f33cb778-98b2-4c36-a28e-bf6d4e872dfa.jpg",
                title: "Fashion Photography",
                category: "Мода",
              },
              {
                image: "/img/443b4ba0-e987-4f6a-a3f0-9146b9a36401.jpg",
                title: "Wedding Photography",
                category: "Свадьбы",
              },
              {
                image: "/img/2dc8ab28-1929-487e-aad2-6da86e97c5ba.jpg",
                title: "Portrait Photography",
                category: "Портреты",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 overflow-hidden photo-hover"
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-300">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Обо мне</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Я фотограф с 10-летним опытом, специализирующийся на портретной,
            свадебной и модной фотографии. Моя цель — запечатлеть не просто
            моменты, а эмоции и истории, которые останутся с вами навсегда.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <p className="text-gray-400">Довольных клиентов</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <p className="text-gray-400">Лет опыта</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <p className="text-gray-400">Свадеб</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Блог</h2>
            <p className="text-xl text-gray-400">Последние статьи и советы</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Секреты идеального портрета",
                excerpt: "Как создать эмоциональный и запоминающийся портрет",
                date: "15 декабря 2024",
              },
              {
                title: "Свадебная фотография: тренды 2024",
                excerpt: "Актуальные стили и подходы в свадебной съемке",
                date: "10 декабря 2024",
              },
              {
                title: "Работа с естественным светом",
                excerpt: "Как использовать солнечный свет для создания магии",
                date: "5 декабря 2024",
              },
            ].map((post, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="text-sm text-gray-400 mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <Button variant="outline" size="sm">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Связаться со мной</h2>
          <p className="text-xl text-gray-300 mb-12">
            Готов воплотить ваши идеи в жизнь. Свяжитесь со мной для обсуждения
            проекта.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Icon
                name="Mail"
                size={32}
                className="mx-auto mb-4 text-gray-400"
              />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">hello@matvussia.com</p>
            </div>
            <div className="text-center">
              <Icon
                name="Phone"
                size={32}
                className="mx-auto mb-4 text-gray-400"
              />
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (999) 123-45-67</p>
            </div>
            <div className="text-center">
              <Icon
                name="MapPin"
                size={32}
                className="mx-auto mb-4 text-gray-400"
              />
              <h3 className="text-lg font-semibold mb-2">Локация</h3>
              <p className="text-gray-300">Москва, Россия</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg">
              <Icon name="Instagram" size={20} className="mr-2" />
              Instagram
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Matvussia Photography. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
