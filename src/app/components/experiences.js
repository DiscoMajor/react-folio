export default function Experiences() {
    const experiences = {
        xp1: `Internship at Com6 Interactive`,
        xp2: `Interactive map in JavaScript using LeaftLet librairie and OpenStreetMap`,
        xp3: `Web Developer Training at Adrar Formation`,
    };
    return (
        <div class="flex flex-wrap justify-evenly p-5 bg-leafbackground max-w-screen-2xl min-w-screen mx-auto">
            <ul class="grid grid-rows-2 grid-flow-col gap-6 p-4 text-center">
                <li>
                    <img class="rounded-xl " src="https://picsum.photos/100" alt="" />
                    <p>REACT</p>
                </li>
                <li>
                    <img class="rounded-xl " src="https://picsum.photos/100" alt="" />
                    <p>JAVASCRIPT</p>
                </li>
                <li>
                    <img class="rounded-xl " src="https://picsum.photos/100" alt="" />
                    <p>TAILWIND </p>
                </li>
                <li>
                    <img class="rounded-xl " src="https://picsum.photos/100" alt="" />
                    <p>ILLUSTRATOR</p>
                </li>
                <li>
                    <img class="rounded-xl " src="https://picsum.photos/100" alt="" />
                    <p>PHP</p>
                </li>
                <li>
                    <img class="rounded-xl " src="https://picsum.photos/100" alt="" />
                    <p>FIGMA</p>
                </li>
            </ul>

            <section class="flex flex-col justify-evenly p-3 m-3 bg-green-500 rounded-xl">
                <h1 class="text-base font-bold">{experiences.xp1}</h1>
                <p class="text-sm italic">Project management,WordPress,Mockups,Front and back-end development(JS,CSS,PHP)</p>
                <h3 class="text-base font-bold">{experiences.xp2}</h3>
                <p class="text-sm italic">LeaftLet Librairie, JS, HTML,CSS </p>
                <h3 class="text-base font-bold">{experiences.xp3}</h3>
                <p class="text-sm italic"> Everything a need to know for a good start 🚀</p>
            </section>
        </div>
    );
}
