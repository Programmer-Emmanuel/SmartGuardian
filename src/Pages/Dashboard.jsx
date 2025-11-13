import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ReactSecureStorage from 'react-secure-storage';

export function Dashboard({ contenu }) {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleLogout = () => {
        ReactSecureStorage.removeItem('token');
        navigate('/connexion');
        window.location.reload();        
    };
    
    useEffect(() => {
        try {
            const token = ReactSecureStorage.getItem('token');
            if(!token) {
                console.log('Token non trouvé');
                navigate('/connexion');
            }
        } catch(error) {
            console.error(error);
        }
    }, []);

    const location = useLocation();

    // Fonction pour déterminer si un lien est actif
    const isActive = (path) => location.pathname === path 
        ? 'bg-blue-500 text-white shadow-md transform transition-transform duration-200' 
        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:translate-x-1 transition-all duration-200';

    document.body.style.overflow = 'hidden';
    
    return (
        <>
            <div className="flex h-screen bg-gray-50">
                {/* Overlay mobile */}
                {!isSidebarOpen && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                        onClick={() => setIsSidebarOpen(true)}
                    />
                )}

                {/* Barre latérale */}
                <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed lg:static inset-y-0 left-0 z-30 w-64 bg-gradient-to-b from-white to-blue-50 shadow-xl border-r border-blue-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0`}>
                    <div className="flex flex-col h-full">
                        {/* Header Sidebar */}
                        <div className="p-6 border-b border-blue-100">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                    Dashboard
                                </h2>
                                <button 
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="lg:hidden p-2 rounded-lg hover:bg-blue-100 transition-colors"
                                >
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Gestion de plateforme</p>
                        </div>

                        {/* Navigation */}
                        <nav className="flex-1 p-6">
                            <ul className="space-y-2">
                                {[
                                    { path: "/dashboard", label: "Accueil", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" },
                                    { path: "/dashboard/incidents", label: "Incidents", icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" },
                                    { path: "/dashboard/historiques", label: "Historiques", icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
                                    { path: "/dashboard/statistiques", label: "Statistiques", icon: "M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" },
                                    { path: '/dashboard/admins', label: "Administrateurs", icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"}
                                ].map((item) => (
                                    <li key={item.path}>
                                        <Link 
                                            to={item.path}
                                            className={`flex items-center space-x-3 p-3 rounded-xl font-semibold transition-all duration-200 ${isActive(item.path)}`}
                                        >
                                            <span className="flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                                                </svg>
                                            </span>
                                            <span className="text-sm">{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Déconnexion */}
                        <div className="p-6 border-t border-blue-100">
                            <button 
                                onClick={() => setShowModal(true)}
                                className="flex items-center space-x-3 w-full p-3 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-xl font-semibold transition-all duration-200 group"
                            >
                                <span className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                    </svg>
                                </span>
                                <span className="text-sm">Déconnexion</span>
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Contenu principal */}
                <div className="flex-1 flex flex-col min-w-0">
                    {/* Header mobile */}
                    <header className="lg:hidden bg-white shadow-sm border-b border-gray-200 p-4">
                        <button 
                            onClick={() => setIsSidebarOpen(true)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </header>

                    {/* Contenu avec scroll */}
                    <main className="flex-1 overflow-y-auto p-6 lg:p-8">
                        <div className="max-w-7xl mx-auto">
                            {contenu}
                        </div>
                    </main>
                </div>
            </div>
            
            {/* Modale de confirmation */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-gray-900">Confirmer la déconnexion</h2>
                            <button 
                                onClick={() => setShowModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-gray-600 mb-6">Êtes-vous sûr de vouloir vous déconnecter ? Vous devrez vous reconnecter pour accéder à nouveau.</p>
                        <div className="flex justify-end space-x-3">
                            <button
                                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-medium transition-all duration-200"
                                onClick={() => setShowModal(false)}
                            >
                                Annuler
                            </button>
                            <button
                                className="px-6 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                onClick={handleLogout}
                            >
                                Se déconnecter
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}