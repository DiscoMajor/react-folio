import Image from "next/image";
import ReactIcon from "/public/icons/reactIcon.svg";
import NextjsIcon from "/public/icons/nextjsIcon.svg";
import TailwinIcon from "/public/icons/tailwindIcon.svg";
import phpIcon from "/public/icons/phpIcon.svg";
import mysqlIcon from "/public/icons/mysqlIcon.svg";
import figmaIcon from "/public/icons/figmaIcon.svg";
import illustratorIcon from "/public/icons/illustratorIcon.svg";

export default function TechnoSkills() {
    return (
        <div className="flex justify-around gap-10 flex-wrap roboto mb-11">
            <div className="flex flex-col bg-slate-50 border-2 rounded border-gray-200 hover:border-green-600 hover:bg-green-100 shadow-md box-content h-56 w-64  transformation">
                <ul className="p-5  space-y-6  ">
                    <h3 className="font-bold text-center text-2xl bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-transparent bg-clip-text">
                        FRONT-END
                    </h3>
                    <li className="flex gap-2 items-center">
                        <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0 inline-block  " src={ReactIcon} alt="LinkedIn" /> React
                    </li>
                    <li className="flex gap-2 items-center">
                        <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0 inline-block" src={NextjsIcon} alt="LinkedIn" /> Next JS
                    </li>
                    <li className="flex gap-2 items-center">
                        <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0 inline-block" src={TailwinIcon} alt="LinkedIn" /> TailWind
                    </li>
                </ul>
            </div>

            <div className="flex flex-col bg-slate-50 border-2 rounded border-gray-200 hover:border-green-600 hover:bg-green-100 shadow-md box-content h-56 w-64">
                <ul className="p-5  space-y-6">
                    <h3 className="font-bold text-center text-2xl bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-transparent bg-clip-text ">
                        BACK-END
                    </h3>
                    <li className="flex gap-2 items-center">
                        <Image className="w-7 md:w-7 sm:w-7 flex-shrink-0 inline-block" src={phpIcon} alt="LinkedIn" /> PHP
                    </li>
                    <li className="flex gap-2 items-center">
                        <Image className="w-11 md:w-11 sm:w-11 flex-shrink-0 inline-block" src={mysqlIcon} alt="LinkedIn" /> My SQL
                        WorkBench
                    </li>
                </ul>
            </div>

            <div className="flex flex-col bg-slate-50 border-2 rounded border-gray-200 hover:border-green-600 hover:bg-green-100 shadow-md box-content h-56 w-64">
                <ul className="p-5  space-y-6">
                    <h3 className="font-bold text-center text-2xl bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-transparent bg-clip-text ">
                        AUTRES
                    </h3>
                    <li className="flex gap-2 items-center">
                        <Image className="w-5 md:w-5 sm:w-5 flex-shrink-0 inline-block" src={figmaIcon} alt="LinkedIn" /> Figma
                    </li>
                    <li className="flex gap-2 items-center">
                        <Image className="w-6 md:w-6 sm:w-6 flex-shrink-0 inline-block" src={illustratorIcon} alt="LinkedIn" />
                        Illustrator-Photoshop
                    </li>
                </ul>
            </div>
        </div>
    );
}
