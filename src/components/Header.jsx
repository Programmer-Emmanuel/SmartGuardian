import React from "react";
import image from "../assets/constants/images";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="relative w-full h-screen min-h-[700px] max-h-[95vh] overflow-hidden flex items-center justify-center">
      <video
        src={image.header}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>

      <div className="relative text-center text-white z-10 px-6 max-w-6xl mx-auto">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-100">
              Surveillance Intelligente en Temps Réel
            </span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          SmartGuardian
          <span className="block text-3xl md:text-4xl lg:text-5xl text-blue-300 mt-2">
            Cloud
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">
          Détection automatique d'incidents par IA
          <span className="block text-lg md:text-xl text-blue-200 mt-3">
            Bagarres • Accidents • Attroupements • Objets abandonnés
          </span>
        </p>

        <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Une plateforme cloud innovante qui transforme la surveillance vidéo 
          grâce à l'intelligence artificielle pour une sécurité proactive et efficace.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to=""
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <span>Accéder au Dashboard</span>
            
          </Link>
        </div>
      </div>
    </header>
  );
}