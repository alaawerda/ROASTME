import InteractionDemo from '../components/InteractionDemo';

export default function DesignDemoPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header de la page */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Design System Demo
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre nouveau système d'interactions avec thème sombre avancé, 
            animations fluides et feedback haptique pour une UX exceptionnelle.
          </p>
        </div>

        {/* Démonstration interactive */}
        <InteractionDemo 
          title="Système d'Interactions Modernes"
          description="Explorez les nouveaux patterns de sélection/désélection avec animations fluides, effets de hover avancés et feedback visuel immédiat. Chaque interaction a été conçue pour offrir une expérience utilisateur exceptionnelle."
        />

        {/* Section des avantages */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-interactive text-center p-6 hover-glow-modern">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-3">Performances Optimales</h3>
            <p className="text-gray-400 leading-relaxed">
              Animations GPU-accelerées et transitions CSS optimisées pour une fluidité parfaite.
            </p>
          </div>

          <div className="card-interactive text-center p-6 hover-glow-modern">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-3">Design Cohérent</h3>
            <p className="text-gray-400 leading-relaxed">
              Système de design unifié avec variables CSS et composants réutilisables.
            </p>
          </div>

          <div className="card-interactive text-center p-6 hover-glow-modern">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-2xl">♿</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-3">Accessibilité</h3>
            <p className="text-gray-400 leading-relaxed">
              Support complet du clavier, focus visible et compatibilité lecteurs d'écran.
            </p>
          </div>
        </div>

        {/* Section technique */}
        <div className="mt-16 card-interactive p-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">
            Caractéristiques Techniques
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <h4 className="font-semibold text-blue-400 mb-2">Variables CSS</h4>
              <p className="text-sm text-gray-400">
                Système de couleurs et transitions centralisé avec CSS custom properties.
              </p>
            </div>
            
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <h4 className="font-semibold text-purple-400 mb-2">Animations</h4>
              <p className="text-sm text-gray-400">
                Keyframes CSS optimisées avec courbes de Bézier pour des transitions naturelles.
              </p>
            </div>
            
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <h4 className="font-semibold text-green-400 mb-2">États UI</h4>
              <p className="text-sm text-gray-400">
                Gestion complète des états hover, active, focus et selected.
              </p>
            </div>
            
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <h4 className="font-semibold text-orange-400 mb-2">Responsive</h4>
              <p className="text-sm text-gray-400">
                Adaptation automatique sur tous les appareils avec zones tactiles optimisées.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Design System Demo - Interactions Modernes',
  description: 'Démonstration du nouveau système d\'interactions avec thème sombre, animations fluides et UX exceptionnelle.',
};
