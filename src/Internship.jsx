import { ArrowDownToLine } from 'lucide-react';
import CodeTag from './assets/CodeTag';
import NavBar from './assets/NavBar';

const Internship = () => {
  return (
    <>
    <NavBar/>
    <div className="min-h-screen lg:h-screen font-raleway">
        <div className="h-[10vh] lg:h-[20vh] pt-24 w-full flex justify-center">
            <CodeTag size="l">Stage&nbsp;!</CodeTag>
        </div>
        <div className="min-h-[90vh] lg:h-[80vh] lg:min-h-[80vh] mx-4 pt-24 lg:pt-12 lg:mx-24 gap-20">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-3/4">
                    <h1 className='text-3xl font-semibold mb-4'>SafetySquad</h1>
                    Tijdens mijn stage bij Cegeka werkte ik aan het SafetySquad‑platform, een applicatie die organisaties realtime inzicht geeft in de aanwezigheid van eerstehulp‑ en evacuatiepersoneel. Mijn opdracht bestond uit het verbeteren en uitbreiden van de bestaande software, met de nadruk op het herontwerpen en bouwen van een nieuwe API.
                    <br/><br/>
                    Ik voerde een grondige analyse uit van de bestaande backend en database, waarna ik een volledig nieuwe structuur implementeerde volgens Clean Architecture en Domain‑Driven Design. Daarnaast refactorde ik de database, verbeterde ik de frontend‑integratie, en werkte ik aan nieuwe functionaliteiten zoals de Microsoft Teams‑koppeling, een acceptatieomgeving, en diverse optimalisaties in zowel backend als frontend.
                    <br/><br/>
                    Verder was ik verantwoordelijk voor het opstellen van een deploymentplan, het verbeteren van de UI/UX, het uitvoeren van testen, en het voorbereiden van presentaties voor interne stakeholders. Deze stage gaf me de kans om te werken aan een grootschalige, professionele codebase en om mijn vaardigheden in API‑ontwikkeling, architectuur, Angular, Flutter, en software‑integratie sterk te verdiepen.
                    <br/><br/>
                    In het realisatiedocument hieronder vind je uitgebreide informatie over mijn stage bij Cegeka, inclusief een volledig overzicht van wat ik heb gerealiseerd, hoe ik te werk ben gegaan en mijn persoonlijke reflectie op het traject.
                    
                </div>
                <div><img src="/logo_black.png" alt="" className='w-80 lg:w-80' /></div>
            </div>
            <div className='h-50 flex justify-center items-center gap-10'>
                <a href="/Realization Document.pdf" download className="hover:cursor-pointer font-semibold border-2 border-[#8f1600] text-[#8f1600] rounded-full py-2 px-4 my-4 mx-2 md:mx-4 transition-all duration-300 ease-in-out hover:bg-[#E1A037] hover:text-white hover:border-[#E1A037]">
                    <span className='flex flex-row gap-2'><ArrowDownToLine /> Realization document</span>
                </a>
                <a href="/Reflection.pdf" download className="hover:cursor-pointer font-semibold border-2 border-[#8f1600] text-[#8f1600] rounded-full py-2 px-4 my-4 mx-2 md:mx-4 transition-all duration-300 ease-in-out hover:bg-[#E1A037] hover:text-white hover:border-[#E1A037]">
                    <span className='flex flex-row gap-2'><ArrowDownToLine /> Reflection document</span>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Internship;
