import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Casa Minimalista en la Colina',
    category: 'Diseño de Interiores',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Rebranding Estudio Arq',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Villa Mediterránea',
    category: 'Renderizado 3D',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Loft Urbano',
    category: 'Fotografía',
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2070&auto=format&fit=crop',
  }
];

export function Portfolio() {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Diseño de Interiores', 'Branding', 'Renderizado 3D', 'Fotografía'];

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-12 pb-24 px-6 lg:px-12 max-w-7xl mx-auto w-full">
      <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light tracking-tighter mb-4"
          >
            Casos de <span className="text-secondary font-serif italic">Éxito</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted max-w-xl"
          >
            Explora cómo hemos ayudado a estudios de diseño y arquitectos a elevar su posicionamiento en el mercado.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                  ? 'bg-primary text-surface' 
                  : 'bg-surface border border-primary/20 text-primary hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-surface p-4 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ArrowUpRight className="text-primary" size={24} />
                </div>
              </div>
            </div>
            <div>
              <p className="text-secondary text-sm font-medium tracking-wider uppercase mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
