import { Link } from "react-router-dom";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Initiateur } from "../components/Initiateur";
import { Footer } from "../components/Footer";

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
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 border-2 border-blue-500 font-bold rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-blue-200 hover:text-blue-600 hover:from-white"
                >
                    <div className="flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 432 432">
                            <path fill="currentColor" d="m427 82l-28 33l-98-83l28-32zM125 32l-97 82L0 82L98 0zm99 99v112l85 50l-16 26l-101-60V131h32zm-10.5-86Q293 45 349 101.5t56 136T349 373t-135.5 56t-136-56T21 237.5t56.5-136t136-56.5zm-.5 342q62 0 106-44t44-106t-44-105.5T213 88t-105.5 43.5T64 237t43.5 106T213 387z"/>
                        </svg>
                        <span className="relative z-10">Voir les alertes</span>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link 
                    to="" 
                    className="group relative px-8 py-4 bg-white border-2 border-blue-500 font-bold rounded-full text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                    <div className="flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                        <span className="relative z-10">Voir l'historique</span>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </Link>
            </div>

            <div className="text-center my-14">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Initiateurs de <span className="text-blue-600">SmartGuardian</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Découvrez les personnes ayant travaillé sur le projet SmartGuardian Cloud
                </p>
            </div>
            <Initiateur/>
            <Footer/>
        </>
    )
}