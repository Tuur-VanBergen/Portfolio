import NavBar from "./assets/NavBar";
import CodeTag from "./assets/CodeTag";

function Projects() {
    return(
        <>
        <NavBar />
        <div className="mx-8 lg:mx-20 font-raleway">
            <div className="w-full h-[15vh] pt-24 mb-12 flex justify-center">
                <CodeTag size="l" rotate="l">Projects&nbsp;!</CodeTag>
            </div>
            <div className="flex flex-col gap-8 lg:flex-row-reverse">
                <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="w-full mb-6 mt-4 sm:mt-0 flex justify-center">
                        <CodeTag size="m" rotate="r" className="whitespace-nowrap">SKIL2 Semester 2 Project</CodeTag>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] py-2">Context & Background</h3>
                        <p>
                            In dit schoolproject moesten we een systeem maken voor een de zwemlessen en zwemfeestjes van een lokaal hotel in de Kempen genaamd kempenrust. Onze opdrachtgever was een leerkracht die de rol van hoteleigenaar op zich nam. Het doel was om een realistische situatie na te bootsen en het volledige product te ontwikkelen.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Concrete & Specific Realisations</h3>
                        <ul className="list-disc list-inside">
                            <li>Inlog- en registratiesysteem met rolverdeling (eigenaar, medewerker, zwemleraar, ...)</li>
                            <li>Planningpagina met werkende agenda voor lessen en zwemfeestjes te bekijken</li>
                            <li>Volledig geïntegreerd betalingssysteem</li>
                            <li>Mailtemplate-pagina voor communicatiebeheer</li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">What I Learned</h3>
                        <p>
                            Ik heb mijn begrip van Laravel en database kennis verdiept. Ook heb ik mijn vaardigheden verbeterd in het schrijven van schone, herbruikbare Blade-componenten en ervaring opgedaan met het werken met Git en versiebeheer in een teamomgeving en het gebruik van Jira voor projectmanagement.                </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">My Contribution</h3>
                        <p>
                            Ik heb de planningspagina en enkele beheerderspagina's ontwikkeld, waarbij ik verantwoordelijk was voor het implementeren van de logica achter de agenda en het beheer van de zwemlessen.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mt-16 -ml-4 lg:-ml-32 -mb-10 flex">
                    <svg className="flex overflow-visible w-full h-auto" viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" >
                        <defs>
                            <clipPath id="cp">
                                <path id="path"
                                    d="M54.4,-57.5C64.3,-44.5,61.9,-22.2,62.1,0.2C62.4,22.7,65.3,45.5,55.4,54C45.5,62.5,22.7,56.8,0.6,56.2C-21.6,55.6,-43.1,60.2,-54.9,51.7C-66.7,43.1,-68.7,21.6,-65.8,3C-62.8,-15.7,-54.9,-31.3,-43.1,-44.3C-31.3,-57.3,-15.7,-67.5,3.3,-70.8C22.2,-74.1,44.5,-70.4,54.4,-57.5Z"
                                    transform="translate(350,200) scale(-5,2.9)" />
                            </clipPath>
                        </defs>
                        <path fill="#8f1600" d="M54.4,-57.5C64.3,-44.5,61.9,-22.2,62.1,0.2C62.4,22.7,65.3,45.5,55.4,54C45.5,62.5,22.7,56.8,0.6,56.2C-21.6,55.6,-43.1,60.2,-54.9,51.7C-66.7,43.1,-68.7,21.6,-65.8,3C-62.8,-15.7,-54.9,-31.3,-43.1,-44.3C-31.3,-57.3,-15.7,-67.5,3.3,-70.8C22.2,-74.1,44.5,-70.4,54.4,-57.5Z"
                            transform="translate(350 200) scale(-5.5,3.5)" />
                        <image href="/Hotel Kempenrust.png" clipPath="url(#cp)" x="-6" y="-100" width="700" height="600" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col mt-24 gap-8 lg:flex-row">
                <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="w-full mb-6 flex justify-center">
                        <CodeTag size="m" rotate="l">Web Development Project</CodeTag>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] py-2">Context & Background</h3>
                        <p>
                            Voor dit vak mochten we zelf een projectonderwerp kiezen. Ik heb ervoor gekozen om een website met een webshop te maken voor mijn eigen scouts. Het doel was om een gebruiksvriendelijke en functionele website te bouwen waarmee leden eenvoudig spullen konden kopen, activiteiten konden inzien en zich konden aanmelden. Dit project stelde me in staat om mijn technische vaardigheden verder te ontwikkelen, evenals mijn vermogen om een website van begin tot eind te plannen en te implementeren.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Concrete & Specific Realisations</h3>
                        <ul className="list-disc list-inside">
                            <li>Inlog- en registratiesysteem met rolverdeling (leiding,groepsleiding,leden)</li>
                            <li>Webshoppagina</li>
                            <li>Info pagina's per tak</li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">What I Learned</h3>
                        <p>
                            Tijdens dit project heb ik de basis van PHP en Laravel geleerd, evenals de andere technologieën van de TALL-stack die ik hier nog nooit eerder had gebruikt. Dit project gaf me de kans om mijn kennis van back-end ontwikkeling uit te breiden en te begrijpen hoe verschillende onderdelen van een webapplicatie samenkomen.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mt-16 -ml-4 -mb-10 flex">
                    <svg className="flex overflow-visible w-full h-auto" viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" >
                        <defs>
                            <clipPath id="cp">
                                <path id="path"
                                    d="M54.4,-57.5C64.3,-44.5,61.9,-22.2,62.1,0.2C62.4,22.7,65.3,45.5,55.4,54C45.5,62.5,22.7,56.8,0.6,56.2C-21.6,55.6,-43.1,60.2,-54.9,51.7C-66.7,43.1,-68.7,21.6,-65.8,3C-62.8,-15.7,-54.9,-31.3,-43.1,-44.3C-31.3,-57.3,-15.7,-67.5,3.3,-70.8C22.2,-74.1,44.5,-70.4,54.4,-57.5Z"
                                    transform="translate(350,200) scale(-5,2.9)" />
                            </clipPath>
                        </defs>
                        <path fill="#8f1600" d="M54.4,-57.5C64.3,-44.5,61.9,-22.2,62.1,0.2C62.4,22.7,65.3,45.5,55.4,54C45.5,62.5,22.7,56.8,0.6,56.2C-21.6,55.6,-43.1,60.2,-54.9,51.7C-66.7,43.1,-68.7,21.6,-65.8,3C-62.8,-15.7,-54.9,-31.3,-43.1,-44.3C-31.3,-57.3,-15.7,-67.5,3.3,-70.8C22.2,-74.1,44.5,-70.4,54.4,-57.5Z"
                            transform="translate(350 200) scale(-5.5,3.5)" />
                        <image href="/ScoutsWebsite.png" clipPath="url(#cp)" x="20" y="-100" width="800" height="600" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col mt-24 gap-8 lg:flex-row-reverse">
                <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="w-full mb-6 flex justify-center">
                        <CodeTag size="m" rotate="r">FullStack Project</CodeTag>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] py-2">Context & Background</h3>
                        <p>
                            Voor dit project kregen we de vrijheid om zelf een onderwerp te kiezen binnen het vak FullStack essentials. Samen met mijn groep besloten we een digitale oplossing te ontwikkelen voor een fictieve brouwerij genaamd Barley&Hops.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Concrete & Specific Realisations</h3>
                        <ul className="list-disc list-inside">
                            <li>Pagina's over verschillende onderwerpen</li>
                            <li>Het maken en gebruiken van API's</li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">What I Learned</h3>
                        <p>
                            Tijdens dit project heb ik leren werken met Javascript en geleerd hoe we API calls konden uitvoeren. Daarnaast heb ik mijn kennis van andere webdesign concepten kunnen verbeteren.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">My Contribution</h3>
                        <p>
                            Iedereen moest minstens 2 pagina's maken, ik heb ervoor gekozen om de homepagina te maken, een pagina over de geschiedenis van de brouwerij en een pagina over joblistings. Op de joblistings pagina heb ik gebruik gemaakt van een API om de mogelijke jobs te tonen.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mt-16 -ml-4 lg:-ml-32 -mb-10 flex">
                    <svg className="flex overflow-visible w-full h-auto" viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" >
                        <defs>
                            <clipPath id="cp">
                                <path id="path"
                                    d="M54.4,-57.5C64.3,-44.5,61.9,-22.2,62.1,0.2C62.4,22.7,65.3,45.5,55.4,54C45.5,62.5,22.7,56.8,0.6,56.2C-21.6,55.6,-43.1,60.2,-54.9,51.7C-66.7,43.1,-68.7,21.6,-65.8,3C-62.8,-15.7,-54.9,-31.3,-43.1,-44.3C-31.3,-57.3,-15.7,-67.5,3.3,-70.8C22.2,-74.1,44.5,-70.4,54.4,-57.5Z"
                                    transform="translate(350,200) scale(-5,2.9)" />
                            </clipPath>
                        </defs>
                        <path fill="#8f1600" d="M54.4,-57.5C64.3,-44.5,61.9,-22.2,62.1,0.2C62.4,22.7,65.3,45.5,55.4,54C45.5,62.5,22.7,56.8,0.6,56.2C-21.6,55.6,-43.1,60.2,-54.9,51.7C-66.7,43.1,-68.7,21.6,-65.8,3C-62.8,-15.7,-54.9,-31.3,-43.1,-44.3C-31.3,-57.3,-15.7,-67.5,3.3,-70.8C22.2,-74.1,44.5,-70.4,54.4,-57.5Z"
                            transform="translate(350 200) scale(-5.5,3.5)" />
                        <image href="/FullStack.png" clipPath="url(#cp)" x="-6" y="-120" width="750" height="600" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col mt-24 gap-8 lg:flex-row">
                <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="w-full mb-6 flex justify-center">
                        <CodeTag size="m" rotate="l">SKIL2 Semester 1 Project</CodeTag>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] py-2">Context & Background</h3>
                        <p>
                            In dit schoolproject moesten we in groep de functionaliteiten en benodigdheden van een theater uitwerken voor een fictief theater genaamd de Beerse Bende. Onze opdrachtgever was een leerkracht die de rol van theatereigenaar op zich nam. Het doel was om een realistische situatie na te bootsen en het technische deel van het product te designen in figma.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Concrete & Specific Realisations</h3>
                        <ul className="list-disc list-inside">
                            <li>Technisch design</li>
                            <li>Functionaliteiten tonen</li>
                            <li>Verwachtingen van klant voltooid</li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">What I Learned</h3>
                        <p>
                            Tijdens dit project heb ik de basis van Figma geleerd, hierbij hebben we ons vooral gericht op de technische kant en de functionaliteiten van het product. Dit project gaf me de kans om logisch denken te verbeteren en hoe we klantmeetings kunnen voeren en voorbereiden.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 -ml-4 mt-16 mb-10 lg:-mb-10 flex">
                    <svg className="flex overflow-visible w-full h-auto" viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" >
                        <defs>
                            <clipPath id="cp">
                                <path id="path"
                                    d="M54.4,-57.5C64.3,-44.5,61.9,-22.2,62.1,0.2C62.4,22.7,65.3,45.5,55.4,54C45.5,62.5,22.7,56.8,0.6,56.2C-21.6,55.6,-43.1,60.2,-54.9,51.7C-66.7,43.1,-68.7,21.6,-65.8,3C-62.8,-15.7,-54.9,-31.3,-43.1,-44.3C-31.3,-57.3,-15.7,-67.5,3.3,-70.8C22.2,-74.1,44.5,-70.4,54.4,-57.5Z"
                                    transform="translate(350,200) scale(-5,2.9)" />
                            </clipPath>
                        </defs>
                        <path fill="#8f1600" d="M54.4,-57.5C64.3,-44.5,61.9,-22.2,62.1,0.2C62.4,22.7,65.3,45.5,55.4,54C45.5,62.5,22.7,56.8,0.6,56.2C-21.6,55.6,-43.1,60.2,-54.9,51.7C-66.7,43.1,-68.7,21.6,-65.8,3C-62.8,-15.7,-54.9,-31.3,-43.1,-44.3C-31.3,-57.3,-15.7,-67.5,3.3,-70.8C22.2,-74.1,44.5,-70.4,54.4,-57.5Z"
                            transform="translate(350 200) scale(-5.5,3.5)" />
                        <image href="/Figma.png" clipPath="url(#cp)" x="30" y="-100" width="700" height="600" />
                    </svg>
                </div>
            </div>
        </div>
        </>
    )
    
}

export default Projects;