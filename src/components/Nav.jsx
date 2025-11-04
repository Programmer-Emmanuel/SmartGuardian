import { Link } from "react-router-dom"
import { useState } from "react"
import image from "../assets/constants/images"

export function Nav(){
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    const closeDrawer = () => {
        setIsDrawerOpen(false)
    }

    const navLinks = [
        { to: "", label: "Accueil" },
        { to: "", label: "Alertes" },
        { to: "", label: "Historiques" },
        { to: "", label: "Statistiques" },
    ]

    return(
        <>
            <nav className="flex justify-between p-2 items-center sticky top-0 z-50 backdrop-blur-sm bg-white/80 border-b-2 border-gray-300">
                {/* Logo */}
                <Link to="" className="flex gap-3 justify-center items-center hover:text-blue-500">
                    <img src={image.logo} 
                        alt="" 
                        className="rounded-full h-12 w-12"
                    />
                    <h1 className="text-xl font-bold italic">SmartGuardian</h1>
                </Link>

                {/* Desktop Navigation */}
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
                        <Link 
                            to="" 
                            className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-800 transition-colors duration-300"
                        >
                            Connexion
                        </Link>
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
                            <Link 
                                to="" 
                                className="block w-full text-center p-4 rounded-full bg-blue-600 text-white hover:bg-blue-800 transition-colors duration-300 font-semibold"
                                onClick={closeDrawer}
                            >
                                Connexion
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}