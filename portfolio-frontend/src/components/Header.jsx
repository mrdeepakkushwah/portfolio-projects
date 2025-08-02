import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaTrophy } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleBtnRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // Close menu on ESC key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && isMenuOpen) {
                e.preventDefault();
                setIsMenuOpen(false);
                toggleBtnRef.current?.focus(); // Return focus to toggle button
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isMenuOpen]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                !toggleBtnRef.current.contains(e.target)
            ) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenuOpen]);

    // Focus trap inside mobile menu
    useEffect(() => {
        if (!isMenuOpen) return;

        const focusableSelectors =
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
        const menuNode = menuRef.current;
        const focusableElements = menuNode.querySelectorAll(focusableSelectors);
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        // Focus the first focusable element when menu opens
        firstFocusable?.focus();

        function handleTrapFocus(e) {
            if (e.key !== "Tab") return;

            if (e.shiftKey) {
                // Shift+Tab
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }

        menuNode.addEventListener("keydown", handleTrapFocus);
        return () => {
            menuNode.removeEventListener("keydown", handleTrapFocus);
        };
    }, [isMenuOpen]);

    const navItems = [
        { path: "about", label: "About" },
        { path: "projects", label: "Projects" },
        { path: "skills", label: "Skills" },
        { path: "achievements", label: "Achievements", icon: <FaTrophy className="text-yellow-500" /> },
        { path: "contact", label: "Contact" },
    ];

    // Animation variants for mobile menu
    const menuVariants = {
        hidden: { opacity: 0, y: -20, pointerEvents: "none" },
        visible: { opacity: 1, y: 0, pointerEvents: "auto", transition: { duration: 0.25 } },
        exit: { opacity: 0, y: -20, pointerEvents: "none", transition: { duration: 0.2 } },
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav
                className="container mx-auto flex justify-between items-center p-4"
                aria-label="Primary Navigation"
            >
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
                    {navItems.map(({ path, label, icon }) => (
                        <NavLink
                            key={path}
                            to={`/${path}`}
                            className={({ isActive }) =>
                                `flex items-center gap-1 ${isActive
                                    ? "text-blue-600 font-medium border-b-2 border-blue-600"
                                    : "text-gray-700 hover:text-blue-600 transition"
                                }`
                            }
                        >
                            {icon && icon}
                            {label}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    ref={toggleBtnRef}
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                </button>

                {/* Mobile Menu with animation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            ref={menuRef}
                            id="mobile-menu"
                            role="menu"
                            tabIndex={-1}
                            className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 rounded-b-lg"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="flex flex-col space-y-4">
                                {navItems.map(({ path, label, icon }) => (
                                    <NavLink
                                        key={path}
                                        to={`/${path}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `flex items-center gap-2 ${isActive
                                                ? "text-blue-600 font-medium"
                                                : "text-gray-700 hover:text-blue-600 transition"
                                            }`
                                        }
                                        role="menuitem"
                                    >
                                        {icon && icon}
                                        {label}
                                    </NavLink>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Header;
