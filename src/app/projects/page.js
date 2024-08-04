import NaviBar from "../components/header.js";
import Link from "next/link";

function Projects() {
    return (
        <main>
            <NaviBar></NaviBar>
            <h1 className="text-center text-green-600 font-bold text-2xl"> En construction... </h1>
            {/* <Link href="/projects/projet1">
                <p className="text-center text-green-300 font-bold text-base mt-16">Mon premier projet</p>
            </Link> */}
        </main>
    );
}

export default Projects;
