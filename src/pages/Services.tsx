import { motion } from 'motion/react';
import { Camera, Layers, MonitorSmartphone, Megaphone, Video, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Megaphone className="w-8 h-8 text-secondary" />,
    title: 'Estrategia y Planificación',
    description: 'Definimos estrategias globales, organizamos cronogramas de trabajo y definimos los objetivos del cliente con acciones creativas y de medios.'
  },
  {
    icon: <PenTool className="w-8 h-8 text-secondary" />,
    title: 'Diseño y Dirección de Arte',
    description: 'Diseñamos y damos forma visual a la marca. Creamos conceptos de anuncios, desarrollamos piezas gráficas y audiovisuales, y redactamos textos persuasivos.'
  },
  {
    icon: <Layers className="w-8 h-8 text-secondary" />,
    title: 'Producción y Logística',
    description: 'Transformamos ideas creativas en piezas reales y estratégicas, gestionando toda la logística necesaria para el éxito del proyecto.'
  },
  {
    icon: <Camera className="w-8 h-8 text-secondary" />,
    title: 'Fotografía de Interiores',
    description: 'Capturamos la esencia y el detalle de cada espacio. Sesiones fotográficas profesionales con iluminación arquitectónica especializada.'
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-secondary" />,
    title: 'Diseño Web Premium',
    description: 'Desarrollamos experiencias digitales a medida. Sitios web rápidos, responsivos y con un diseño UI/UX centrado en la conversión.'
  },
  {
    icon: <Video className="w-8 h-8 text-secondary" />,
    title: 'Producción Audiovisual',
    description: 'Video tours, reels para redes sociales y documentales de procesos constructivos que cuentan la historia detrás de cada diseño.'
  }
];

export function Services() {
  return (
    <div className="pt-12 pb-24 px-6 lg:px-12 max-w-7xl mx-auto w-full">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-light tracking-tighter mb-6"
        >
          Nuestros <span className="text-secondary font-serif italic">Servicios</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-text-muted"
        >
          Soluciones integrales de marketing y creatividad diseñadas exclusivamente para el sector del interiorismo y la arquitectura.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface p-10 rounded-2xl border border-primary/5 hover:border-secondary/30 hover:shadow-lg transition-all group"
          >
            <div className="bg-secondary-light/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-text-muted leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
