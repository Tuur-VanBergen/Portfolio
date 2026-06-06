import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleHomeClick = () => {
        setMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed z-50 w-full flex justify-center font-raleway">
            <div
                className={`
                    transition-all duration-300 ease-in-out
                    flex items-center justify-center
                    ${scrolled 
                        ? "bg-[#00000080] text-black w-[90%] mt-3 rounded-2xl shadow-md h-14" 
                        : "bg-transparent text-black w-full h-16"}
                `}
            >
                <div className="flex w-full h-full justify-between items-center mx-5">

                    {/* Logo */}
                    <div className="font-light text-2xl h-full">
                        <Link 
                            to="/"
                            className={`px-5 h-full flex items-center font-extralight ${
                                scrolled ? "text-white" : "text-black"
                            }`}
                            onClick={handleHomeClick}
                        >
                            TvB
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex flex-row h-full">
                        <Link 
                            to="/about-me"
                            className={`transition-all duration-300 px-5 h-full flex items-center font-semibold ${
                                scrolled 
                                    ? "hover:bg-[#00000020] text-white" 
                                    : "hover:bg-[#00000020] hover:text-[#8f1600]"
                            }`}
                        >
                            About me
                        </Link>

                        <Link 
                            to="/projects"
                            className={`transition-all duration-300 px-5 h-full flex items-center font-semibold ${
                                scrolled 
                                    ? "hover:bg-[#00000020] text-white" 
                                    : "hover:bg-[#00000020] hover:text-[#8f1600]"
                            }`}
                        >
                            Projects
                        </Link>

                        <Link 
                            to="/internship"
                            className={`transition-all duration-300 px-5 h-full flex items-center font-semibold ${
                                scrolled 
                                    ? "hover:bg-[#00000020] text-white" 
                                    : "hover:bg-[#00000020] hover:text-[#8f1600]"
                            }`}
                        >
                            Internship
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button 
                        className="md:hidden flex flex-col gap-1"
                        onClick={() => setMenuOpen(true)}
                    >
                        <span className={`block w-6 h-[2px] ${scrolled ? "bg-white" : "bg-black"}`}></span>
                        <span className={`block w-6 h-[2px] ${scrolled ? "bg-white" : "bg-black"}`}></span>
                        <span className={`block w-6 h-[2px] ${scrolled ? "bg-white" : "bg-black"}`}></span>
                    </button>
                </div>
            </div>

            {/* FULLSCREEN OVERLAY MENU */}
            {menuOpen && (
    <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center text-white z-[60]"
    >
        {/* Home icon (top-left) */}
        <Link 
            to="/"
            className={`absolute top-5 left-5 text-white font-extralight text-3xl ${
                scrolled ? "text-white" : "text-black"
            }`}
            onClick={handleHomeClick}
        >
            TvB
        </Link>

        {/* Close button */}
        <button 
            className="absolute top-5 right-5 text-3xl font-light"
            onClick={() => setMenuOpen(false)}
        >
            ✕
        </button>

        {/* Menu links */}
        <div className="flex flex-col gap-8 text-3xl font-semibold">
            <Link 
                to="/about-me"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-300 transition"
            >
                About me
            </Link>

            <Link 
                to="/projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-300 transition"
            >
                Projects
            </Link>

            <Link 
                to="/internship"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-300 transition"
            >
                Internship
            </Link>
        </div>
    </div>
)}

        </div>
    );
}

export default NavBar;
