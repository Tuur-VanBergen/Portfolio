import AboutMe from './assets/AboutMe';
import CodeTag from './assets/CodeTag';
import NavBar from './assets/NavBar';
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about-me") {
      const section = document.getElementById("about-me");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
    <NavBar/>
    <div className="min-h-screen lg:h-screen font-raleway">
        <div className="h-[10vh] lg:h-[20vh] pt-24 w-full flex justify-center">
            <CodeTag size="l">Welkom&nbsp;!</CodeTag>
        </div>
        <div className="flex flex-col min-h-[90vh] lg:h-[80vh] lg:min-h-[80vh] lg:flex-row mx-4 lg:mx-20">
            <div className="w-full lg:w-1/2 flex flex-col h-full items-start py-10 pb-0 justify-between">
                <div className="w-full lg:hidden flex justify-center items-center mt-20 mb-10">
                    <div className="w-1/2  flex items-end">
                        <div className="relative w-fit mb-20">
                            <svg className="absolute z-0 overflow-visible" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#E1A037" d="M40.8,-67.4C54,-63.1,66.5,-54.3,72.7,-42.4C78.9,-30.4,78.8,-15.2,79.4,0.3C79.9,15.8,81.1,31.7,75.6,44.8C70,57.9,57.8,68.4,44.1,72.8C30.3,77.2,15.2,75.6,1.7,72.6C-11.7,69.6,-23.5,65.3,-32.6,58.2C-41.7,51.2,-48.1,41.4,-54.8,31.2C-61.4,21,-68.1,10.5,-71.3,-1.8C-74.4,-14.1,-74,-28.3,-68.1,-39.8C-62.3,-51.3,-51.1,-60.2,-38.8,-65C-26.6,-69.9,-13.3,-70.8,0.3,-71.2C13.8,-71.7,27.6,-71.7,40.8,-67.4Z" transform="translate(70 100) scale(1.8)" />
                            </svg>
                            <img src="Profielfoto zonder achtergrond.png" className="rounded-b-full z-20 relative" alt="" />
                            <div className="rounded-full w-60 h-12 bottom-1 -right-5 absolute -rotate-12 bg-[#8f1600] z-30 text-white">
                                <div className="flex justify-center items-center w-full h-full font-bold">Webdesigner & Developer</div>
                            </div>
                            <div className="rounded-full w-60 h-12 -bottom-20 -left-5 lg:top-24 lg:-left-44 absolute rotate-6 bg-[#8f1600] z-10 text-white">
                                <div className="flex justify-center items-center w-full h-full font-bold">Full-stack Developer</div>
                            </div>
                            <div className="rounded-full w-60 h-12 -top-10 -right-10 lg:top-0 lg:-right-44 absolute rotate-[18deg] lg:-rotate-[18deg] bg-[#8f1600] z-10 text-white">
                                <div className="flex justify-center items-center w-full h-full font-bold">Frontend Developer</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-1 font-bold">
                    <div className="text-[24px] md:text-[36px]">Ik ben <span className="underline text-[#8f1600]">Tuur Van Bergen,</span></div>
                    <div className="md:text-[32px]">Groepsleiding van Scouts Bosvogels &</div>
                    <div className="md:text-[32px]">Student AppAi</div>
                </div>
                <div className="pe-0 lg:text-lg lg:pe-20">Ik ben altijd leergierig en gepassioneerd door technologie. In mijn vrije tijd blijf ik experimenteren met nieuwe IT-tools en werk ik aan persoonlijke projecten om mijn vaardigheden verder te ontwikkelen.</div>
                <div className="flex flex-row">
                    <Link to="/about-me" className="hover:cursor-pointer font-semibold border-2 border-[#8f1600] bg-[#8f1600] text-white rounded-full py-2 px-4 my-4 mx-2 md:mx-4 transition-all duration-300 ease-in-out hover:bg-[#E1A037] hover:border-[#E1A037] hover:text-[#8f1600]">
                        About me
                    </Link>
                    <Link to="/projects" className="hover:cursor-pointer font-semibold border-2 border-[#8f1600] text-[#8f1600] rounded-full py-2 px-4 my-4 mx-2 md:mx-4 transition-all duration-300 ease-in-out hover:bg-[#E1A037] hover:text-white hover:border-[#E1A037]">
                        Projects
                    </Link>
                </div>
            </div>
            <div className="hidden mt-10 lg:mt-0 lg:w-1/2 lg:flex justify-center">
                <div className="w-1/2 flex items-end">
                    <div className="relative w-fit mb-20">
                        <svg className="absolute z-0 overflow-visible" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#E1A037" d="M40.8,-67.4C54,-63.1,66.5,-54.3,72.7,-42.4C78.9,-30.4,78.8,-15.2,79.4,0.3C79.9,15.8,81.1,31.7,75.6,44.8C70,57.9,57.8,68.4,44.1,72.8C30.3,77.2,15.2,75.6,1.7,72.6C-11.7,69.6,-23.5,65.3,-32.6,58.2C-41.7,51.2,-48.1,41.4,-54.8,31.2C-61.4,21,-68.1,10.5,-71.3,-1.8C-74.4,-14.1,-74,-28.3,-68.1,-39.8C-62.3,-51.3,-51.1,-60.2,-38.8,-65C-26.6,-69.9,-13.3,-70.8,0.3,-71.2C13.8,-71.7,27.6,-71.7,40.8,-67.4Z" transform="translate(70 100) scale(1.8)" />
                        </svg>
                        <img src="Profielfoto zonder achtergrond.png" className="rounded-b-full z-20 relative" alt="" />
                        <div className="rounded-full w-60 h-12 bottom-1 -right-5 absolute -rotate-12 bg-[#8f1600] z-30 text-white">
                            <div className="flex justify-center items-center w-full h-full font-bold">Webdesigner & Developer</div>
                        </div>
                        <div className="rounded-full w-60 h-12 -bottom-20 -left-5 lg:top-24 lg:-left-44 absolute rotate-6 bg-[#8f1600] z-10 text-white">
                            <div className="flex justify-center items-center w-full h-full font-bold">Full-stack Developer</div>
                        </div>
                        <div className="rounded-full w-60 h-12 -top-10 -right-10 lg:top-0 lg:-right-44 absolute rotate-[18deg] lg:-rotate-[18deg] bg-[#8f1600] z-10 text-white">
                            <div className="flex justify-center items-center w-full h-full font-bold">Frontend Developer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AboutMe />
    </>
  )
}

export default Home;
