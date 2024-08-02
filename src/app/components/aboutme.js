import Image from "next/image";
import linkedin from "/public/icons/linkedin.svg";
import githubicon from "/public/icons/github.svg";
import mailicon from "/public/icons/mailicon.svg";

export default function AboutMe() {
    return (
        <section className=" flex flex-col lg:mx-24 sm:mx-4 relative text-justify lg:text-lg md:text-base sm:text-sm xs:text-xs p-20 mb-10">
            <div className="leading-10 space-y-6">
                <p>
                    Actuellement
                    <span className="inline-flex items-center rounded border border-neutral-200 bg-neutral-100 text-sm no-underline dark:border-neutral-500 dark:bg-neutral-500 dark:text-neutral-100  leading-3 p-2 m-2 xs:text-xs xs:p-1">
                        développeur web
                    </span>
                    je suis à la recherche d&apos;une entreprise pour réaliser une
                    <span className="inline-flex  rounded border border-neutral-200 bg-neutral-100 text-sm no-underline dark:border-neutral-500 dark:bg-neutral-500 dark:text-neutral-100 leading-3 p-2 m-2 xs:text-xs xs:p-1">
                        alternance
                    </span>
                    d&apos;un an en tant que Concepteur Développeur d&apos;Applications à l&apos;IPI de Toulouse, avec un rythme d&apos;une
                    semaine à l&apos;école et trois semaines en entreprise.
                </p>
                <p>
                    Par la suite,
                    <span className="inline-flex items-center rounded border border-neutral-200 bg-neutral-100 text-sm no-underline dark:border-neutral-500 dark:bg-neutral-500 dark:text-neutral-100 leading-3 p-2 m-2 xs:text-xs xs:p-1">
                        mon ambition
                    </span>
                    est de poursuivre jusqu&apos;au mastère Expert en Ingénierie Logicielle. Je suis curieux et créatif. Bien que je reste
                    ouvert à l&apos;apprentissage de divers langages, j&apos;aspire à me spécialiser davantage.
                </p>
            </div>

            <div className="flex gap-5 mt-8">
                <button className="border-2 rounded border-gray-200 py-2 px-3 hover:border-green-600 hover:bg-green-100 shadow-md  transition ease-in-out hover:-translate-y-1">
                    <a href="https://linkedin.com/in/victor-lobbé-999848296" target="_blank">
                        <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0" src={linkedin} alt="LinkedIn" target="_blank" />
                    </a>
                </button>

                <button className="border-2 rounded border-gray-200 py-2 px-3 hover:border-green-600 hover:bg-green-100 shadow-md  transition ease-in-out hover:-translate-y-1">
                    <a href="https://github.com/DiscoMajor" target="_blank">
                        <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0" src={githubicon} alt="GitHub" />
                    </a>
                </button>

                <button className="border-2 rounded border-gray-200 py-2 px-3 hover:border-green-600 hover:bg-green-100 shadow-md  transition ease-in-out hover:-translate-y-1">
                    <a href="mailto:victorlobbe@gmail.com">
                        <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0" src={mailicon} alt="Email" />
                    </a>
                </button>
            </div>

            <div className="absolute right-20 bottom-20 lg:text-lg md:text-base sm:text-xs">
                <a className=" text-green-500 hover:text-green-600 hover:underline" href="CV" target="blank">
                    Téléchargez le CV
                </a>
            </div>
        </section>
    );
}
