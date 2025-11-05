import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                SmartGuardian
                <span className="block text-blue-400 text-lg">Cloud</span>
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Surveillance Intelligente en Temps Réel. Détection automatique d'incidents par IA pour une sécurité proactive.
              </p>
              <div className="flex flex-wrap gap-1 text-xs text-blue-300 mb-4">
                <span>Bagarres</span> • <span>Accidents</span> • <span>Attroupements</span> • <span>Objets abandonnés</span>
              </div>
            </div>
            
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              <span>Accéder au Dashboard</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", path: "/" },
                { name: "Alertes", path: "/alertes" },
                { name: "Historiques", path: "/historiques" },
                { name: "Statistiques", path: "/statistiques" },
                { name: "Connexion", path: "/connexion" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-blue-400 transition duration-300 flex items-center gap-2"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">À propos</h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Plateforme cloud innovante qui transforme la surveillance vidéo grâce à l'intelligence artificielle pour une sécurité proactive.
            </p>
            <div className="space-y-4">
              {[
                { icon: "🔍", text: "Détection Intelligente par IA" },
                { icon: "⏰", text: "Surveillance 24h/24" },
                { icon: "🚨", text: "Alertes Instantanées <2s" },
                { icon: "☁️", text: "Plateforme Cloud" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Notre Équipe</h3>
            <div className="space-y-4 mb-6">
              {[
                { name: "Emmanuel Bamidélé", role: "Développeur Full-Stack" },
                { name: "Eloge Kohou", role: "Développeur Full-Stack" },
                { name: "Malick Touré", role: "Ingénieur Réseau & Cloud" }
              ].map((member, index) => (
                <div key={index} className="text-sm">
                  <div className="font-medium text-white">{member.name}</div>
                  <div className="text-gray-400 text-xs">{member.role}</div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-700 pt-6">
              <h4 className="text-md font-semibold mb-4 text-white">Liens rapides</h4>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/alertes"
                  className="text-sm text-blue-400 hover:text-blue-300 transition duration-300"
                >
                  Voir les alertes
                </Link>
                <Link
                  to="/historiques"
                  className="text-sm text-blue-400 hover:text-blue-300 transition duration-300"
                >
                  Voir l'historique
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 SmartGuardian Cloud. Tous droits réservés.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-blue-400 transition duration-300">
                Confidentialité
              </Link>
              <Link to="/terms" className="hover:text-blue-400 transition duration-300">
                Conditions d'utilisation
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Système opérationnel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}