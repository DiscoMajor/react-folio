import linkedin from "../assets/icons/linkedin.svg";
import githubicon from "../assets/icons/github.svg";

export default function ContactMe() {
    return (
        <div className="bg-slate-200 mt-10">
            <h1 className="font-extrabold text-4xl">CONTACT</h1>
            <p className="font-medium text-1xl">Feel free to reach out !</p>
            <ul>
                <li>
                    <img src={linkedin} alt="LinkedIn" />
                    <a href="www.linkedin.com/in/victor-lobbé-999848296">LinkedIn.</a>
                </li>
                <li>
                    <img src="" alt="Email" />
                    <a href="victorlobbe@gmail.com">Email.</a>
                </li>
                <li>
                    <img src={githubicon} alt="GitHub" />
                    <a href="https://github.com/DiscoMajor">GitHub</a>
                </li>
            </ul>
        </div>
    );
}
