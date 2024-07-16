import Image from "next/image";
import ReactIcon from "../assets/icons/reactIcon.svg";
import NextjsIcon from "../assets/icons/nextjsIcon.svg";
import TailwinIcon from "../assets/icons/tailwindIcon.svg";
import phpIcon from "../assets/icons/phpIcon.svg";
import mysqlIcon from "../assets/icons/mysqlIcon.svg";
import figmaIcon from "../assets/icons/figmaIcon.svg";
import illustratorIcon from "../assets/icons/illustratorIcon.svg";

export default function TechnoSkills() {
    return (
        <div class="flex justify-evenly flex-wrap mt-28 sm:gap-5 xs:gap-5 sm:mt-20 xs:mt-20" id="experiences">
            <div className="flex flex-col  bg-slate-50 border-2 rounded border-gray-200 hover:border-green-600 hover:bg-green-100 shadow-md box-content h-56 w-64">
                <ul class="p-5  space-y-6">
                    <h3 className="font-bold text-center text-2xl bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-transparent bg-clip-text ">
                        FRONT-END
                    </h3>
                    <li class="flex gap-2 items-center">
                        <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0 inline-block  " src={ReactIcon} alt="LinkedIn" /> React
                    </li>
                    <li class="flex gap-2 items-center">
                        <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0 inline-block" src={NextjsIcon} alt="LinkedIn" /> Next JS
                    </li>
                    <li class="flex gap-2 items-center">
                        <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0 inline-block" src={TailwinIcon} alt="LinkedIn" /> TailWind
                    </li>
                </ul>
            </div>

            <div className="flex flex-col bg-slate-50 border-2 rounded border-gray-200 hover:border-green-600 hover:bg-green-100 shadow-md box-content h-56 w-64 ">
                <ul class="p-5  space-y-6">
                    <h3 className="font-bold text-center text-2xl bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-transparent bg-clip-text ">
                        BACK-END
                    </h3>
                    <li class="flex gap-2 items-center">
                        <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0 inline-block" src={phpIcon} alt="LinkedIn" /> PHP
                    </li>
                    <li class="flex gap-2 items-center">
                        <Image className="w-12 md:w-12 sm:w-12 flex-shrink-0 inline-block" src={mysqlIcon} alt="LinkedIn" /> My SQL
                        WorkBench
                    </li>
                </ul>
            </div>

            <div className="flex flex-col bg-slate-50 border-2 rounded border-gray-200 hover:border-green-600 hover:bg-green-100 shadow-md box-content h-56 w-64">
                <ul class="p-5  space-y-6">
                    <h3 className="font-bold text-center text-2xl bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-transparent bg-clip-text ">
                        AUTRES
                    </h3>
                    <li class="flex gap-2 items-center">
                        <Image className="w-6 md:w-6 sm:w-6 flex-shrink-0 inline-block" src={figmaIcon} alt="LinkedIn" /> Figma
                    </li>
                    <li class="flex gap-2 items-center">
                        <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0 inline-block" src={illustratorIcon} alt="LinkedIn" />
                        Illustrator-Photoshop
                    </li>
                </ul>
            </div>
        </div>
    );
}
