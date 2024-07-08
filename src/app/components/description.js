import { FaReact } from "react-icons/fa";

function AboutMe() {
    return (
        <section className="min-h-screen">
            <div className="text-center p-10 py-10">
                <h2 className="matricule text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">Victor Lobbé</h2>
                <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Web Developper</h3>
                <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl">
                    Welcome to my React <FaReact className="h-20 w-25" /> - TailWind Folio 🍃
                </p>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400"></div>
            </div>
        </section>
    );
}
export default AboutMe;

//! REVOIR TAILWIND + REACTICONS comment le mettre à la suite et le positionner.
//! Idem, voir pour ajouter un nom de class pour modifier le CSS (je veux faire un after sous mon texte H2)
