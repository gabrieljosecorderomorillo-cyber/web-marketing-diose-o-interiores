import { motion } from 'motion/react';
import { useState } from 'react';
import { Users, LayoutDashboard, Calendar, Settings, Check } from 'lucide-react';

export function Admin() {
  const [activeTab, setActiveTab] = useState('crm');
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="pt-12 pb-24 px-6 lg:px-12 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 min-h-[70vh] relative">
      {toastMessage && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-primary text-surface px-6 py-3 rounded-full flex items-center gap-3 shadow-xl z-50 text-sm font-medium"
        >
          <Check size={18} className="text-secondary" />
          {toastMessage}
        </motion.div>
      )}

      {/* Sidebar */}
      <div className="w-full md:w-64 flex flex-col gap-2">
        <div className="mb-8">
          <h1 className="text-2xl font-bold uppercase tracking-widest">Panel</h1>
          <p className="text-xs text-text-muted">Administración Vanguardia</p>
        </div>
        
        <button onClick={() => setActiveTab('crm')} className={`flex items-center gap-3 p-3 rounded-lg text-sm transition-colors ${activeTab === 'crm' ? 'bg-primary text-surface' : 'hover:bg-primary/5'}`}>
          <Users size={18} /> CRM / Leads
        </button>
        <button onClick={() => setActiveTab('portfolio')} className={`flex items-center gap-3 p-3 rounded-lg text-sm transition-colors ${activeTab === 'portfolio' ? 'bg-primary text-surface' : 'hover:bg-primary/5'}`}>
          <LayoutDashboard size={18} /> Portafolio
        </button>
        <button onClick={() => setActiveTab('calendar')} className={`flex items-center gap-3 p-3 rounded-lg text-sm transition-colors ${activeTab === 'calendar' ? 'bg-primary text-surface' : 'hover:bg-primary/5'}`}>
          <Calendar size={18} /> Citas
        </button>
        <button onClick={() => setActiveTab('settings')} className={`flex items-center gap-3 p-3 rounded-lg text-sm transition-colors ${activeTab === 'settings' ? 'bg-primary text-surface' : 'hover:bg-primary/5'}`}>
          <Settings size={18} /> Ajustes
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 bg-surface border border-primary/10 rounded-2xl p-6 md:p-8">
        {activeTab === 'crm' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-xl font-bold mb-6">Gestión de Clientes (CRM)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-text-muted uppercase bg-background border-b border-primary/10">
                  <tr>
                    <th className="px-4 py-3">Nombre</th>
                    <th className="px-4 py-3">Empresa</th>
                    <th className="px-4 py-3">Estado</th>
                    <th className="px-4 py-3">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary/5 hover:bg-primary/5 transition-colors">
                    <td className="px-4 py-3 font-medium">Elena Rostova</td>
                    <td className="px-4 py-3">Studio ER</td>
                    <td className="px-4 py-3"><span className="bg-secondary/20 text-secondary px-2 py-1 rounded text-xs font-medium">Propuesta Enviada</span></td>
                    <td className="px-4 py-3"><button onClick={() => showToast('Abriendo perfil de Elena Rostova...')} className="text-primary hover:text-secondary hover:underline text-xs transition-colors">Ver</button></td>
                  </tr>
                  <tr className="border-b border-primary/5 hover:bg-primary/5 transition-colors">
                    <td className="px-4 py-3 font-medium">Marco Rossi</td>
                    <td className="px-4 py-3">Rossi Arq</td>
                    <td className="px-4 py-3"><span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">Nuevo Lead</span></td>
                    <td className="px-4 py-3"><button onClick={() => showToast('Abriendo perfil de Marco Rossi...')} className="text-primary hover:text-secondary hover:underline text-xs transition-colors">Ver</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'portfolio' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-xl font-bold mb-6">Gestionar Portafolio</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-text-muted">Administra los proyectos visibles en la web.</p>
              <button 
                onClick={() => showToast('Abriendo creador de proyectos...')}
                className="bg-primary text-surface px-4 py-2 text-xs rounded-sm hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
              >
                Añadir Proyecto
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-primary/10 p-4 rounded-xl flex gap-4 items-center group cursor-pointer hover:border-secondary transition-colors" onClick={() => showToast('Editando Casa Minimalista...')}>
                <div className="w-16 h-16 bg-background rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform"></div>
                <div>
                  <h4 className="font-bold text-sm">Casa Minimalista</h4>
                  <p className="text-xs text-text-muted">Diseño de Interiores</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'calendar' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-xl font-bold mb-6">Calendario de Reservas</h2>
            <p className="text-sm text-text-muted mb-4">Próximas consultorías estratégicas agendadas.</p>
            <div className="bg-background border border-primary/10 p-6 rounded-xl flex items-center justify-center h-48">
              <p className="text-sm opacity-50">Sincronización con Google Calendar activa. No hay citas pendientes.</p>
            </div>
          </motion.div>
        )}

        {activeTab === 'settings' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-xl font-bold mb-6">Ajustes Generales</h2>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted block mb-1">Nombre de la Agencia</label>
                <input type="text" defaultValue="VANGUARDIA" className="w-full bg-background border border-primary/10 rounded-sm p-3 text-sm outline-none focus:border-secondary transition-colors" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted block mb-1">Email de Contacto</label>
                <input type="email" defaultValue="vanguardia@gmail.com" className="w-full bg-background border border-primary/10 rounded-sm p-3 text-sm outline-none focus:border-secondary transition-colors" />
              </div>
              <button 
                onClick={() => showToast('Configuración guardada correctamente.')}
                className="bg-secondary text-surface px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95 mt-4"
              >
                Guardar Cambios
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
