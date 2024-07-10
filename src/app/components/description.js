"use client";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
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
                <h2 class="text-5xl py-2 font-bold md:text-5xl bg-gradient-to-r from-green-600 via-green-500 to-green-300 inline-block text-transparent bg-clip-text ">
                    I'm
                    <span>{typingEffect}</span>
                </h2>

                <p class="text-md py-3 mt-5 leading-8 text-gray-500 max-w-xl mx-auto md:text-xl">
                    Welcome to my
                    <a
                        href="https://nextjs.org"
                        target="_blank"
                        class="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 p-5 m-2"
                    >
                        <RiNextjsFill class="md:text-2xl mr-1" />
                        Next.js
                    </a>
                    Folio
                </p>
            </div>
        </section>
    );
}
export default Intro;
