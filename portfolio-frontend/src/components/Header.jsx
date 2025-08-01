import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaTrophy } from "react-icons/fa";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <NavLink
                    to="/"
                    className="text-xl font-bold text-blue-600 hover:text-blue-700 flex items-center"
                >
                    <span className="hidden sm:inline">Deepak Kushwah</span>
                    <span className="sm:hidden">DK</span>
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `flex items-center gap-1 ${isActive
                                ? "text-blue-600 font-medium border-b-2 border-blue-600"
                                : "text-gray-700 hover:text-blue-600 transition"}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `flex items-center gap-1 ${isActive
                                ? "text-blue-600 font-medium border-b-2 border-blue-600"
                                : "text-gray-700 hover:text-blue-600 transition"}`
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/skills"
                        className={({ isActive }) =>
                            `flex items-center gap-1 ${isActive
                                ? "text-blue-600 font-medium border-b-2 border-blue-600"
                                : "text-gray-700 hover:text-blue-600 transition"}`
                        }
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        to="/achievements"
                        className={({ isActive }) =>
                            `flex items-center gap-1 ${isActive
                                ? "text-blue-600 font-medium border-b-2 border-blue-600"
                                : "text-gray-700 hover:text-blue-600 transition"}`
                        }
                    >
                        <FaTrophy className="text-yellow-500" />
                        Achievements
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `flex items-center gap-1 ${isActive
                                ? "text-blue-600 font-medium border-b-2 border-blue-600"
                                : "text-gray-700 hover:text-blue-600 transition"}`
                        }
                    >
                        Contact
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <FaTimes className="w-6 h-6" />
                    ) : (
                        <FaBars className="w-6 h-6" />
                    )}
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 animate-fadeIn">
                        <div className="flex flex-col space-y-4">
                            <NavLink
                                to="/about"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive
                                        ? "text-blue-600 font-medium"
                                        : "text-gray-700 hover:text-blue-600 transition"}`
                                }
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/projects"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive
                                        ? "text-blue-600 font-medium"
                                        : "text-gray-700 hover:text-blue-600 transition"}`
                                }
                            >
                                Projects
                            </NavLink>
                            <NavLink
                                to="/skills"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive
                                        ? "text-blue-600 font-medium"
                                        : "text-gray-700 hover:text-blue-600 transition"}`
                                }
                            >
                                Skills
                            </NavLink>
                            <NavLink
                                to="/achievements"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive
                                        ? "text-blue-600 font-medium"
                                        : "text-gray-700 hover:text-blue-600 transition"}`
                                }
                            >
                                <FaTrophy className="text-yellow-500" />
                                Achievements
                            </NavLink>
                            <NavLink
                                to="/contact"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive
                                        ? "text-blue-600 font-medium"
                                        : "text-gray-700 hover:text-blue-600 transition"}`
                                }
                            >
                                Contact
                            </NavLink>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;