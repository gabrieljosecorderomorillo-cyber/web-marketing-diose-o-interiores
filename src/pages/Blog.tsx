import { motion } from 'motion/react';

export function Blog() {
  return (
    <div className="pt-12 pb-24 px-6 lg:px-12 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-light tracking-tighter mb-4"
        >
          Últimas <span className="text-secondary font-serif italic">Tendencias</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-text-muted"
        >
          Perspectivas sobre diseño, marketing y arquitectura.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "El Minimalismo Cálido en 2024", date: "Oct 12", img: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070&auto=format&fit=crop" },
          { title: "SEO Local para Arquitectos", date: "Oct 05", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
          { title: "Cómo Vender Proyectos con Renders Inmersivos", date: "Sep 28", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" }
        ].map((post, i) => (
          <motion.article 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <p className="text-sm text-secondary font-medium tracking-wider mb-2">{post.date}</p>
            <h2 className="text-xl font-bold group-hover:text-secondary transition-colors">{post.title}</h2>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
