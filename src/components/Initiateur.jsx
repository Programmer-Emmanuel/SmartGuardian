import React from "react";
import image from "../assets/constants/images";
import { Link } from "react-router-dom";

export function Initiateur() {
    const profil = [
        {
            image: image.emmanuel,
            nom: "Emmanuel Bamidélé",
            role: "Développeur Full-Stack Backend",
            description: "Passionné par l'innovation technologique et la création de solutions performantes. Créativité, rigueur et curiosité pour concevoir des applications modernes et fiables.",
            link: "https://www.linkedin.com/in/emmanuel-bamidele-b63a49274/",
            competences: ["Laravel", "Python", "React", 'PHP', "MySQL", "API REST", 'Docker']
        },
        {
            image: image.logo,
            nom: "Eloge Kohou",
            role: "Développeur Full-Stack Backend",
            description: "Animé par la volonté de créer des solutions performantes et évolutives. Passionné par les défis techniques et l'optimisation des performances applicatives.",
            link: "https://www.linkedin.com/in/monneka-ange-eloge-kohou-143415327/",
            competences: ["Laravel", "Python", 'Fast API', 'PHP', "MySQL", "API REST"]
        },
        {
            image: image.ulrich,
            nom: "Malick Touré",
            role: "Ingénieur Réseau & Cloud",
            description: "Spécialisé dans la conception, le déploiement et la gestion d'infrastructures sécurisées pour une expérience optimisée. Expert en virtualisation et solutions Cloud innovantes.",
            link: "https://www.linkedin.com/in/malick-ulrich-toure-69ab64304/",
            competences: ["Réseaux", "Linux", "Sécurité"]
        }
    ];

    // Fonction pour déterminer la couleur en fonction de la technologie
    const getTechColor = (tech) => {
        const colors = {
            // Backend
            'Laravel': 'bg-red-100 text-red-700 border-red-200',
            'Python': 'bg-blue-100 text-blue-700 border-blue-200',
            'Node.js': 'bg-green-100 text-green-700 border-green-200',
            'Java': 'bg-orange-100 text-orange-700 border-orange-200',
            'Spring Boot': 'bg-green-100 text-green-700 border-green-200',
            'Fast API': 'bg-green-100 text-green-700 border-green-200',
            
            // Frontend
            'React': 'bg-cyan-100 text-cyan-700 border-cyan-200',
            
            // Base de données
            'MySQL': 'bg-orange-100 text-orange-700 border-orange-200',
            'PostgreSQL': 'bg-blue-100 text-blue-700 border-blue-200',
            
            // DevOps & Cloud
            'AWS': 'bg-yellow-100 text-yellow-700 border-yellow-200',
            'Docker': 'bg-blue-100 text-blue-700 border-blue-200',
            'Linux': 'bg-yellow-100 text-yellow-700 border-yellow-200',
            
            // Générique
            'API REST': 'bg-purple-100 text-purple-700 border-purple-200',
            'Microservices': 'bg-indigo-100 text-indigo-700 border-indigo-200',
            'Réseaux': 'bg-gray-100 text-gray-700 border-gray-200',
            'Virtualisation': 'bg-teal-100 text-teal-700 border-teal-200',
            'Sécurité': 'bg-red-100 text-red-700 border-red-200'
        };
        
        return colors[tech] || 'bg-gray-100 text-gray-700 border-gray-200';
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-2">
                {/* Titre Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Notre <span className="text-blue-600">Équipe</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Les experts derrière SmartGuardian Cloud
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {profil.map((person, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 border-gray-200 hover:border-blue-500 hover:scale-105"
                        >
                            <a href={person.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                                <div className="flex items-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md mr-4">
                                        <img 
                                            src={person.image} 
                                            alt={person.nom}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900">{person.nom}</h3>
                                        <p className="text-sm text-blue-600 font-medium">{person.role}</p>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center text-sm text-gray-500 mb-2">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            <span>Profil Professionnel</span>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {person.description}
                                        </p>
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex items-center text-sm text-gray-500 mb-2">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            <span>Expertise Technique</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {person.competences.map((tech, techIndex) => (
                                                <span 
                                                    key={techIndex}
                                                    className={`px-2 py-1 text-xs rounded-full border ${getTechColor(tech)}`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <span className="text-xs text-gray-500">Membre fondateur</span>
                                        <div className="flex items-center text-blue-600 text-sm font-medium">
                                            <span>Voir profil LinkedIn</span>
                                            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}