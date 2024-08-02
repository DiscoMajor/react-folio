"use client";
import { RiNextjsFill } from "react-icons/ri";
import { useTypewriter } from "react-simple-typewriter";

function Intro() {
    const [typingEffect] = useTypewriter({
        words: [` Victor.`, ` your Next Developer.`],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 80,
    });

    return (
        <section className="min-h-70 m-5 flex relative">
            <div className="text-center p-10 xs:p-0 py-10 flex-auto">
                <h2 className="lg:text-6xl md:text-5xl sm:text-4xl xs:text-2xl font-bold py-2 bg-gradient-to-r from-green-600 via-green-500 to-green-300 inline-block text-transparent bg-clip-text">
                    I&apos;m
                    <span>{typingEffect}</span>
                </h2>
            </div>
        </section>
    );
}
export default Intro;
