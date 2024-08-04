import Image from "next/image";
import profilPic from "/public/img/profilPic.png";
import Link from "next/link";

function Navibar() {
    return (
        <div>
            <nav className="m-5 xs:m-2">
                <ul className="flex justify-evenly items-center lg:text-xl md:text-lg sm:text-base xs:text-xs">
                    <Link href="/">
                        <Image className="w-12 md:w-32 lg:w-40 grayscale hover:grayscale-0" src={profilPic} alt="Profil Pic"></Image>
                    </Link>
                    <li className="font-bold  transition ease-in-out hover:text-green-600 hover:-translate-y-1">
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className="font-bold  transition ease-in-out hover:text-green-600 hover:-translate-y-1">
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navibar;
