import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';
import React, { useState } from 'react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="pt-12 pb-24 px-6 lg:px-12 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light tracking-tighter mb-6"
          >
            Iniciemos una <br/>
            <span className="text-secondary font-serif italic">Conversación</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted mb-12"
          >
            Estamos listos para llevar la presencia digital de tu estudio al siguiente nivel. Contáctanos para agendar una consultoría estratégica.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-secondary-light/20 p-3 rounded-full text-secondary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-text-muted">vanguardia@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-secondary-light/20 p-3 rounded-full text-secondary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Teléfono</h4>
                <p className="text-text-muted">+58 412-5500144</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-surface border border-primary/10 rounded-3xl p-8 md:p-12 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-background border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">Empresa/Estudio</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full bg-background border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email profesional</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-background border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">¿Cómo podemos ayudarte?</label>
              <textarea 
                id="message" 
                rows={4}
                required
                className="w-full bg-background border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors resize-none"
              ></textarea>
            </div>

            <div className="border-t border-primary/10 pt-6 mt-6">
              <h3 className="font-bold mb-4">Agendar Cita (Opcional)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium">Fecha Preferida</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full bg-background border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium">Hora Preferida</label>
                  <input 
                    type="time" 
                    id="time" 
                    className="w-full bg-background border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={status === 'submitting' || status === 'success'}
              className="w-full bg-primary text-surface rounded-xl py-4 font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 disabled:hover:scale-100 disabled:opacity-70"
            >
              {status === 'idle' && 'Enviar Mensaje'}
              {status === 'submitting' && 'Enviando...'}
              {status === 'success' && '¡Mensaje Enviado!'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
