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
        <div className="flex flex-col min-h-[90vh] lg:h-[80vh] lg:min-h-[80vh] lg:flex-row mx-4 lg:mx-24">
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
                <div className='flex flex-col h-full justify-center lg:pb-20'>
                    <div className="space-y-1 font-bold mb-5">
                        <div className="text-[24px] md:text-[36px]">Ik ben <span className="underline text-[#8f1600]">Tuur Van Bergen,</span></div>
                        <div className="md:text-[32px]">Groepsleider van Scouts Bosvogels &</div>
                        <div className="md:text-[32px]">Student AppAi</div>
                    </div>
                    <div className="text-lg">
                        Welkom in mijn portfolio! Hier neem ik je mee door de projecten waar ik het meest trots op ben en geef ik je een duidelijk beeld van mijn groei als ontwikkelaar. Je vindt hier een overzicht van afgeronde projecten, een uitgebreide blik op mijn stage‑ervaring bij Cegeka, en een About Me sectie waarin ik meer vertel over wie ik ben, wat mij motiveert en waar ik naartoe wil.
                    <br/><br/>
                    Mijn doel met dit portfolio is om je niet alleen mijn werk te tonen, maar ook de manier waarop ik denk, leer en bouw. Veel plezier met ontdekken!
                    </div>
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
