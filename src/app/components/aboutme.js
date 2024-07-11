import Image from "next/image";
import linkedin from "../assets/icons/linkedin.svg";
import githubicon from "../assets/icons/github.svg";
import mailicon from "../assets/icons/mailicon.svg";

export default function AboutMe() {
    return (
        <section className="flex flex-col lg:mx-24 sm:mx-4 relative mb-10 text-justify lg:text-lg md:text-base sm:text-sm xs:text-xs">
            <div className="p-5 ">
                <p>
                    Je suis à la recherche d’une entreprise pour réaliser une alternance d’un an en tant que Concepteur Développeur
                    d&apos;Applications avec l&apos;IPI de Toulouse, avec un rythme d&apos;une semaine à l&apos;école et trois semaines en
                    entreprise. Par la suite, mon ambition est de poursuivre jusqu&apos;au mastère Expert en Ingénierie Logicielle.
                </p>
                <p className="my-5">
                    Passionné par le code en autodidacte, j’ai saisi l&apos;opportunité de me reconvertir et faire de cette passion mon
                    métier. Je suis curieux et créatif. Bien que je reste ouvert à l&apos;apprentissage de divers langages, j&apos;aspire à
                    me spécialiser d&apos;avantage.
                </p>
            </div>

            <div className="flex  gap-3 mx-5">
                <button className="border-2 rounded border-gray-200 py-2 px-3 hover:border-green-600 hover:bg-green-100 shadow-md">
                    <a href="www.linkedin.com/in/victor-lobbé-999848296">
                        <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0" src={linkedin} alt="LinkedIn" />
                    </a>
                </button>

                <button className="border-2 rounded border-gray-200 py-2 px-3 hover:border-green-600 hover:bg-green-100 shadow-md">
                    <a href="https://github.com/DiscoMajor">
                        <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0" src={githubicon} alt="GitHub" />
                    </a>
                </button>

                <button className="border-2 rounded border-gray-200 py-2 px-3 hover:border-green-600 hover:bg-green-100 shadow-md">
                    <a href="mailto:victorlobbe@gmail.com">
                        <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0" src={mailicon} alt="Email" />
                    </a>
                </button>
            </div>

            <div className="absolute right-5 bottom-0 lg:text-lg md:text-base sm:text-xs">
                <a className=" text-green-500 hover:text-green-600 hover:underline" href="CV" target="blank">
                    Téléchargez le CV
                </a>
            </div>
        </section>
    );
}
