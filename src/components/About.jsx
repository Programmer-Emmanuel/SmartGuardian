import React from "react";

export function About() {
  const features = [
    {
      title: "Détection Intelligente",
      description: "Notre IA analyse en temps réel les flux vidéo pour identifier automatiquement les comportements anormaux et situations à risque.",
      icon: ()=>(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      )
    },
    {
      title: "Surveillance 24h/24",
      description: "Fonctionnement continu sans interruption, garantissant une sécurité permanente dans vos espaces surveillés.",
      icon: ()=>(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
        </svg>
      )
    },
    {
      title: "Alertes Instantanées",
      description: "Notifications immédiates dès qu'un incident est détecté, avec moins de 2 secondes de latence.",
      icon: ()=>(
        <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 432 432">
          <path fill="currentColor" d="m427 82l-28 33l-98-83l28-32zM125 32l-97 82L0 82L98 0zm99 99v112l85 50l-16 26l-101-60V131h32zm-10.5-86Q293 45 349 101.5t56 136T349 373t-135.5 56t-136-56T21 237.5t56.5-136t136-56.5zm-.5 342q62 0 106-44t44-106t-44-105.5T213 88t-105.5 43.5T64 237t43.5 106T213 387z"/>
        </svg>
      )
    },
    {
      title: "Plateforme Cloud",
      description: "Solution hébergée dans le cloud pour une accessibilité totale et des mises à jour automatiques.",
      icon: ()=>(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
        </svg>
      )
    },
    {
      title: "Interface Intuitive",
      description: "Dashboard web simple et clair pour visualiser les alertes, statistiques et historiques des incidents.",
      icon: ()=>(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      )
    },
    {
      title: "Multi-Incidents",
      description: "Détection de bagarres, accidents, attroupements suspects, objets abandonnés et bien plus encore.",
      icon: ()=>(
        <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 14 14" fill="#ffffffff"><g fill="none" stroke="#ffffffff" stroke-linecap="round" stroke-linejoin="round"><path d="M13.48 7.516a6.5 6.5 0 1 1-6.93-7"/><path d="M9.79 8.09A3 3 0 1 1 5.9 4.21M7 7l2.5-2.5m2 .5l-2-.5l-.5-2l2-2l.5 2l2 .5z"/></g></svg>
      )
    }
  ];

  return (
    <section className="py-2 bg-white">
      <div className="container mx-auto px-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-gradient-to-r from-white to-blue-50 rounded-2xl border border-blue-100 hover:border-blue-200 transition-all duration-500 hover:shadow-xl hover:scale-102 cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-500">
                    {feature.icon()}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="w-10 h-1 bg-blue-500 rounded-full mt-4 transform group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}