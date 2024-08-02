"use client";
import { RiNextjsFill } from "react-icons/ri";
import { useTypewriter } from "react-simple-typewriter";

function Intro() {
    const [typingEffect] = useTypewriter({
        words: [` Victor.`, ` your 'Next' Developer.`],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 80,
    });

    return (
        <section className="min-h-70 m-5 flex relative min-h-70">
            <div className="text-center p-10 xs:p-0 py-10 flex-auto space-y-10">
                <h2 className="lg:text-6xl md:text-5xl sm:text-4xl xs:text-2xl font-bold py-2 bg-gradient-to-r from-green-600 via-green-500 to-green-300 inline-block text-transparent bg-clip-text ">
                    I&apos;m
                    <span>{typingEffect}</span>
                </h2>

                <p className="md:text-md lg:text-xl sm:text-sm py-3 mt-5 leading-8 text-gray-500  mx-auto md:text-xl">
                    Welcome to my
                    <a
                        href="https://nextjs.org"
                        target="_blank"
                        className="inline-flex items-center rounded border border-neutral-200 bg-neutral-100 text-sm leading-4 no-underline dark:border-neutral-500 dark:bg-neutral-500 dark:text-neutral-100 gap-2 p-3 m-2 hover:animate-bounce"
                    >
                        <RiNextjsFill className="md:text-2xl" />
                        Next.js
                    </a>
                    Folio
                </p>
            </div>
        </section>
    );
}
export default Intro;
