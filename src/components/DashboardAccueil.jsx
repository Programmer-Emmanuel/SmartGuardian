import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function DashboardAccueil() {
    const [loading, setLoading] = useState(true);

    // Simuler un chargement
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    // Squelettes pour les cartes de statistiques
    const StatSkeleton = () => (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-pulse">
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                    <div className="h-8 bg-gray-300 rounded w-16"></div>
                </div>
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            </div>
            <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="h-2 bg-gray-300 rounded-full w-3/4"></div>
                </div>
            </div>
        </div>
    );

    // Squelette pour les activités
    const ActivitySkeleton = () => (
        <div className="flex items-center space-x-4 p-3 animate-pulse">
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
            <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-20"></div>
            </div>
        </div>
    );

    // Squelette pour les actions rapides
    const ActionSkeleton = () => (
        <div className="w-full flex items-center space-x-4 p-4 rounded-xl border-2 border-gray-200 animate-pulse">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
            <div className="space-y-2 flex-1">
                <div className="h-4 bg-gray-300 rounded w-24"></div>
                <div className="h-3 bg-gray-200 rounded w-32"></div>
            </div>
        </div>
    );

    // Squelette pour le résumé système
    const SystemSummarySkeleton = () => (
        <div className="text-center p-4 animate-pulse">
            <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-3"></div>
            <div className="h-8 bg-gray-300 rounded w-16 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-20 mx-auto"></div>
        </div>
    );

    if (loading) {
        return (
            <div className="space-y-6">
                {/* Header Squelette */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 animate-pulse">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="space-y-3">
                            <div className="h-8 bg-gray-300 rounded w-64"></div>
                            <div className="h-4 bg-gray-200 rounded w-48"></div>
                        </div>
                        <div className="mt-4 lg:mt-0">
                            <div className="flex items-center space-x-4 bg-gray-100 rounded-xl p-3">
                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                                    <div className="h-3 bg-gray-200 rounded w-32"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistiques Squelettes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <StatSkeleton key={index} />
                    ))}
                </div>

                {/* Contenu principal Squelettes */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Section Activités récentes Squelette */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:col-span-2">
                        <div className="flex items-center justify-between mb-6">
                            <div className="h-6 bg-gray-300 rounded w-32"></div>
                            <div className="h-4 bg-gray-200 rounded w-16"></div>
                        </div>
                        <div className="space-y-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <ActivitySkeleton key={index} />
                            ))}
                        </div>
                    </div>

                    {/* Section Actions rapides Squelette */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="h-6 bg-gray-300 rounded w-32 mb-6"></div>
                        <div className="space-y-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <ActionSkeleton key={index} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section Résumé du système Squelette */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="h-6 bg-gray-300 rounded w-40 mb-6"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <SystemSummarySkeleton key={index} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord</h1>
                        <p className="text-gray-600 mt-2">Bienvenue sur votre espace d'administration</p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <div className="flex items-center space-x-4 bg-blue-50 rounded-xl p-3">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Administrateur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistiques rapides */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { 
                        title: "Incidents Actifs", 
                        value: "12", 
                        color: "bg-red-500", 
                        icon: (
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                        ) 
                    },
                    { 
                        title: "Incidents Résolus", 
                        value: "45", 
                        color: "bg-green-500", 
                        icon: (
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        ) 
                    },
                    { 
                        title: "En Attente", 
                        value: "8", 
                        color: "bg-yellow-500", 
                        icon: (
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        ) 
                    },
                    { 
                        title: "Total Incidents", 
                        value: "65", 
                        color: "bg-blue-500", 
                        icon: (
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        ) 
                    }
                ].map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                            </div>
                            <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center`}>
                                {stat.icon}
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                    className={`${stat.color} h-2 rounded-full transition-all duration-500`}
                                    style={{ width: `${(parseInt(stat.value) / 65) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Contenu principal */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Section Activités récentes */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-900">Activités Récentes</h2>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
                            <span>Voir tout</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { 
                                action: "Nouvel incident signalé", 
                                time: "Il y a 5 min", 
                                type: "incident",
                                icon: (
                                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                )
                            },
                            { 
                                action: "Incident #45 résolu", 
                                time: "Il y a 1 heure", 
                                type: "resolved",
                                icon: (
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            },
                            { 
                                action: "Rapport mensuel généré", 
                                time: "Il y a 2 heures", 
                                type: "report",
                                icon: (
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                )
                            },
                            { 
                                action: "Nouvel administrateur ajouté", 
                                time: "Il y a 4 heures", 
                                type: "admin",
                                icon: (
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                )
                            }
                        ].map((activity, index) => (
                            <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                                <div className="flex-shrink-0">
                                    {activity.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">{activity.action}</p>
                                    <p className="text-xs text-gray-500">{activity.time}</p>
                                </div>
                                <svg className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section Actions rapides */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Actions Rapides</h2>
                    <div className="space-y-4">
                        {[
                            { 
                                label: "Gérer les Incidents", 
                                description: "Voir et traiter les incidents",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                ),
                                color: "bg-red-50 text-red-600 hover:bg-red-100 border-red-200",
                                link : '/dashboard/incidents'
                            },
                            { 
                                label: "Voir Historique", 
                                description: "Consulter l'historique complet",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                color: "bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-200",
                                link : '/dashboard/historiques'
                            },
                            { 
                                label: "Statistiques", 
                                description: "Analyser les données",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                ),
                                color: "bg-green-50 text-green-600 hover:bg-green-100 border-green-200",
                                link : '/dashboard/statistiques'
                            },
                            { 
                                label: "Administrateurs", 
                                description: "Gérer les comptes admin",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                ),
                                color: "bg-purple-50 text-purple-600 hover:bg-purple-100 border-purple-200",
                                link : '/dashboard/admins'
                            }
                        ].map((action, index) => (
                            <Link
                                to={action.link}
                                key={index}
                                className={`w-full flex items-center space-x-4 p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${action.color}`}
                            >
                                <div className="flex-shrink-0">
                                    {action.icon}
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-sm">{action.label}</p>
                                    <p className="text-xs opacity-75 mt-1">{action.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section Résumé du système */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Résumé du Système</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">99.8%</p>
                        <p className="text-sm text-gray-600">Disponibilité</p>
                    </div>
                    <div className="text-center p-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">2.3s</p>
                        <p className="text-sm text-gray-600">Temps de réponse moyen</p>
                    </div>
                    <div className="text-center p-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">156</p>
                        <p className="text-sm text-gray-600">Utilisateurs actifs</p>
                    </div>
                </div>
            </div>
        </div>
    );
}