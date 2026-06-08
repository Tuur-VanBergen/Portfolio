import NavBar from "./assets/NavBar";
import CodeTag from "./assets/CodeTag";
import { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

function Projects() {
    const videoRef = useRef(null);
    const [hover, setHover] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [pointer, setPointer] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;

        const onPlay = () => setIsPaused(false);
        const onPause = () => setIsPaused(true);

        v.addEventListener("play", onPlay);
        v.addEventListener("pause", onPause);

        // initial state
        setIsPaused(v.paused);

        return () => {
        v.removeEventListener("play", onPlay);
        v.removeEventListener("pause", onPause);
        };
    }, []);

    const togglePlay = () => {
        const v = videoRef.current;
        if (!v) return;
        v.paused ? v.play() : v.pause();
    };

    const skip = (seconds) => {
        const v = videoRef.current;
        if (!v) return;
        v.currentTime = Math.max(0, Math.min(v.duration || Infinity, v.currentTime + seconds));
    };

    const updatePointerFromEvent = (e) => {
        const svg = e.currentTarget.querySelector("svg");
        if (!svg) return;
        const rect = svg.getBoundingClientRect();
        setPointer({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const showControls = hover || isPaused;
  
    return(
        <>
        <NavBar />
        <div className="mx-8 lg:mx-20 font-raleway">
            <div className="w-full h-[15vh] pt-24 mb-12 flex justify-center">
                <CodeTag size="l" rotate="l">Projecten&nbsp;!</CodeTag>
            </div>
            <div className="flex flex-col gap-8 lg:flex-row-reverse">
                <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="w-full mb-6 mt-4 sm:mt-0 flex justify-center">
                        <CodeTag size="m" rotate="r" className="whitespace-nowrap">SKIL3 Project</CodeTag>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] py-2">Context</h3>
                        <p>
                            In dit groepproject ontwikkelden we voor Easy2Drop een nieuw systeem voor hun volgende generatie pakketboxen. We werkten zowel aan het scherm en de hardware‑aansturing van de sloten, als aan het aanpassen van de website om nieuwe boxen te registreren. Daarnaast bouwden we een mobiele app waarmee klanten een plaats kunnen reserveren en hun pakketstatus kunnen opvolgen. Het project combineerde embedded software, webontwikkeling en mobile development in één realistische bedrijfsopdracht.                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Concrete & Specifieke Realisaties</h3>
                        <ul className="list-disc list-inside">
                            <li>Aanpassen van bestaande software</li>
                            <li>Uitwerken van app voor op de pakketbox</li>
                            <li>Aansturen van sloten</li>
                            <li>Mobiele app die dezelfde functionaliteiten van de website heeft</li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Wat ik heb geleerd</h3>
                        <p>
                            Ik heb mijn vaardigheden in Flutter, NestJS en Vue versterkt door nieuwe functionaliteit te bouwen én verder te werken op een bestaande codebase. Ik leerde hoe ik bestaande structuren analyseer, uitbreid en optimaliseer, en hoe ik schaalbare componenten en API‑koppelingen opzet binnen een groter systeem.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Mijn bijdrage</h3>
                        <p>
                            Ik heb tijdens dit project de API uitgebreid en aangepast om nieuwe functionaliteit te ondersteunen, en leerde hoe ik bestaande endpoints analyseer, optimaliseer en uitbreid zonder de bestaande werking te breken. Daarnaast ontwikkelde ik de volledige mobiele app in Flutter, waardoor ik mijn kennis in state‑management, navigatie, API‑integratie en het bouwen van herbruikbare, schaalbare UI‑componenten sterk heb verdiept.
                        </p>
                    </div>
                </div>
                <div
                    className="w-full lg:w-1/2 mt-16 -ml-4 lg:-ml-32 -mb-10 flex relative"
                    onPointerEnter={(e) => {
                        setHover(true);
                        updatePointerFromEvent(e);
                    }}
                    onPointerMove={(e) => updatePointerFromEvent(e)}
                    onPointerLeave={() => setHover(false)}
                >
                    <svg
                        className="flex overflow-visible w-full h-auto"
                        viewBox="0 0 700 400"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                        <clipPath id="cp">
                            <path
                            id="blobPath"
                            d="M54.4,-57.5C64.3,-44.5,61.9,-22.2,62.1,0.2C62.4,22.7,65.3,45.5,55.4,54C45.5,62.5,22.7,56.8,0.6,56.2C-21.6,55.6,-43.1,60.2,-54.9,51.7C-66.7,43.1,-68.7,21.6,-65.8,3C-62.8,-15.7,-54.9,-31.3,-43.1,-44.3C-31.3,-57.3,-15.7,-67.5,3.3,-70.8C22.2,-74.1,44.5,-70.4,54.4,-57.5Z"
                            transform="translate(350,200) scale(-5,2.9)"
                            />
                        </clipPath>
                        </defs>

                        <path
                        fill="#8f1600"
                        d="M54.4,-57.5C64.3,-44.5,61.9,-22.2,62.1,0.2C62.4,22.7,65.3,45.5,55.4,54C45.5,62.5,22.7,56.8,0.6,56.2C-21.6,55.6,-43.1,60.2,-54.9,51.7C-66.7,43.1,-68.7,21.6,-65.8,3C-62.8,-15.7,-54.9,-31.3,-43.1,-44.3C-31.3,-57.3,-15.7,-67.5,3.3,-70.8C22.2,-74.1,44.5,-70.4,54.4,-57.5Z"
                        transform="translate(350 200) scale(-5.5,3.5)"
                        style={{ pointerEvents: "auto" }}
                        aria-hidden="false"
                        />

                        <foreignObject
                        x="0"
                        y="-120"
                        width="700"
                        height="600"
                        clipPath="url(#cp)"
                        style={{ pointerEvents: "none" }}
                        >
                        <div xmlns="http://www.w3.org/1999/xhtml" className="w-full h-full object-contain">
                            <video
                            ref={videoRef}
                            src="/Easy2Drop.mp4"
                            className="object-contain w-full h-full"
                            playsInline
                            autoPlay
                            loop
                            />
                        </div>
                        </foreignObject>
                    </svg>

                    <div
                        className={`absolute inset-0 flex items-center justify-center gap-6 transition-opacity duration-150 ${
                        showControls ? "opacity-100" : "opacity-0"
                        } pointer-events-none`}
                        aria-hidden={!showControls}
                    >
                        <button
                        onClick={() => skip(-5)}
                        className="pointer-events-auto bg-black/70 text-white px-4 py-3 rounded-full cursor-pointer"
                        aria-label="Terug 5 seconden"
                        >
                        <FontAwesomeIcon icon={faBackward} />
                        </button>

                        <button
                        onClick={togglePlay}
                        className="pointer-events-auto bg-black/70 text-white px-6 py-6 rounded-full shadow-xl cursor-pointer"
                        aria-label={isPaused ? "Speel" : "Pauzeer"}
                        >
                        {isPaused ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
                        </button>

                        <button
                        onClick={() => skip(5)}
                        className="pointer-events-auto bg-black/70 text-white px-4 py-3 rounded-full cursor-pointer"
                        aria-label="Vooruit 5 seconden"
                        >
                        <FontAwesomeIcon icon={faForward} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-24 gap-8 lg:flex-row">
                <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="w-full mb-6 flex justify-center">
                        <CodeTag size="m" rotate="l">Software Engineering</CodeTag>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] py-2">Context</h3>
                        <p>
                            Voor dit groepsproject ontwikkelden we een volledige website en dashboard voor Appie’s Legobib, een initiatief voor kinderen die langere tijd in het ziekenhuis verblijven. Via deze website kunnen ze eenvoudig LEGO‑sets uitlenen, reserveren en terugbrengen tijdens hun verblijf.
                        <br/>
                            We bouwden zowel de publieke website voor de kinderen als het beheer­dashboard voor vrijwilligers, waarin sets kunnen worden toegevoegd, beheerd en opgevolgd. Het project bood ons de kans om een realistische situatie na te bootsen waarin we een digitaal platform moesten ontwerpen dat zowel kindvriendelijk, overzichtelijk als praktisch is voor de organisatie.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Concrete & Specifieke Realisaties</h3>
                        <ul className="list-disc list-inside">
                            <li>Inlog- en registratiesysteem met rolverdeling</li>
                            <li>Catalogus</li>
                            <li>Integration with external APIs</li>
                            <li>Second place in pitching contest</li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Wat ik heb geleerd</h3>
                        <p>
                            Ik heb tijdens dit project veel bijgeleerd over Domain‑Driven Design en Clean Architecture door een schaalbare en onderhoudbare .NET API op te bouwen. Daarnaast verdiepte ik mijn kennis in Angular, waar ik leerde werken met component‑gedreven ontwikkeling, services en state‑management. Ook deed ik ervaring op met het integreren van externe APIs, waaronder het opzetten van duidelijke interfaces, error‑handling en het veilig verwerken van externe data.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Mijn bijdrage</h3>
                        <p>
                            Ik heb in dit project de volledige API ontwikkeld, inclusief de structuur, endpoints en dataverwerking. Daarnaast heb ik de dashboardpagina’s ontworpen en geoptimaliseerd, waarbij ik focuste op een duidelijke UI, efficiënte workflows en een vlotte integratie met de backend.
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
                        
                        <foreignObject x="0" y="-120" width="700" height="600" clipPath="url(#cp)">
                            <video
                                src="/Legobib.mp4"
                                autoPlay
                                playsInline
                                muted
                                className="object-contain h-full"
                            />
                        </foreignObject>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col mt-24 gap-8 lg:flex-row-reverse">
                <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="w-full mb-6 mt-4 sm:mt-0 flex justify-center">
                        <CodeTag size="m" rotate="r" className="whitespace-nowrap">SKIL2 Semester 2 Project</CodeTag>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] py-2">Context</h3>
                        <p>
                            In dit groepsproject moesten we een systeem maken voor een de zwemlessen en zwemfeestjes van een lokaal hotel in de Kempen genaamd kempenrust. Onze opdrachtgever was een leerkracht die de rol van hoteleigenaar op zich nam. Het doel was om een realistische situatie na te bootsen en het volledige product te ontwikkelen.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Concrete & Specifieke Realisaties</h3>
                        <ul className="list-disc list-inside">
                            <li>Inlog- en registratiesysteem met rolverdeling (eigenaar, medewerker, zwemleraar, ...)</li>
                            <li>Planningpagina met werkende agenda voor lessen en zwemfeestjes te bekijken</li>
                            <li>Volledig geïntegreerd betalingssysteem</li>
                            <li>Mailtemplate-pagina voor communicatiebeheer</li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Wat ik heb geleerd</h3>
                        <p>
                            Ik heb mijn begrip van Laravel en database kennis verdiept. Ook heb ik mijn vaardigheden verbeterd in het schrijven van schone, herbruikbare Blade-componenten en ervaring opgedaan met het werken met Git en versiebeheer in een teamomgeving en het gebruik van Jira voor projectmanagement.                </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Mijn bijdrage</h3>
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
                        <h3 className="text-xl font-semibold text-[#8f1600] py-2">Context</h3>
                        <p>
                            Voor dit vak mochten we zelf een projectonderwerp kiezen. Ik heb ervoor gekozen om een website met een webshop te maken voor mijn eigen scouts. Het doel was om een gebruiksvriendelijke en functionele website te bouwen waarmee leden eenvoudig spullen konden kopen, activiteiten konden inzien en zich konden aanmelden. Dit project stelde me in staat om mijn technische vaardigheden verder te ontwikkelen, evenals mijn vermogen om een website van begin tot eind te plannen en te implementeren.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Concrete & Specifieke Realisaties</h3>
                        <ul className="list-disc list-inside">
                            <li>Inlog- en registratiesysteem met rolverdeling (leiding,groepsleiding,leden)</li>
                            <li>Webshoppagina</li>
                            <li>Info pagina's per tak</li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Wat ik heb geleerd</h3>
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
                        <h3 className="text-xl font-semibold text-[#8f1600] py-2">Context</h3>
                        <p>
                            Voor dit groepsproject kregen we de vrijheid om zelf een onderwerp te kiezen binnen het vak FullStack essentials. Samen met mijn groep besloten we een digitale oplossing te ontwikkelen voor een fictieve brouwerij genaamd Barley&Hops.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Concrete & Specifieke Realisaties</h3>
                        <ul className="list-disc list-inside">
                            <li>Pagina's over verschillende onderwerpen</li>
                            <li>Het maken en gebruiken van API's</li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Wat ik heb geleerd</h3>
                        <p>
                            Tijdens dit project heb ik leren werken met Javascript en geleerd hoe we API calls konden uitvoeren. Daarnaast heb ik mijn kennis van andere webdesign concepten kunnen verbeteren.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#8f1600] pt-4 py-2">Mijn bijdrage</h3>
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
        </div>
    </>
    )
    
}

export default Projects;