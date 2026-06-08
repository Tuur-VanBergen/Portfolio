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
            <div>
                <h1 className='text-2xl font-semibold mt-8 mb-4'>Reflectie</h1>
                    Tijdens deze stage heb ik waardevolle ervaring opgedaan op zowel technisch als professioneel vlak binnen de softwareontwikkeling.<br/>
                    Een van de belangrijkste leerervaringen was het werken aan een bestaande codebase waaraan
                    eerdere stagiaires al hadden gewerkt. Het kostte wat tijd om bepaalde delen van de code te begrijpen of te doorgronden waarom
                    ze bepaalde keuzes hadden gemaakt. Nadat ik had gekeken naar wat zij hadden gemaakt, bracht ik mogelijke verbeterpunten in kaart voordat
                    ik wijzigingen doorvoerde. Dit heeft me geleerd hoe belangrijk het is om schone, gestructureerde en onderhoudbare code te schrijven.<br/><br/>
                    Als ik terugkijk op het technische deel van mijn stage, zie ik dat ik mijn kennis van
                    backend-ontwikkeling aanzienlijk heb verbeterd. Ik heb geleerd hoe ik een goed gestructureerde API kan ontwerpen en implementeren met behulp van verschillende
                    principes, zoals Clean Architecture en Domain-Driven Development. Daarnaast heb ik ook praktische
                    ervaring opgedaan met het herstructureren van databases, Microsoft-implementaties en implementatieprocessen in een
                    professionele omgeving.<br/><br/>
                    Wat betreft mijn professionele ontwikkeling heb ik geleerd hoe ik moet communiceren binnen een professioneel team
                    , hoe ik goede presentaties kan geven en hoe zakelijke beslissingen tot stand komen. Deze vooruitgang werd
                    mogelijk gemaakt door mijn mentor, die mij meerdere kansen bood om mijn onderzoek en
                    ontwikkeling te presenteren en die de andere vergaderingen voor mij regelde.<br/><br/>
                    Tot slot denk ik dat ik me ook op professioneel vlak heb ontwikkeld. Dit komt vooral tot uiting in de verbetering van
                    mijn communicatieve vaardigheden, aangezien ik in het kader van mijn stage veel presentaties in zowel het Engels als het Nederlands moest geven.
                    Door samen te werken met een business-stagiair heb ik ook inzicht gekregen in hoe technische en zakelijke
                    profielen elkaar binnen een project aanvullen. <br/> <br/>
                    Over het geheel genomen was deze stage een zeer waardevolle ervaring die zowel mijn technische vaardigheden als mijn
                    vermogen om in een professionele softwareontwikkelingsomgeving te werken heeft versterkt. Het heeft mijn interesse in backend-
                    ontwikkeling bevestigd en een sterke basis gelegd voor mijn toekomstige carrière.
            </div>
            <div className='h-50 flex justify-center items-center'>
                <a href="/Realization Document.pdf" download className="hover:cursor-pointer font-semibold border-2 border-[#8f1600] text-[#8f1600] rounded-full py-2 px-4 my-4 mx-2 md:mx-4 transition-all duration-300 ease-in-out hover:bg-[#E1A037] hover:text-white hover:border-[#E1A037]">
                    <span className='flex flex-row gap-2'><ArrowDownToLine /> Realization document</span>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Internship;
