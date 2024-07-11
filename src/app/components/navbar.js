import Image from "next/image";
import profilPic from "../assets/profilPic.png";

function Navibar() {
    return (
        <header className="bg-slate-50 rounded">
            <div className="flex justify-center">
                <nav class="m-5 xs:m-2">
                    <ul class="flex items-center lg:text-xl md:text-lg sm:text-sm xs:text-xs lg:gap-20 md:gap-12 sm:gap-4 xs:gap-5">
                        <Image className="w-16 md:w-32 lg:w-48" src={profilPic} alt="Profil Pic"></Image>
                        <li>
                            <a
                                class="bg-gradient-to-r from-emerald-500 text- to-green-600 text-white px-4 xs:px-1 py-2 border-none rounded-xl"
                                href="#"
                            >
                                About Me
                            </a>
                        </li>
                        <li>
                            <a
                                class="bg-gradient-to-r from-emerald-500 text- to-green-600 text-white px-4 xs:px-1 py-2 border-none rounded-xl "
                                href="#"
                            >
                                Experiences
                            </a>
                        </li>
                        <li>
                            <a
                                class="bg-gradient-to-r from-emerald-500 text- to-green-600 text-white px-4 xs:px-1 py-2 border-none rounded-xl "
                                href="#"
                            >
                                Get in touch
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navibar;
