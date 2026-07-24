import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { LiveChat } from './LiveChat';

export function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Servicios', path: '/services' },
    { name: 'Portafolio', path: '/portfolio' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contact' },
    { name: 'Herramientas', path: '/tools' },
    { name: 'Admin', path: '/admin' },
  ];

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success'>('idle');

  const handleSubscribe = () => {
    if (!newsletterEmail) return;
    setNewsletterStatus('success');
    setTimeout(() => {
      setNewsletterStatus('idle');
      setNewsletterEmail('');
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-primary/10 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md h-[72px] flex items-center' : 'bg-background/80 backdrop-blur-md h-[72px] flex items-center'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex justify-between items-center">
          <Link to="/" className="text-lg font-bold tracking-[1px] text-primary uppercase hover:opacity-80 transition-opacity">
            VANGUARDIA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[12px] uppercase tracking-[0.05em] transition-colors hover:text-secondary ${
                  location.pathname === link.path ? 'text-secondary' : 'text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-surface px-6 py-2.5 rounded-sm text-[11px] uppercase tracking-[1px] hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              Agendar Cita
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-surface pt-24 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-2xl font-semibold text-primary"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-background text-primary py-16 border-t border-primary/10 mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-lg font-bold tracking-[1px] uppercase text-primary mb-6 inline-block">
              VANGUARDIA
            </Link>
            <p className="max-w-sm mb-6 text-sm opacity-80 leading-relaxed">
              Agencia de marketing digital especializada en potenciar marcas de interiorismo y arquitectura a nivel global.
            </p>
          </div>
          <div className="col-span-1">
            <h4 className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="flex flex-col gap-3 text-sm opacity-80">
              <li><Link to="/services" className="hover:text-secondary transition-colors">Servicios</Link></li>
              <li><Link to="/portfolio" className="hover:text-secondary transition-colors">Portafolio</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">Nosotros</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-6">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm opacity-80">
              <li><Link to="/faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
              <li><Link to="/policies" className="hover:text-secondary transition-colors">Políticas y Términos</Link></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-6">Newsletter</h4>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Tu correo..." 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="bg-surface border border-primary/10 px-4 py-2 text-sm w-full outline-none focus:border-secondary transition-colors rounded-sm" 
              />
              <button 
                onClick={handleSubscribe}
                className="bg-primary text-surface px-4 py-2 text-[10px] uppercase tracking-widest font-bold rounded-sm hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
              >
                {newsletterStatus === 'success' ? '¡Suscrito!' : 'Suscribir'}
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest opacity-60">
          <p>&copy; {new Date().getFullYear()} Vanguardia Agency.</p>
        </div>
        
        <LiveChat />

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 md:right-12 w-10 h-10 border border-primary flex items-center justify-center bg-background text-primary hover:bg-primary hover:text-surface transition-all hover:scale-110 active:scale-90 z-50"
          aria-label="Volver arriba"
        >
          <ArrowUp size={16} />
        </button>
      </footer>
    </div>
  );
}
