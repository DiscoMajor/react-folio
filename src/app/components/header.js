import Image from "next/image";
import profilPic from "/public/img/profilPic.png";

function Navibar() {
    return (
        <header className="bg-slate-50 rounded font-monserrat">
            <div className="flex justify-center">
                <nav className="m-5 xs:m-2">
                    <ul className="flex items-center lg:text-xl md:text-lg sm:text-sm xs:text-xs lg:gap-20 md:gap-12 sm:gap-4 xs:gap-5">
                        <Image className="w-12 md:w-32 lg:w-40" src={profilPic} alt="Profil Pic"></Image>
                        <li>
                            <a href="#aboutme">Quick Story</a>
                        </li>
                        <li>
                            <a href="#experiences">Projects</a>
                        </li>
                        <li>
                            <a href="#">More about me</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navibar;
