import Link from "next/link";
import NaviBar from "@/app/components/header.js";

function Project1() {
    return (
        <main>
            <NaviBar></NaviBar>
            <h1 className="text-center text-blue-600 font-bold text-2xl"> TEST ROUTING APP</h1>
            <Link href="/projects">
                {" "}
                <p className="text-center text-blue-300 font-bold text-base mt-16">Pages projets</p>
            </Link>
        </main>
    );
}

export default Project1;
