import { motion } from 'motion/react';
import { ShoppingBag, MessageCircle, Sparkles, Droplet, Check, ShieldCheck, ArrowRight, Percent } from 'lucide-react';
import { useState } from 'react';

// You can easily update this to the real WhatsApp number
const WHATSAPP_NUMBER = "79990000000"; 

const generateWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const topBrands = [
  "Tom Ford", "Baccarat Rouge", "Byredo", "Le Labo", "Kilian", "Chanel", "Dior", "Jo Malone"
];

const t = {
  ru: {
    nav_whatsapp: "WhatsApp",
    hero_tag: "Premium Collection • ВЫГОДНЕЕ НА 80%",
    hero_title_1: "Твой аромат",
    hero_title_2: "всегда с тобой",
    hero_desc: "100% оригинальные селективные бренды. Собирай свои мини-сеты по 20мл — это на 80% дешевле, чем покупать полный флакон!",
    btn_order: "Заказать в WhatsApp",
    feat_1_title: "100% Оригинал",
    feat_1_desc: "Только подлинная парфюмерия от официальных дистрибьюторов.",
    feat_2_title: "Выгода 80%",
    feat_2_desc: "Мини-сеты позволяют сэкономить до 80% по сравнению с большими флаконами.",
    feat_3_title: "Быстрый заказ",
    feat_3_desc: "Никаких долгих регистраций. Оформление заказа напрямую в WhatsApp.",
    catalog_title: "Мини-Сеты",
    card_order: "Заказать",
    cta_title: "Готовы выбрать свой аромат?",
    cta_desc: "Напишите нам в WhatsApp. Мы поможем собрать идеальный сет под ваше настроение.",
    cta_btn: "Написать менеджеру",
    footer_delivery: "Доставка по всему Казахстану",
    wa_default: "Здравствуйте! Хочу подобрать парфюмерный сет.",
    wa_product: "Здравствуйте! Хочу заказать сет:"
  },
  kz: {
    nav_whatsapp: "WhatsApp",
    hero_tag: "Premium Collection • 80% АРЗАН",
    hero_title_1: "Сенің хош иісің",
    hero_title_2: "әрқашан өзіңмен",
    hero_desc: "100% түпнұсқа селективті брендтер. 20 мл мини-сеттер жинаңыз — бұл толық құты сатып алғаннан 80%-ға арзан!",
    btn_order: "WhatsApp-тан тапсырыс",
    feat_1_title: "100% Түпнұсқа",
    feat_1_desc: "Тек ресми дистрибьюторлардан алынған түпнұсқа парфюмерия.",
    feat_2_title: "80% Үнемдеу",
    feat_2_desc: "Мини-сеттер үлкен құтыларға қарағанда 80%-ға дейін үнемдеуге мүмкіндік береді.",
    feat_3_title: "Жылдам тапсырыс",
    feat_3_desc: "Ұзақ тіркелусіз. Тапсырысты тікелей WhatsApp арқылы рәсімдеу.",
    catalog_title: "Мини-Сеттер",
    card_order: "Тапсырыс",
    cta_title: "Өз хош иісіңізді таңдауға дайынсыз ба?",
    cta_desc: "Бізге WhatsApp-қа жазыңыз. Біз көңіл-күйіңізге сай мінсіз жинақ жинауға көмектесеміз.",
    cta_btn: "Менеджерге жазу",
    footer_delivery: "Қазақстан бойынша жеткізу",
    wa_default: "Сәлеметсіз бе! Мен парфюмерлік сет таңдағым келеді.",
    wa_product: "Сәлеметсіз бе! Мен мына сетке тапсырыс бергім келеді:"
  }
};

const products = [
  {
    id: 1,
    title: { ru: "Дуэт (Твой выбор)", kz: "Дуэт (Өз таңдауың)" },
    description: { ru: "Любые 2 аромата по 20мл на ваш выбор. Идеально для знакомства.", kz: "Өзіңіз таңдаған 20 мл 2 хош иіс. Танысу үшін тамаша." },
    price: "9 990 ₸",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
    tag: "2x20 ML"
  },
  {
    id: 2,
    title: { ru: "Трио (Твой выбор)", kz: "Трио (Өз таңдауың)" },
    description: { ru: "Любые 3 аромата по 20мл. Самый популярный и выгодный набор.", kz: "Кез келген 20 мл 3 хош иіс. Ең танымал және тиімді жинақ." },
    price: "14 990 ₸",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1000&auto=format&fit=crop",
    tag: "3x20 ML"
  },
  {
    id: 3,
    title: { ru: "Дуэт (Топ хитов)", kz: "Дуэт (Ең жақсы хиттер)" },
    description: { ru: "2 главных хита (по 20мл). Нежные и притягательные композиции.", kz: "2 басты хит (20 мл-ден). Нәзік әрі тартымды композициялар." },
    price: "9 990 ₸",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop",
    tag: "2x20 ML"
  },
  {
    id: 4,
    title: { ru: "Трио (Унисекс)", kz: "Трио (Унисекс)" },
    description: { ru: "3 универсальных аромата (по 20мл), которые подходят всем.", kz: "Барлығына сәйкес келетін 3 әмбебап хош иіс (20 мл-ден)." },
    price: "14 990 ₸",
    image: "https://images.unsplash.com/photo-1595425970377-c9703c486578?q=80&w=1000&auto=format&fit=crop",
    tag: "3x20 ML"
  }
];

export default function App() {
  const [lang, setLang] = useState<'ru' | 'kz'>('ru');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const l = t[lang];

  const handleOrder = (productTitle?: string) => {
    const text = productTitle 
      ? `${l.wa_product} ${productTitle}.`
      : l.wa_default;
    window.open(generateWhatsAppLink(text), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-white/20 relative overflow-hidden flex flex-col">
      {/* Ambient Backgrounds */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-[#1a1a1a] to-transparent rounded-full opacity-40 blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#121212] to-transparent rounded-full opacity-30 blur-[80px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#C5A059]" />
            <span className="text-lg sm:text-xl font-serif tracking-[0.3em] text-white">ESSENCE</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-xs font-mono tracking-widest">
              <button 
                onClick={() => setLang('ru')} 
                className={`transition-all ${lang === 'ru' ? 'text-[#C5A059] font-bold border-b border-[#C5A059]' : 'text-white/40 hover:text-white'}`}
              >
                RU
              </button>
              <span className="text-white/10">|</span>
              <button 
                onClick={() => setLang('kz')} 
                className={`transition-all ${lang === 'kz' ? 'text-[#C5A059] font-bold border-b border-[#C5A059]' : 'text-white/40 hover:text-white'}`}
              >
                KZ
              </button>
            </div>

            <button 
              onClick={() => handleOrder()}
              className="group relative hidden sm:flex items-center gap-2 bg-[#25D366] text-black px-6 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{l.nav_whatsapp}</span>
              <div className="absolute -inset-1 bg-[#25D366] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-sm mb-8 text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                {l.hero_tag}
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.1] text-white max-w-4xl mx-auto"
            >
              {l.hero_title_1} <br className="hidden sm:block" />
              <span className="italic opacity-80">{l.hero_title_2}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-lg opacity-60 max-w-2xl mx-auto font-light leading-relaxed italic"
            >
              {l.hero_desc}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex justify-center"
            >
              <button 
                onClick={() => handleOrder()}
                className="group relative inline-flex items-center gap-4 bg-[#25D366] text-black px-10 py-5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
              >
                <span className="uppercase tracking-widest text-sm">{l.btn_order}</span>
                <MessageCircle className="w-5 h-5" />
                <div className="absolute -inset-1 bg-[#25D366] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Brands Marquee */}
        <div className="w-full overflow-hidden bg-white/[0.02] py-8 border-y border-white/5">
          <div className="flex w-max animate-[marquee_20s_linear_infinite]">
            {[...topBrands, ...topBrands, ...topBrands].map((brand, idx) => (
              <div key={idx} className="flex items-center px-12">
                <span className="text-white/40 text-sm tracking-[0.3em] uppercase font-serif whitespace-nowrap">
                  {brand}
                </span>
                <div className="w-1 h-1 rounded-full bg-[#C5A059]/50 ml-12" />
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <section className="py-24 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: l.feat_1_title,
                  desc: l.feat_1_desc
                },
                {
                  icon: <Percent className="w-6 h-6" />,
                  title: l.feat_2_title,
                  desc: l.feat_2_desc
                },
                {
                  icon: <Check className="w-6 h-6" />,
                  title: l.feat_3_title,
                  desc: l.feat_3_desc
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex gap-5 items-center bg-white/5 p-8 border border-white/5 rounded-sm backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className="w-14 h-14 bg-[#1a1a1a] flex-shrink-0 flex items-center justify-center text-[#C5A059] rounded-sm border border-white/5">
                    {feature.icon}
                  </div>
                  <div>
                    <div className="text-sm font-serif tracking-widest text-white mb-2 uppercase">{feature.title}</div>
                    <div className="text-xs opacity-50 leading-relaxed">{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-24" id="catalog">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif tracking-widest text-white mb-4 uppercase">{l.catalog_title}</h2>
              <div className="w-12 h-[1px] bg-[#C5A059] mx-auto opacity-50"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  className="group relative flex flex-col bg-white/5 border border-white/10 rounded-sm overflow-hidden cursor-pointer backdrop-blur-md"
                  onClick={() => handleOrder(product.title[lang])}
                >
                  <div className="relative aspect-[4/5] overflow-hidden border-b border-white/10">
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                      <span className="bg-[#1a1a1a]/80 backdrop-blur-md border border-[#C5A059]/30 text-[#C5A059] text-[10px] px-3 py-1 uppercase tracking-[0.2em] font-bold">
                        {product.tag}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-[1] opacity-60"></div>
                    <img 
                      src={product.image} 
                      alt={product.title[lang]}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className={`absolute inset-0 bg-[#25D366]/10 z-[2] transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="bg-[#25D366] text-black px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-semibold tracking-wider text-xs uppercase">
                        <ShoppingBag className="w-4 h-4" />
                        <span>{l.card_order}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col relative z-10">
                    <h3 className="text-lg font-serif text-white tracking-wider mb-2">{product.title[lang]}</h3>
                    <p className="text-white/50 text-xs mb-6 flex-1 font-light leading-relaxed">{product.description[lang]}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                      <span className="text-base font-mono tracking-widest text-[#C5A059] font-bold">{product.price}</span>
                      <button className="text-white/30 group-hover:text-[#25D366] transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#1a1a1a] to-transparent rounded-full opacity-40 blur-[100px]"></div>
          </div>
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-serif tracking-widest mb-6 text-white uppercase">{l.cta_title}</h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto italic font-light">
              {l.cta_desc}
            </p>
            <button 
              onClick={() => handleOrder()}
              className="group relative inline-flex items-center gap-4 bg-[#25D366] text-black px-10 py-5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
            >
              <span className="uppercase tracking-widest text-sm">{l.cta_btn}</span>
              <MessageCircle className="w-5 h-5" />
              <div className="absolute -inset-1 bg-[#25D366] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="h-20 border-t border-white/5 flex items-center relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] opacity-40 tracking-[0.2em] uppercase">
          <div className="flex items-center gap-2 text-white">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span>ESSENCE &copy; {new Date().getFullYear()}</span>
          </div>
          <div className="hidden sm:block">{l.footer_delivery}</div>
          <div>Curated Luxury Experience</div>
        </div>
      </footer>

      {/* Keyframes for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}

