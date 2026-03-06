import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  ArrowRight, 
  Smartphone, 
  Zap, 
  Layout, 
  MessageCircle, 
  Star, 
  TrendingUp,
  Globe,
  Monitor,
  X
} from 'lucide-react';

// --- Data & Constants ---

const SPECIALIST_NAME = "Nation Happy";
const CITY = "Brasil";
const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5535988325983&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20como%20funciona%20seu%20trabalho";
const INSTAGRAM_LINK = "https://www.instagram.com/nation.happy0/";

const TESTIMONIALS = [
  {
    name: "Ana Elisa Morais",
    text: "Ele prometeu entregar a página em 1 dia e entregou mesmo. Ficou show, recomendo.",
    stars: 5
  },
  {
    name: "Tatiane Almeida Cruz",
    text: "Entrega rápida e o preço super justo. Adorei.",
    stars: 5
  },
  {
    name: "Pedro Henrique Cardoso",
    text: "Atendimento do jeito que eu gosto: rápido e objetivo.",
    stars: 5
  },
  {
    name: "Maria Julia",
    text: "Podem contratar sem medo. Entregaram minha página no mesmo dia.",
    stars: 5
  },
  {
    name: "Pedro Augusto",
    text: "Deixou meu perfil muito mais profissional. Valeu a pena.",
    stars: 5
  }
];

const PORTFOLIO_ITEMS = [
  // Dentistas
  { id: 1, title: "Dentista - Implantes", category: "Dentistas", image: "https://i.imgur.com/abJ5HhE.jpeg" },
  { id: 2, title: "Clínica Odontológica", category: "Dentistas", image: "https://i.imgur.com/AnNfsas.jpeg" },
  { id: 3, title: "Ortodontia", category: "Dentistas", image: "https://i.imgur.com/U6vOrnF.jpeg" },
  { id: 4, title: "Harmonização Facial", category: "Dentistas", image: "https://i.imgur.com/373RuwT.jpeg" },
  { id: 5, title: "Odontopediatria", category: "Dentistas", image: "https://i.imgur.com/PnVnShq.jpeg" },
  // Doceiros
  { id: 6, title: "Confeitaria Artesanal", category: "Gastronomia", image: "https://i.imgur.com/O6qIXuu.jpeg" },
  { id: 7, title: "Bolos Decorados", category: "Gastronomia", image: "https://i.imgur.com/HW9QlTZ.jpeg" },
  { id: 8, title: "Doces Finos", category: "Gastronomia", image: "https://i.imgur.com/c9tW9eL.jpeg" },
  { id: 9, title: "Brigadeiria", category: "Gastronomia", image: "https://i.imgur.com/yWKjTue.jpeg" },
  { id: 10, title: "Curso de Confeitaria", category: "Gastronomia", image: "https://i.imgur.com/qcxnTx7.jpeg" },
];

// --- Components ---

const Button = ({ children, className = "", variant = "primary", ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200 focus:ring-indigo-500",
    secondary: "bg-white text-indigo-600 border-2 border-indigo-100 hover:border-indigo-200 hover:bg-indigo-50",
    whatsapp: "bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-200 focus:ring-green-500"
  };

  return (
    <a 
      href={WHATSAPP_LINK} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

const Section = ({ children, className = "", id = "" }: any) => (
  <section id={id} className={`py-16 md:py-24 px-4 md:px-6 ${className}`}>
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  </section>
);

const FadeIn = ({ children, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const openLightbox = (img: string) => {
    setActiveImage(img);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* 1. HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 px-4 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white opacity-70"></div>
        
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
              Especialista em Landing Pages
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-slate-900">
              Eu crio Landing Pages que ajudam empresas a <span className="text-indigo-600">conseguir mais clientes.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Mais de 150 páginas criadas para negócios que querem vender mais na internet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="primary" className="w-full sm:w-auto group">
                Quero uma Landing Page
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="mt-4 text-sm text-slate-500 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Resposta rápida • Atendimento personalizado
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-indigo-600 rounded-full opacity-10 blur-3xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://i.imgur.com/PBHbDYr.png" 
                alt={SPECIALIST_NAME} 
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Resultados</p>
                  <p className="text-sm font-bold text-slate-900">+ Conversão</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. O QUE É UMA LANDING PAGE */}
      <Section className="bg-slate-50">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">O que é uma Landing Page?</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Uma landing page é uma página na internet criada com um único objetivo: <strong className="text-indigo-600">transformar visitantes em clientes.</strong>
              </p>
              <p>
                Diferente de um site comum, ela é direta, estratégica e feita para convencer o visitante a tomar uma ação, como entrar em contato no WhatsApp, pedir um orçamento ou comprar um produto.
              </p>
              <p>
                Empresas que utilizam Landing Pages conseguem apresentar seus serviços de forma profissional e aumentar muito suas chances de gerar novos clientes.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 3. BENEFÍCIOS */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: MessageCircle, title: "Mais contatos", desc: "Mais clientes entrando em contato direto pelo WhatsApp." },
            { icon: Star, title: "Profissionalismo", desc: "Transmita autoridade e confiança imediata para quem visita." },
            { icon: TrendingUp, title: "Foco em Vendas", desc: "Estrutura desenhada psicologicamente para converter." },
            { icon: Smartphone, title: "100% Mobile", desc: "Funciona perfeitamente em qualquer celular ou tablet." },
            { icon: Globe, title: "Credibilidade", desc: "Sua empresa posicionada como líder no mercado." },
            { icon: Zap, title: "Integração", desc: "Conectado com seu Instagram e campanhas de anúncios." },
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 4. SOBRE MIM */}
      <Section className="bg-slate-900 text-white overflow-hidden rounded-3xl mx-4 md:mx-auto my-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <img 
              src="https://i.imgur.com/PBHbDYr.png" 
              alt="Trabalhando" 
              className="rounded-2xl shadow-2xl w-full object-cover aspect-square md:aspect-auto md:h-[500px]"
              referrerPolicy="no-referrer"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quem sou eu?</h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Meu objetivo é ajudar empresas a apresentarem seus serviços de forma profissional na internet e transformarem visitantes em clientes.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Já desenvolvi mais de <strong className="text-white">150 Landing Pages</strong> para diferentes tipos de negócios, sempre focando em páginas rápidas, modernas e feitas para gerar resultados.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "+150 páginas criadas",
                "Design moderno e profissional",
                "Foco total em conversão",
                "Páginas rápidas e responsivas"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  {item}
                </li>
              ))}
            </ul>
            
            <Button variant="whatsapp" className="w-full md:w-auto">
              Falar com {SPECIALIST_NAME}
            </Button>
          </FadeIn>
        </div>
      </Section>

      {/* 5. PORTFOLIO */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Algumas páginas que já desenvolvi</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Trabalho com todo tipo de clientes, adaptando o design para a necessidade de cada negócio.
            Veja abaixo alguns exemplos de nichos diferentes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Todos", "Dentistas", "Gastronomia"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS
            .filter(item => activeCategory === "Todos" || item.category === activeCategory)
            .map((item) => (
            <FadeIn key={item.id}>
              <div 
                className="group relative overflow-hidden rounded-2xl border border-slate-200 cursor-pointer shadow-sm hover:shadow-xl transition-all"
                onClick={() => openLightbox(item.image)}
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-semibold text-lg flex items-center gap-2">
                    <Monitor className="w-5 h-5" /> Ver projeto
                  </p>
                </div>
                <div className="p-4 bg-white border-t border-slate-100 flex justify-between items-center">
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <span className="text-xs px-2 py-1 bg-slate-100 rounded-md text-slate-500">{item.category}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 6. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-4 bg-indigo-600 text-white text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
            Se o seu negócio ainda não tem uma página profissional, você pode estar perdendo clientes todos os dias.
          </h2>
          <Button variant="secondary" className="mt-4">
            Quero minha Landing Page
          </Button>
        </FadeIn>
      </section>

      {/* 7. COMO FUNCIONA */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Como funciona?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-indigo-100 -z-10"></div>
          
          {[
            { step: "1", title: "Contato", desc: "Você entra em contato pelo WhatsApp." },
            { step: "2", title: "Briefing", desc: "Entendo seu negócio e seus objetivos." },
            { step: "3", title: "Criação", desc: "Crio sua página profissional para atrair clientes." },
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-indigo-200">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 8. PROVA SOCIAL (FEEDBACK) */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Feedback de clientes</h2>
          <p className="text-slate-600">O que dizem sobre meu trabalho</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic flex-grow">"{testimonial.text}"</p>
                <div className="mt-auto pt-4 border-t border-slate-200">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">Cliente Verificado</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 9. CTA FINAL */}
      <section className="py-24 px-4 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="relative max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seu negócio merece uma página profissional.
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Uma Landing Page pode transformar visitantes em clientes. Não perca mais tempo.
            </p>
            <Button variant="whatsapp" className="text-lg px-10 py-5">
              Criar minha Landing Page
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* 10. RODAPÉ */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 border-t border-slate-900">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-white text-xl font-bold mb-2">{SPECIALIST_NAME}</h3>
          <p className="mb-6">Especialista em Landing Pages • {CITY}</p>
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href={INSTAGRAM_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={activeImage} 
            alt="Projeto ampliado" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      
      {/* Floating WhatsApp Button (Optional but recommended for conversion) */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
