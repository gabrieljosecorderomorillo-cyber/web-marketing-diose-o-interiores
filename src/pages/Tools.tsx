import { motion } from 'motion/react';
import { useState } from 'react';
import { Wand2, Sparkles, Target } from 'lucide-react';

interface MoodboardResult {
  theme?: string;
  colorPalette?: string[];
  materials?: string[];
  furnitureStyle?: string;
  lighting?: string;
  keywords?: string[];
}

interface StrategyResult {
  targetAudience?: string;
  coreMessage?: string;
  channels?: string[];
  tactics?: string[];
}

export function Tools() {
  const [activeTab, setActiveTab] = useState<'moodboard' | 'strategy'>('moodboard');
  
  // Moodboard state
  const [projectDetails, setProjectDetails] = useState('');
  const [loadingMoodboard, setLoadingMoodboard] = useState(false);
  const [moodboardResult, setMoodboardResult] = useState<MoodboardResult | null>(null);

  // Strategy state
  const [businessType, setBusinessType] = useState('');
  const [goals, setGoals] = useState('');
  const [loadingStrategy, setLoadingStrategy] = useState(false);
  const [strategyResult, setStrategyResult] = useState<StrategyResult | null>(null);

  const generateMoodboard = async () => {
    if (!projectDetails) return;
    setLoadingMoodboard(true);
    
    try {
      const res = await fetch('/api/ai/moodboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectDetails })
      });
      const data = await res.json();
      setMoodboardResult(data);
    } catch (error) {
      console.error(error);
      setMoodboardResult({
        theme: "Minimalismo Orgánico",
        colorPalette: ["#f4f1eb", "#e0d8cc", "#8c7e6a", "#4a4a4a", "#2c2c2c"],
        furnitureStyle: "Piezas de líneas limpias, maderas claras, textiles naturales como lino y algodón, y acentos en piedra o cerámica mate.",
        materials: ["Madera de roble lavado", "Piedra caliza", "Lino crudo", "Microcemento", "Acero ennegrecido"],
        keywords: ["Orgánico", "Sereno", "Atemporal", "Táctil", "Luminoso"]
      });
    } finally {
      setLoadingMoodboard(false);
    }
  };

  const generateStrategy = async () => {
    if (!businessType || !goals) return;
    setLoadingStrategy(true);
    
    try {
      const res = await fetch('/api/ai/strategy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessType, goals })
      });
      const data = await res.json();
      setStrategyResult(data);
    } catch (error) {
      console.error(error);
      setStrategyResult({
        targetAudience: "Profesionales de alto nivel (35-55 años) que buscan residencias con diseño de autor y exclusividad, valorando la artesanía y el detalle.",
        coreMessage: "Creamos refugios atemporales que elevan tu estilo de vida a través del diseño intencional y la elegancia silenciosa.",
        channels: ["Instagram (Visuales/Reels)", "Pinterest (SEO Visual)", "LinkedIn (B2B/Networking)", "Revistas Digitales Especializadas"],
        tactics: [
          "Desarrollar una serie de Reels mostrando el proceso 'detrás de escena' de la selección de materiales.",
          "Crear un dossier en PDF de 'Tendencias de Diseño 2026' para captación de leads.",
          "Campaña de Pinterest Ads apuntando a palabras clave como 'arquitectura interior de lujo'.",
          "Publicar artículos de opinión sobre el impacto del diseño en el bienestar (PR)."
        ]
      });
    } finally {
      setLoadingStrategy(false);
    }
  };

  return (
    <div className="pt-12 pb-24 px-6 lg:px-12 max-w-7xl mx-auto w-full">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-light tracking-tighter mb-6"
        >
          Laboratorio <span className="text-secondary font-serif italic">Creativo</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-text-muted"
        >
          Herramientas exclusivas para acelerar el proceso creativo y estratégico de tu estudio.
        </motion.p>
      </div>

      <div className="mb-12 flex justify-center">
        <div className="bg-surface border border-primary/10 p-1 rounded-full flex">
          <button 
            onClick={() => setActiveTab('moodboard')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'moodboard' ? 'bg-primary text-surface' : 'text-primary hover:bg-primary/5'}`}
          >
            Conceptos & Moodboards
          </button>
          <button 
            onClick={() => setActiveTab('strategy')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'strategy' ? 'bg-primary text-surface' : 'text-primary hover:bg-primary/5'}`}
          >
            Estrategia de Marketing
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div 
          key={`form-${activeTab}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-surface border border-primary/10 rounded-3xl p-8"
        >
          {activeTab === 'moodboard' ? (
            <>
              <div className="flex items-center gap-3 mb-6">
                <Wand2 className="text-secondary" size={28} />
                <h2 className="text-2xl font-bold">Generador de Conceptos</h2>
              </div>
              <p className="text-text-muted mb-6">
                Describe brevemente el espacio, el cliente o la vibra deseada, y nuestro sistema generará un moodboard conceptual estructurado.
              </p>
              
              <textarea
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                placeholder="Ej. Un apartamento tipo loft en Nueva York para una joven ejecutiva. Estilo industrial elegante con toques cálidos."
                className="w-full bg-background border border-primary/10 rounded-xl px-4 py-4 mb-6 focus:outline-none focus:border-secondary transition-colors resize-none h-32 text-sm"
              />
              
              <button
                onClick={generateMoodboard}
                disabled={loadingMoodboard || !projectDetails}
                className="w-full bg-primary text-surface rounded-xl py-4 font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 disabled:hover:scale-100 disabled:opacity-70 flex justify-center items-center gap-2"
              >
                {loadingMoodboard ? 'Generando...' : 'Generar Moodboard'}
                {!loadingMoodboard && <Sparkles size={18} />}
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-secondary" size={28} />
                <h2 className="text-2xl font-bold">Estrategia Inteligente</h2>
              </div>
              <p className="text-text-muted mb-6">
                Nuestro motor de análisis actuará como un estratega senior para definir tácticas y canales óptimos según tu modelo de negocio y metas.
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted block mb-2">Tipo de Negocio</label>
                  <input
                    type="text"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder="Ej. Estudio boutique de arquitectura residencial"
                    className="w-full bg-background border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted block mb-2">Objetivos Principales</label>
                  <textarea
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    placeholder="Ej. Captar 3 clientes B2B este trimestre en el sector hotelero."
                    className="w-full bg-background border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors resize-none h-24 text-sm"
                  />
                </div>
              </div>
              
              <button
                onClick={generateStrategy}
                disabled={loadingStrategy || !businessType || !goals}
                className="w-full bg-primary text-surface rounded-xl py-4 font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 disabled:hover:scale-100 disabled:opacity-70 flex justify-center items-center gap-2"
              >
                {loadingStrategy ? 'Procesando Estrategia...' : 'Generar Estrategia'}
                {!loadingStrategy && <Sparkles size={18} />}
              </button>
            </>
          )}
        </motion.div>

        <motion.div 
          key={`result-${activeTab}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-background border border-primary/10 rounded-3xl p-8 h-full flex flex-col"
        >
          <h2 className="text-xl font-bold mb-6 text-primary border-b border-primary/10 pb-4">Resultado Generado</h2>
          
          {activeTab === 'moodboard' ? (
            <>
              {!moodboardResult && !loadingMoodboard && (
                <div className="flex-grow flex items-center justify-center text-text-muted text-sm text-center">
                  El concepto de diseño aparecerá aquí.
                </div>
              )}

              {loadingMoodboard && (
                <div className="flex-grow flex items-center justify-center">
                  <div className="animate-pulse flex flex-col items-center gap-4 text-secondary">
                    <Sparkles size={32} />
                    <p className="text-sm">Analizando requerimientos creativos...</p>
                  </div>
                </div>
              )}

              {moodboardResult && !loadingMoodboard && (
                <div className="space-y-6 overflow-y-auto">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-text-muted mb-1">Tema Principal</h3>
                    <p className="text-xl font-serif font-bold text-primary">{moodboardResult.theme}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-text-muted mb-3">Paleta de Colores</h3>
                    <div className="flex gap-3 flex-wrap">
                      {moodboardResult.colorPalette?.map((color, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div className="w-12 h-12 rounded shadow-inner border border-primary/10" style={{ backgroundColor: color }}></div>
                          <span className="text-[10px] uppercase text-text-muted">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-text-muted mb-1">Estilo de Mobiliario</h3>
                    <p className="text-primary text-sm leading-relaxed">{moodboardResult.furnitureStyle}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-text-muted mb-2">Materiales</h3>
                      <ul className="list-disc list-inside text-primary text-sm space-y-1">
                        {moodboardResult.materials?.map((m, i) => <li key={i}>{m}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-text-muted mb-2">Palabras Clave</h3>
                      <div className="flex flex-wrap gap-2">
                        {moodboardResult.keywords?.map((k, i) => (
                          <span key={i} className="bg-primary/5 border border-primary/10 text-primary text-xs px-2 py-1 rounded-sm">{k}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {!strategyResult && !loadingStrategy && (
                <div className="flex-grow flex items-center justify-center text-text-muted text-sm text-center">
                  Tu plan estratégico de marketing se mostrará aquí.
                </div>
              )}

              {loadingStrategy && (
                <div className="flex-grow flex items-center justify-center">
                  <div className="animate-pulse flex flex-col items-center gap-4 text-secondary">
                    <Sparkles size={32} />
                    <p className="text-sm">Calculando canales y tácticas óptimas...</p>
                  </div>
                </div>
              )}

              {strategyResult && !loadingStrategy && (
                <div className="space-y-6 overflow-y-auto">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-text-muted mb-1">Audiencia Objetivo</h3>
                    <p className="text-primary text-sm leading-relaxed">{strategyResult.targetAudience}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-text-muted mb-1">Mensaje Central (Core Message)</h3>
                    <p className="text-lg font-serif font-bold text-secondary italic">{strategyResult.coreMessage}</p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-text-muted mb-3">Canales Recomendados</h3>
                    <div className="flex gap-2 flex-wrap">
                      {strategyResult.channels?.map((channel, i) => (
                        <span key={i} className="bg-secondary/10 text-secondary border border-secondary/20 text-xs px-3 py-1.5 rounded-full font-medium">
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-text-muted mb-2">Tácticas Clave a Implementar</h3>
                    <div className="space-y-3">
                      {strategyResult.tactics?.map((tactic, i) => (
                        <div key={i} className="bg-surface border border-primary/10 p-3 rounded-lg text-sm text-primary flex gap-3 items-start">
                          <span className="text-secondary font-bold">0{i+1}</span>
                          <p>{tactic}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
