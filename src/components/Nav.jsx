import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import image from "../assets/constants/images"
import secureLocalStorage from "react-secure-storage"

export function Nav(){
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [showLogoutModal, setShowLogoutModal] = useState(false)
    const [logoutLoading, setLogoutLoading] = useState(false)

    // Vérifier si l'utilisateur est connecté au chargement
    useEffect(() => {
        const token = secureLocalStorage.getItem("token")
        setIsLoggedIn(!!token)
    }, [])

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    const closeDrawer = () => {
        setIsDrawerOpen(false)
    }

    const handleLogoutClick = () => {
        setShowLogoutModal(true)
    }

    const handleLogoutConfirm = () => {
        setLogoutLoading(true)
        
        // Simuler un délai pour le loading
        setTimeout(() => {
            secureLocalStorage.removeItem("token")
            secureLocalStorage.removeItem("user")
            setIsLoggedIn(false)
            setShowLogoutModal(false)
            setLogoutLoading(false)
            
            // Rediriger vers la page d'accueil si nécessaire
            window.location.href = "/"
        }, 1000)
    }

    const handleLogoutCancel = () => {
        setShowLogoutModal(false)
    }

    const handleModalBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setShowLogoutModal(false)
        }
    }

    const navLinks = [
        { to: "/", label: "Accueil" },
        { to: "/incidents", label: "Incidents" },
        { to: "/historiques", label: "Historiques" },
        { to: "/statistiques", label: "Statistiques" },
    ]

    return(
        <>
            <nav className="flex justify-between p-2 items-center sticky top-0 z-50 backdrop-blur-sm bg-white/80 border-b-2 border-gray-300 shadow-lg">
                <Link to="/" className="flex gap-3 justify-center items-center hover:text-blue-500">
                    <img src={image.logo} 
                        alt="Logo SmartGuardian" 
                        className="rounded-full h-12 w-12"
                    />
                    <h1 className="text-xl font-bold italic">SmartGuardian</h1>
                </Link>
                <div className="hidden md:block">
                    <ul className="flex justify-around gap-5 text-lg font-bold items-center">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.to}
                                className="relative p-3 text-gray-700 hover:text-blue-500 transition-colors duration-300 
                                        after:content-[''] after:absolute after:left-0 after:bottom-0 
                                        after:w-0 after:h-[2px] after:bg-blue-500 
                                        after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.label}
                            </Link>
                        ))}
                        {isLoggedIn ? (
                            <button 
                                onClick={handleLogoutClick}
                                className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors duration-300 font-semibold"
                            >
                                Déconnexion
                            </button>
                        ) : (
                            <Link 
                                to="/connexion" 
                                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-800 transition-colors duration-300"
                            >
                                Connexion
                            </Link>
                        )}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative"
                    onClick={toggleDrawer}
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isDrawerOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1.5 ${isDrawerOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1.5 ${isDrawerOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </nav>

            {/* Mobile Drawer */}
            <div className={`
                fixed top-0 left-0 h-full w-full bg-black/50 z-40 transition-opacity duration-300 md:hidden
                ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            `} onClick={closeDrawer}>
                {/* Drawer Content */}
                <div 
                    className={`
                        fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50
                        ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
                    `}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Drawer Header */}
                    <div className="flex justify-between items-center p-6 border-b">
                        <button 
                            onClick={closeDrawer}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                            aria-label="Close menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Drawer Navigation */}
                    <div className="p-6">
                        <ul className="space-y-4">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.to}
                                        className="block p-4 text-gray-700 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-300 font-semibold"
                                        onClick={closeDrawer}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Auth Buttons */}
                        <div className="mt-8 space-y-4">
                            {isLoggedIn ? (
                                <button 
                                    onClick={() => {
                                        handleLogoutClick()
                                        closeDrawer()
                                    }}
                                    className="block w-full text-center p-4 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors duration-300 font-semibold"
                                >
                                    Déconnexion
                                </button>
                            ) : (
                                <Link 
                                    to="/connexion" 
                                    className="block w-full text-center p-4 rounded-full bg-blue-600 text-white hover:bg-blue-800 transition-colors duration-300 font-semibold"
                                    onClick={closeDrawer}
                                >
                                    Connexion
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de confirmation de déconnexion */}
            {showLogoutModal && (
                <div 
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    onClick={handleModalBackdropClick}
                >
                    <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
                        {/* Bouton fermeture en croix */}
                        <button
                            onClick={handleLogoutCancel}
                            className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                            disabled={logoutLoading}
                        >
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Contenu de la modale */}
                        <div className="text-center pt-8">
                            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </div>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Déconnexion
                            </h3>
                            
                            <p className="text-gray-600 mb-6">
                                Êtes-vous sûr de vouloir vous déconnecter de votre compte ?
                            </p>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleLogoutCancel}
                                    disabled={logoutLoading}
                                    className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
                                >
                                    Annuler
                                </button>
                                
                                <button
                                    onClick={handleLogoutConfirm}
                                    disabled={logoutLoading}
                                    className="flex-1 py-3 px-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {logoutLoading ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Déconnexion...</span>
                                        </div>
                                    ) : (
                                        "Se déconnecter"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}