import { motion } from 'motion/react';

export function Policies() {
  return (
    <div className="pt-12 pb-24 px-6 lg:px-12 max-w-4xl mx-auto w-full">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-light tracking-tighter mb-8"
      >
        Políticas y <span className="text-secondary font-serif italic">Términos</span>
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-text-muted space-y-8 leading-relaxed"
      >
        <section>
          <h2 className="text-xl font-bold text-primary mb-3">1. Términos de Servicio</h2>
          <p>Al acceder y utilizar el sitio web de Vanguardia, aceptas cumplir con estos términos de servicio, todas las leyes y regulaciones aplicables, y aceptas que eres responsable del cumplimiento de las leyes locales aplicables.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-bold text-primary mb-3">2. Política de Privacidad</h2>
          <p>Tu privacidad es importante para nosotros. Es política de Vanguardia respetar tu privacidad con respecto a cualquier información que podamos recopilar sobre ti en nuestro sitio web. Solo solicitamos información personal cuando realmente la necesitamos para brindarte un servicio (como en nuestro formulario de contacto o CRM básico).</p>
        </section>
        
        <section>
          <h2 className="text-xl font-bold text-primary mb-3">3. Uso de Herramientas de Estrategia</h2>
          <p>Nuestras herramientas generativas están diseñadas para asistir en la creación de conceptos (Moodboards y Estrategias). El uso de estas herramientas está sujeto a límites de tasa (rate limiting) para asegurar la disponibilidad del servicio. Los resultados generados son sugerencias y no constituyen asesoramiento profesional infalible.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary mb-3">4. Seguridad y Retención</h2>
          <p>Implementamos sistemas de seguridad robustos, incluyendo encriptación y sanitización de inputs para proteger los datos de nuestros clientes. Mantenemos la información únicamente el tiempo necesario para proveer el servicio solicitado.</p>
        </section>
      </motion.div>
    </div>
  );
}
