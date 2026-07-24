import { motion } from 'motion/react';
import { ArrowRight, BarChart, Image as ImageIcon, PenTool, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

const testimonials = [
  {
    name: "Elena Rostova",
    role: "CEO, Studio ER",
    content: "Lumina transformó por completo cómo presentamos nuestros proyectos. Su estrategia nos permitió acceder a clientes internacionales.",
    rating: 5
  },
  {
    name: "Marco Rossi",
    role: "Arquitecto Principal",
    content: "La calidad de los renders y el branding que crearon para nosotros es de otro nivel. Un equipo verdaderamente premium.",
    rating: 5
  },
  {
    name: "Sofia Mendez",
    role: "Diseñadora de Interiores",
    content: "Entienden la estética y el negocio a partes iguales. Nuestra conversión aumentó un 40% desde que rediseñaron nuestra web.",
    rating: 5
  }
];

const faqs = [
  {
    q: "¿En qué se diferencia Lumina de otras agencias?",
    a: "Nos especializamos exclusivamente en diseño de interiores y arquitectura. Entendemos el lenguaje, la estética y los canales adecuados para captar clientes de alto valor."
  },
  {
    q: "¿Ofrecen servicios internacionales?",
    a: "Sí, trabajamos con estudios en todo el mundo, adaptando nuestras estrategias a los mercados locales y globales."
  },
  {
    q: "¿Cuánto tiempo toma ver resultados?",
    a: "El diseño web y branding se entregan en 4-6 semanas. Las estrategias de posicionamiento SEO y leads calificados comienzan a mostrar tracción a partir del mes 2."
  }
];

export function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 max-w-7xl mx-auto w-full pt-12 md:pt-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-4"
          >
            Premium Digital Architecture // {new Date().getFullYear()}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-light tracking-tighter text-primary leading-[0.95] mb-6"
          >
            Diseñamos el futuro<br/>del interiorismo digital.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base leading-relaxed opacity-80 max-w-lg mb-8"
          >
            Transformamos marcas de lujo y estudios de arquitectura en referentes del mercado global mediante estrategias de marketing automatizadas y visualización 3D hiperrealista.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/portfolio" className="border border-primary px-7 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-primary hover:text-surface transition-all">
              Ver Proyectos
            </Link>
            <Link to="/contact" className="bg-primary text-surface px-7 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-primary/90 transition-all">
              Auditoría Gratis
            </Link>
          </motion.div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="bg-surface border border-primary/10 rounded-xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.03)] relative">
            <div className="absolute -top-3 right-6 bg-secondary text-surface px-3 py-1 text-[9px] font-bold uppercase rounded-full tracking-widest">
              Motor Estratégico Activo
            </div>
            <div className="mb-5">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-1">Moodboard Generator</h3>
              <p className="text-[11px] opacity-60">Generando conceptos basados en tendencias...</p>
            </div>
            <div className="flex justify-between py-3 border-b border-primary/10">
              <span className="text-[10px] uppercase opacity-50 tracking-widest">Paleta Detectada</span>
              <span className="text-xs font-semibold text-secondary">Arena & Terracota</span>
            </div>
            <div className="flex justify-between py-3 border-b border-primary/10">
              <span className="text-[10px] uppercase opacity-50 tracking-widest">Estilo Sugerido</span>
              <span className="text-xs font-semibold">Minimalismo Orgánico</span>
            </div>
            <div className="flex justify-between py-3 border-b border-primary/10">
              <span className="text-[10px] uppercase opacity-50 tracking-widest">Lead Score Avanzado</span>
              <span className="text-xs font-semibold">98/100</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="h-16 bg-[#D8C9B5] rounded-sm"></div>
              <div className="h-16 bg-[#E5E1D8] rounded-sm"></div>
              <div className="h-16 bg-[#3C3C3B] rounded-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-b border-primary/10 py-12 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-primary/10 text-center">
          <div className="px-4">
            <h3 className="text-3xl md:text-4xl font-light text-secondary mb-2">124+</h3>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Marcas Posicionadas</p>
          </div>
          <div className="px-4">
            <h3 className="text-3xl md:text-4xl font-light text-secondary mb-2">4.9/5</h3>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Customer Satisfaction</p>
          </div>
          <div className="px-4">
            <h3 className="text-3xl md:text-4xl font-light text-secondary mb-2">$1.2M</h3>
            <p className="text-[10px] uppercase tracking-widest opacity-60">ROAS Promedio Anual</p>
          </div>
          <div className="px-4">
            <h3 className="text-3xl md:text-4xl font-light text-secondary mb-2">24/7</h3>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Soporte Especializado</p>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter">Nuestra <br/><span className="text-secondary font-serif italic">Expertise</span></h2>
          <Link to="/services" className="text-primary font-medium border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">
            Ver todos los servicios
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <BarChart size={32} className="text-secondary" />, title: "Estrategia y Planificación", desc: "Definir estrategia global, organizar cronograma de trabajo y definir objetivos del cliente con acciones creativas y de medios." },
            { icon: <PenTool size={32} className="text-secondary" />, title: "Diseño y Dirección de Arte", desc: "Diseñar y dar forma visual a la marca, crear conceptos de anuncios, desarrollar piezas gráficas y audiovisuales, y redactar textos persuasivos." },
            { icon: <ImageIcon size={32} className="text-secondary" />, title: "Producción y Logística", desc: "Transforma ideas creativas en piezas reales y estratégicas, gestionando toda la logística necesaria." }
          ].map((srv, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-surface border border-primary/10 p-10 rounded-2xl flex flex-col gap-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {srv.icon}
              <h3 className="text-xl font-bold">{srv.title}</h3>
              <p className="text-text-muted leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary-light/10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">Lo que dicen <br/><span className="text-secondary font-serif italic">nuestros clientes</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface p-8 rounded-2xl shadow-sm border border-primary/5"
              >
                <div className="flex gap-1 text-secondary mb-6">
                  {[...Array(t.rating)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="text-text-muted italic mb-6">"{t.content}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-text-muted">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-12 max-w-3xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light tracking-tighter mb-4">Preguntas <span className="text-secondary font-serif italic">Frecuentes</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-primary/10 rounded-2xl overflow-hidden bg-surface">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left font-bold hover:bg-primary/5 transition-colors"
              >
                {faq.q}
                {activeFaq === i ? <ChevronUp size={20} className="text-secondary" /> : <ChevronDown size={20} className="text-primary/50" />}
              </button>
              {activeFaq === i && (
                <div className="px-6 pb-5 text-text-muted">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="pb-12"></div>
    </div>
  );
}

