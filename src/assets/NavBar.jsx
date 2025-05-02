import { Link } from "react-router-dom";

function NavBar() {
    return(
        <div className="fixed z-50 h-20 w-full px-10 lg:px-20 font-raleway">
            <div className="relative h-12 w-full mt-4 rounded-full bg-[#dddddd] z-50 bg-opacity-85">
                <div className="absolute top-0 left-0 h-12 w-12 hover:cursor-pointer group">
                    <Link to="/">
                        <svg className="absolute z-0 overflow-visible"  transform="scale(1.8)" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-[#E1A037] group-hover:fill-[#8f1600] transition-all duration-300 ease-in-out" d="M40.8,-67.4C54,-63.1,66.5,-54.3,72.7,-42.4C78.9,-30.4,78.8,-15.2,79.4,0.3C79.9,15.8,81.1,31.7,75.6,44.8C70,57.9,57.8,68.4,44.1,72.8C30.3,77.2,15.2,75.6,1.7,72.6C-11.7,69.6,-23.5,65.3,-32.6,58.2C-41.7,51.2,-48.1,41.4,-54.8,31.2C-61.4,21,-68.1,10.5,-71.3,-1.8C-74.4,-14.1,-74,-28.3,-68.1,-39.8C-62.3,-51.3,-51.1,-60.2,-38.8,-65C-26.6,-69.9,-13.3,-70.8,0.3,-71.2C13.8,-71.7,27.6,-71.7,40.8,-67.4Z" transform="translate(80 100)" />
                        </svg>
                        <img src="Profielfoto zonder achtergrond.png" className="rounded-b-full z-20 relative" alt="" />
                    </Link>
                </div>
                <div className="flex w-full h-full justify-end sm:justify-center items-center">
                    <Link to="/about-me" className="mx-2 md:mx-5 px-5 h-full rounded-full flex justify-center items-center font-semibold hover:font-bold hover:bg-[#8f1600] hover:text-white transition-all duration-300 ease-in-out">
                        <div className="flex justify-center items-center">
                            About me
                        </div>
                    </Link>
                    <Link to="/projects" className="mx-2 md:mx-5 px-5 h-full rounded-full flex justify-center items-center font-semibold hover:font-bold hover:bg-[#8f1600] hover:text-white transition-all duration-300 ease-in-out">
                        <div className="flex justify-center items-center">
                            Projects
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default NavBar;