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
        <div class="grid grid-cols-3 mt-28 p-5 gap-24 mx-auto " id="experiences">
            <ul class="flex flex-col justify-around items-center gap-5 bg-slate-50 border-2 rounded border-gray-200 py-2 px-3 hover:border-green-600 hover:bg-green-100 shadow-md ">
                <h3 className="font-bold">FRONT-END</h3>
                <li>
                    <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0 inline-block" src={ReactIcon} alt="LinkedIn" /> React
                </li>
                <li>
                    <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0 inline-block" src={NextjsIcon} alt="LinkedIn" /> Next JS
                </li>
                <li>
                    <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0 inline-block" src={TailwinIcon} alt="LinkedIn" /> TailWind
                </li>
            </ul>
            <ul class="flex flex-col justify-around items-center gap-5 bg-slate-50 border-2 rounded border-gray-200 py-2 px-3 hover:border-green-600 hover:bg-green-100 shadow-md p-10">
                <h3 className="font-bold">BACK-END</h3>
                <li>
                    <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0 inline-block" src={phpIcon} alt="LinkedIn" /> PHP
                </li>
                <li>
                    <Image className="w-12 md:w-12 sm:w-12 flex-shrink-0 inline-block" src={mysqlIcon} alt="LinkedIn" /> My SQL WorkBench
                </li>
            </ul>

            <ul class="flex flex-col justify-around items-center gap-5 bg-slate-50 border-2 rounded border-gray-200 py-2 px-3 hover:border-green-600 hover:bg-green-100 shadow-md">
                <h3 className="font-bold">AUTRES</h3>
                <li>
                    <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0 inline-block" src={figmaIcon} alt="LinkedIn" /> Figma
                </li>
                <li>
                    <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0 inline-block" src={illustratorIcon} alt="LinkedIn" />{" "}
                    Illustrator-Photoshop
                </li>
            </ul>

            {/* <section className="grid col-span-3 gap-2 mt-10 mx-auto">
                <h1 class="font-bold lg:text-lg md:text-base sm:text-sm xs:text-xs">{experiences.xp1}</h1>
                <p class="text-sm italic md:text-base sm:text-sm xs:text-xs">
                    Project management,WordPress,Mockups,Front and back-end development(JS,CSS,PHP)
                </p>
                <h1 class="font-bold lg:text-lg md:text-base sm:text-sm xs:text-xs">{experiences.xp2}</h1>
                <p class="text-sm italic md:text-base sm:text-sm xs:text-xs">LeaftLet Librairie, JS, HTML,CSS </p>
                <h1 class="font-bold lg:text-lg md:text-base sm:text-sm xs:text-xs">{experiences.xp3}</h1>
                <p class="text-sm italic sm:text-sm xs:text-xs"> Everything a need to know for a good start 🚀</p>
            </section> */}
        </div>
    );
}
