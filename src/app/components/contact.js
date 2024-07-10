import Image from "next/image";
import linkedin from "../assets/icons/linkedin.svg";
import githubicon from "../assets/icons/github.svg";

export default function ContactMe() {
    return (
        <footer>
            <div className="bg-slate-200 mt-10 ">
                <h2 className="font-extrabold text-4xl">CONTACT</h2>
                <p className="font-medium text-1xl">Feel free to reach out !</p>
                <ul>
                    <li>
                        <Image width={25} height={25} src={linkedin} alt="LinkedIn" />
                        <a href="www.linkedin.com/in/victor-lobbé-999848296">LinkedIn.</a>
                    </li>
                    <li>
                        <Image src="" alt="Email" />
                        <a href="mailto:victorlobbe@gmail.com">Email.</a>
                    </li>
                    <li>
                        <Image width={25} height={25} src={githubicon} alt="GitHub" />
                        <a href="https://github.com/DiscoMajor">GitHub</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
