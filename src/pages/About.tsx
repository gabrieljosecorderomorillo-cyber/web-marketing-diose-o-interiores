import { motion } from 'motion/react';

export function About() {
  return (
    <div className="pt-12 pb-24 px-6 lg:px-12 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light tracking-tighter mb-8"
          >
            Nuestra <span className="text-secondary font-serif italic">Historia</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6 text-lg text-text-muted leading-relaxed"
          >
            <p>
              Lumina nació con un propósito claro: cerrar la brecha entre el diseño arquitectónico excepcional y su presentación al mundo. 
              Entendemos que un espacio hermoso necesita una estrategia de marketing igualmente sofisticada para ser apreciado por el público correcto.
            </p>
            <p>
              Nuestro equipo está formado por estrategas digitales, diseñadores y creadores de contenido que comparten una profunda apreciación por la estética y el diseño de interiores.
            </p>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Equipo Lumina" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <section className="bg-primary text-surface rounded-3xl p-12 md:p-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif text-secondary mb-4 italic">Estética</h3>
            <p className="text-surface/80">Creemos que la belleza importa. Cada campaña que lanzamos está visualmente curada al milímetro.</p>
          </div>
          <div>
            <h3 className="text-2xl font-serif text-secondary mb-4 italic">Precisión</h3>
            <p className="text-surface/80">Decisiones basadas en datos. Combinamos la creatividad con analítica rigurosa para maximizar el ROI.</p>
          </div>
          <div>
            <h3 className="text-2xl font-serif text-secondary mb-4 italic">Exclusividad</h3>
            <p className="text-surface/80">Trabajamos con un número selecto de clientes para garantizar un nivel de atención y personalización sin igual.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
