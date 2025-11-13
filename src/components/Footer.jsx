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
                { name: "Incidents", path: "/incidents" },
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
                { icon: ()=>(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>), text: "Détection Intelligente par IA" },
                { icon: ()=>(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" /></svg>), text: "Surveillance 24h/24" },
                { icon: ()=>(<svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 432 432"><path fill="currentColor" d="m427 82l-28 33l-98-83l28-32zM125 32l-97 82L0 82L98 0zm99 99v112l85 50l-16 26l-101-60V131h32zm-10.5-86Q293 45 349 101.5t56 136T349 373t-135.5 56t-136-56T21 237.5t56.5-136t136-56.5zm-.5 342q62 0 106-44t44-106t-44-105.5T213 88t-105.5 43.5T64 237t43.5 106T213 387z"/></svg>), text: "Incidents Instantanées <2s" },
                { icon: ()=>(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" /></svg>), text: "Plateforme Cloud" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon()}</span>
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
                  Voir les incidents
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