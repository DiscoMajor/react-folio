import Image from "next/image";
import ReactIcon from "../assets/icons/reactIcon.svg";
import NextjsIcon from "../assets/icons/nextjsIcon.svg";
import TailwinIcon from "../assets/icons/tailwindIcon.svg";
import phpIcon from "../assets/icons/phpIcon.svg";
import mysqlIcon from "../assets/icons/mysqlIcon.svg";
import figmaIcon from "../assets/icons/figmaIcon.svg";
import illustratorIcon from "../assets/icons/illustratorIcon.svg";

export default function Experiences() {
    const experiences = {
        xp1: `Internship at Com6 Interactive`,
        xp2: `Interactive map in JavaScript using LeaftLet librairie and OpenStreetMap`,
        xp3: `Web Developer Training at Adrar Formation`,
    };
    return (
        <div class="flex justify-evenly p-5 bg-slate-100 mx-auto">
            <ul class="grid grid-rows-2 grid-flow-col gap-5 p-4 text-center">
                <h3>FRONT-END</h3>
                <li>
                    <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0" src={ReactIcon} alt="LinkedIn" /> React
                </li>
                <li>
                    <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0" src={NextjsIcon} alt="LinkedIn" /> Next JS
                </li>
                <li>
                    <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0" src={TailwinIcon} alt="LinkedIn" /> TailWind
                </li>
            </ul>
            <ul class="grid grid-rows-2 grid-flow-col gap-5 p-4 text-center">
                <h3>BACK-END</h3>
                <li>
                    <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0" src={phpIcon} alt="LinkedIn" /> PHP
                </li>
                <li>
                    <Image className="w-12 md:w-12 sm:w-12 flex-shrink-0" src={mysqlIcon} alt="LinkedIn" /> My SQL WorkBench
                </li>
            </ul>

            <ul>
                <h3>AUTRES</h3>
                <li>
                    <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0" src={figmaIcon} alt="LinkedIn" /> Figma
                </li>
                <li>
                    <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0" src={illustratorIcon} alt="LinkedIn" /> Illustrator-Photoshop
                </li>
                <li>
                    <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0" src={phpIcon} alt="LinkedIn" /> PHP
                </li>
            </ul>

            <section class="flex flex-col justify-evenly p-3 m-1">
                <h1 class="font-bold lg:text-lg md:text-base sm:text-sm xs:text-xs">{experiences.xp1}</h1>
                <p class="text-sm italic md:text-base sm:text-sm xs:text-xs">
                    Project management,WordPress,Mockups,Front and back-end development(JS,CSS,PHP)
                </p>
                <h3 class="font-bold lg:text-lg md:text-base sm:text-sm xs:text-xs">{experiences.xp2}</h3>
                <p class="text-sm italic md:text-base sm:text-sm xs:text-xs">LeaftLet Librairie, JS, HTML,CSS </p>
                <h3 class="font-bold lg:text-lg md:text-base sm:text-sm xs:text-xs">{experiences.xp3}</h3>
                <p class="text-sm italic sm:text-sm xs:text-xs"> Everything a need to know for a good start 🚀</p>
            </section>
        </div>
    );
}
