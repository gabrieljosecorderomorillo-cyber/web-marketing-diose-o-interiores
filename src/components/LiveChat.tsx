import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<{text: string, sender: 'user'|'agent'}[]>([
    { text: '¡Hola! Soy el asistente con IA de Vanguardia. ¿En qué puedo ayudarte hoy sobre nuestros servicios de marketing y herramientas de diseño?', sender: 'agent' }
  ]);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const userMsg = input.trim();
    const updatedMessages = [...messages, { text: userMsg, sender: 'user' as const }];
    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg,
          history: updatedMessages
        })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { text: data.reply || 'Gracias por tu mensaje. ¿Deseas agendar una consultoría?', sender: 'agent' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { text: 'Gracias por escribirnos. Un especialista de Vanguardia responderá a tu mensaje a la brevedad. Puedes también agendar una cita directa desde nuestra web.', sender: 'agent' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-20 right-6 md:right-12 w-12 h-12 bg-primary text-surface rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-90 transition-all z-50 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Abrir chat de soporte IA"
      >
        <MessageSquare size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-6 md:right-12 w-80 md:w-96 bg-surface border border-primary/10 shadow-2xl rounded-2xl overflow-hidden z-50 flex flex-col"
          >
            <div className="bg-primary text-surface p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-secondary/20 p-1.5 rounded-lg text-secondary">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                    Soporte IA Vanguardia
                    <Sparkles size={12} className="text-secondary" />
                  </h3>
                  <p className="text-[10px] opacity-70">Respuesta inmediata</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity p-1">
                <X size={18} />
              </button>
            </div>
            
            <div className="h-72 p-4 overflow-y-auto flex flex-col gap-3 bg-background/50">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`max-w-[85%] p-3 text-xs leading-relaxed rounded-xl ${
                    msg.sender === 'user' 
                      ? 'bg-secondary text-surface self-end rounded-br-none shadow-sm' 
                      : 'bg-surface border border-primary/10 text-primary self-start rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="bg-surface border border-primary/10 text-primary self-start rounded-xl rounded-bl-none p-3 text-xs flex items-center gap-2 shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                  <span className="text-[10px] text-text-muted">Generando respuesta...</span>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            <div className="p-3 border-t border-primary/10 bg-surface flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu consulta..."
                disabled={isTyping}
                className="flex-1 bg-background border border-primary/10 rounded-lg px-3 py-2 text-xs outline-none focus:border-secondary transition-colors disabled:opacity-50"
              />
              <button 
                onClick={handleSend} 
                disabled={!input.trim() || isTyping}
                className="bg-primary text-surface p-2 rounded-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
