"use client";
import { FaReact } from "react-icons/fa6";
import { useTypewriter } from "react-simple-typewriter";

function Intro() {
    const [typingEffect] = useTypewriter({
        words: [` Victor.`, ` a React Developer.`],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 80,
    });
    return (
        <section class="min-h-70 m-5 flex relative">
            <div class="text-center p-10 py-10 flex-auto ">
                <h2 class="text-5xl py-2 font-medium md:text-5xl text-teal-600  dark:text-teal-400 ">
                    I'm
                    <span>{typingEffect}</span>
                </h2>
                <p class="text-md py-3 mt-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl">
                    Welcome to my <FaReact class="inline-block text-teal-500 md:text-3xl" /> TailWind Folio 🍃
                </p>
            </div>
        </section>
    );
}
export default Intro;
