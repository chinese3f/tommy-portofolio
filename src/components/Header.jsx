import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderOpen, faEnvelope, faTools, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
                <h1 className="text-3xl  transition-transform transform hover:scale-110 hover:text-blue-500 duration-300">
                    Tomi Nika
                </h1>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute md:static bg-gray-800 w-full md:w-auto top-16 left-0`}>
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
                        <li>
                            <a href="#about" className="flex items-center hover:text-gray-400" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faUser} className="mr-2" /> About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="flex items-center hover:text-gray-400" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faFolderOpen} className="mr-2" /> Projects
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="flex items-center hover:text-gray-400" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faTools} className="mr-2" /> Skills
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="flex items-center hover:text-gray-400" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
