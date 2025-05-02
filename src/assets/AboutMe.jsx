import CodeTag from './CodeTag';
import { Link } from 'react-router-dom'

function AboutMe() {
    return (
        <div id="about-me" className="min-h-screen lg:h-screen mx-4 lg:mx-20 font-raleway">
            <div className="w-full h-[20vh] pt-24 mb-6 lg:mb-12 flex justify-center">
                <CodeTag size="l" rotate="l">About&nbsp;me&nbsp;!</CodeTag>
            </div>
            <div className="flex flex-col h-[80vh] gap-8 lg:flex-row-reverse">
                <div className="w-full lg:w-1/2 flex flex-col">
                    <div>
                        <div className="text-xl text-[#8f1600] font-semibold py-2">Waarom ik koos voor Toegepaste Informatica</div>
                        <div>Al van jongs af aan ben ik geboeid door technologie en hoe dingen “achter de schermen” werken. Ik koos voor Toegepaste Informatica omdat ik graag logisch nadenk, dingen wil begrijpen en vooral wil creëren. De combinatie van theorie en praktijk sprak me enorm aan, en ik zie deze richting als een stevige basis om later innovatieve IT-oplossingen te kunnen bouwen.</div>
                    </div>
                    <div>
                        <div className="text-xl text-[#8f1600] font-semibold pt-4 py-2">Scouts Bosvogels</div>
                        <div>Naast mijn studies ben ik actief als leiding bij de Scouts. Daar leer ik niet alleen om met een groep om te gaan, maar ook om verantwoordelijkheid te nemen, problemen creatief op te lossen en initiatief te tonen. Die ervaringen hebben mij als persoon sterker gemaakt en helpen me ook binnen IT-projecten, waar samenwerking en zelfstandigheid belangrijk zijn.</div>
                    </div>
                    <div>
                        <div className="text-xl text-[#8f1600] font-semibold pt-4 py-2">Toekomstdromen & professionele ambities</div>
                        <div>In de toekomst wil ik me verder verdiepen in full-stack development of software engineering. Mijn droom is om te werken aan betekenisvolle projecten — bijvoorbeeld tools of applicaties die het dagelijks leven van mensen echt verbeteren. Op lange termijn zou ik graag mijn eigen project of start-up opstarten, waarin ik mijn creativiteit en passie voor IT volledig kwijt kan.</div>
                    </div>
                    <div className="flex flex-row pt-4">
                        <Link to="/Cv" className="hover:cursor-pointer font-semibold border-2 border-[#8f1600] bg-[#8f1600] text-white rounded-full py-2 px-4 my-4 mx-2 md:mx-4 transition-all duration-300 ease-in-out hover:bg-[#E1A037] hover:border-[#E1A037] hover:text-[#8f1600]">
                            Open CV
                        </Link>
                        <a href="/CV_TuurVanBergen.pdf" download className="hover:cursor-pointer font-semibold border-2 border-[#8f1600] text-[#8f1600] rounded-full py-2 px-4 my-4 mx-2 md:mx-4 transition-all duration-300 ease-in-out hover:bg-[#E1A037] hover:text-white hover:border-[#E1A037]">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex">
                    <svg className="overflow-visible" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" >
                        <defs>
                            <clipPath id="cp">
                                <path id="path"
                                    d="M54.4,-57.5C64.3,-44.5,61.9,-22.2,62.1,0.2C62.4,22.7,65.3,45.5,55.4,54C45.5,62.5,22.7,56.8,0.6,56.2C-21.6,55.6,-43.1,60.2,-54.9,51.7C-66.7,43.1,-68.7,21.6,-65.8,3C-62.8,-15.7,-54.9,-31.3,-43.1,-44.3C-31.3,-57.3,-15.7,-67.5,3.3,-70.8C22.2,-74.1,44.5,-70.4,54.4,-57.5Z"
                                    transform="translate(200 200)  scale(2.5)" />
                            </clipPath>
                        </defs>
                        <path fill="#E1A037" d="M51,-56.2C61.5,-40.5,62.3,-20.2,60.1,-2.2C57.9,15.9,52.8,31.7,42.3,42.3C31.7,52.9,15.9,58.1,-1.4,59.6C-18.7,61,-37.5,58.6,-54.1,48C-70.8,37.5,-85.3,18.7,-83.8,1.5C-82.3,-15.7,-64.6,-31.3,-48,-47C-31.3,-62.8,-15.7,-78.5,2.3,-80.8C20.2,-83.1,40.5,-71.9,51,-56.2Z" transform="translate(200 190) scale(2.5)" />

                        <image href="/Scouts.png" clipPath="url(#cp)" x="0" y="-40" width="400" height="500" />
                    </svg>
                </div>
            </div>
        </div>

    )
}

export default AboutMe