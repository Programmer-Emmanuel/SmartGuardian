import { Link } from "react-router-dom";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";

export function Accueil(){
    return(
        <>
            <Nav/>
            <Header/>
            <div className="text-center my-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    À propos de <span className="text-blue-600">SmartGuardian</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Découvrez comment notre plateforme révolutionne la surveillance grâce à l'intelligence artificielle et le cloud
                </p>
            </div>
            <About/>
            <div className="flex gap-4 justify-center items-center flex-wrap py-8">
                <Link 
                    to="" 
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 border border-blue-600 font-bold rounded-full text-white hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-blue-200"
                >
                    <span className="relative z-10">Voir les alertes</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link 
                    to="" 
                    className="group relative px-8 py-4 bg-white border-2 border-blue-500 font-bold rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                    <span className="relative z-10">Voir l'historique</span>
                    <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </Link>
            </div>
        </>
    )
}