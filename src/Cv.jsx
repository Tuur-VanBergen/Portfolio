import NavBar from "./assets/NavBar";
import { CalendarBlank, MapPin, Phone, Envelope } from "@phosphor-icons/react";

function Cv() {
    return (
        <>
        <NavBar />
        <div className="pt-24 px-24">
        <div className="relative w-full h-full overflow-hidden p-28 bg-[#efefef] font-raleway">
            <div className="absolute -top-20 -right-[306px] w-80 h-80 bg-[#8f1600] rotate-45 z-10"></div>
            <div className="absolute -top-40 -right-72 w-80 h-80 bg-[#E1A037] rotate-45 z-0"></div>
            <div className="flex flex-row">
                <img src="/Profielfoto zonder achtergrond.png"  className="w-52" alt="" />
                <div className="ps-16">
                    <div className="text-[#8f1600] font-bold text-[40px] pt-2">TUUR VAN BERGEN</div>
                    <div className="text-[#8f1600] font-semibold text-[28px] pb-2">TOEGEPASTE INFORMATICA</div>
                    <div className="flex flex-col justify-between h-36 text-lg">
                        <div className="flex flex-row">
                            <CalendarBlank className="w-7 h-7" />
                            <div className="ps-2">01 - 10 - 2003</div>
                        </div>
                        <div className="flex flex-row">
                            <MapPin className="w-7 h-7" />
                            <div className="ps-2">2280 Grobbendonk</div>
                        </div>
                        <div className="flex flex-row">
                            <Phone className="w-7 h-7" />
                            <div className="ps-2">+32 468 23 77 58</div>
                        </div>
                        <div className="flex flex-row">
                            <Envelope className="w-7 h-7" />
                            <div className="ps-2">tuur.vb@telenet.be</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="pt-2 text-lg">Ik ben gedreven door programmeren en ben graag bezig met programmeren. Ik vind het interessant om afwisseling te hebben door te programmeren in frontend- en backend-talen. Ik geniet ervan om applicaties en websites te creëren die oprecht nuttig zijn voor mensen.</div>
            <div className="text-[28px]">
                <div className="text-[#8f1600] font-bold text-[32px] py-4">Opleiding</div>
                <div className="flex flex-row relative pb-10">
                    <div>Sep 2023 - ...</div>
                    <div className="absolute top-2 left-[300px] rounded-full bg-[#efefef] border-4 w-8 h-8 border-[#E1A037] z-10"></div>
                    <div className="absolute top-4 left-[314px] w-1 h-20 bg-[#E1A037] z-0"></div>
                    <div className="absolute left-96">
                        <div className="relative">
                            <div className="whitespace-nowrap">BACHELOR IN DE TOEGEPASTE INFORMATICA</div>
                            <div className="absolute left-16 whitespace-nowrap text-[24px]">Thomas More Hogeschool Geel</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row relative pb-10">
                    <div>Sep 2015 - Juni 2021</div>
                    <div className="absolute top-2 left-[300px] rounded-full bg-[#efefef] border-4 w-8 h-8 border-[#E1A037] z-10"></div>
                    <div className="absolute top-4 left-[314px] w-1 h-20 bg-[#E1A037] z-0"></div>
                    <div className="absolute left-96">
                        <div className="relative">
                            <div className="whitespace-nowrap">SECUNDAIR: ECONOMIE - MODERNE TALEN</div>
                            <div className="absolute left-16 whitespace-nowrap text-[24px]">Kardinaal Van Roey Instituut - Vorselaar</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-[28px]">
                <div className="text-[#8f1600] font-bold text-[32px] py-4 mt-4">Studenten Jobs</div>
                <div className="flex flex-row relative pb-10">
                    <div>Juni 2023 - ...</div>
                    <div className="absolute top-2 left-[300px] rounded-full bg-[#efefef] border-4 w-8 h-8 border-[#E1A037] z-10"></div>
                    <div className="absolute top-4 left-[314px] w-1 h-20 bg-[#E1A037] z-0"></div>
                    <div className="absolute left-96">
                        <div className="relative">
                            <div className="whitespace-nowrap">MEDEWERKER, 4EVENTS</div>
                            <div className="absolute left-16 whitespace-nowrap text-[24px]">Evenementenbureau</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row relative pb-10">
                    <div>Juni 2021 - ...</div>
                    <div className="absolute top-2 left-[300px] rounded-full bg-[#efefef] border-4 w-8 h-8 border-[#E1A037] z-10"></div>
                    <div className="absolute top-4 left-[314px] w-1 h-20 bg-[#E1A037] z-0"></div>
                    <div className="absolute left-96">
                        <div className="relative">
                            <div className="whitespace-nowrap">MEDEWERKER, ZOMERBAR LAMBERT GROBBENDONK</div>
                            <div className="absolute left-16 whitespace-nowrap text-[24px]">Barverantwoordelijke en kelner</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-[28px]">
                <div className="text-[#8f1600] font-bold text-[32px] py-4 mt-4">Leiderschap & Engagement</div>
                <div className="flex flex-row relative pb-10">
                    <div>Sep 2024 - ...</div>
                    <div className="absolute top-2 left-[300px] rounded-full bg-[#efefef] border-4 w-8 h-8 border-[#E1A037] z-10"></div>
                    <div className="absolute top-4 left-[314px] w-1 h-20 bg-[#E1A037] z-0"></div>
                    <div className="absolute left-96">
                        <div className="relative">
                            <div className="whitespace-nowrap">SCOUTS BOSVOGELS</div>
                            <div className="absolute left-16 whitespace-nowrap text-[24px]">Groepsleiding</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-[24px] flex flex-row">
                <div className="w-1/2">
                    <div className="text-[#8f1600] font-bold text-[32px] py-4 mt-4">IT Knowledge</div>
                    <ul className="list-disc list-inside">
                        <li>Python</li>
                        <li>Sql en databases</li>
                        <li>Javascript</li>
                        <li>Java</li>
                        <li>Html en CSS</li>
                        <li>Linux en UNIX</li>
                        <li>Tall-stack</li>
                        <li>React</li>
                        <li>.NET</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div className="w-1/2">
                    <div className="text-[#8f1600] font-bold text-[32px] py-4 mt-4">Hobbies</div>
                    <ul className="list-disc list-inside">
                        <li>Scouts</li>
                        <li>Tennis</li>
                        <li>Gitaar</li>
                    </ul>
                    <div className="text-[#8f1600] font-bold text-[32px] py-4 mt-4">Talen</div>
                    <ul className="list-disc list-inside">
                        <li>Nederlands</li>
                        <li>Engels</li>
                    </ul>
                </div>
            </div>
            <div className="absolute -bottom-72 -left-40 w-80 h-80 bg-[#8f1600] rotate-45 z-0"></div>
            <div className="absolute -bottom-[306px] -left-20 w-80 h-80 bg-[#E1A037] rotate-45 z-10"></div>
        </div>
    </div>
    <div className="h-24 flex justify-center items-center">
        <a href="/CV_TuurVanBergen.pdf" download className="hover:cursor-pointer font-semibold border-2 border-[#8f1600] bg-[#8f1600] text-white rounded-full py-2 px-4 transition-all duration-300 ease-in-out hover:bg-[#E1A037] hover:border-[#E1A037] hover:text-[#8f1600]">
            Download CV
        </a>
    </div>
    </>
    )
}

export default Cv;