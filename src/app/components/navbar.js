function Navibar() {
    return (
        <div className="flex justify-center ">
            <nav class="py-5 m-5 ">
                <ul class="flex items-center gap-7">
                    <h1>Mon portefolio</h1>
                    <li>
                        <a
                            class="bg-gradient-to-r from-emerald-500 text- to-green-600 text-white px-4 py-2 border-none rounded-md ml-8"
                            href="#"
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            class="bg-gradient-to-r from-emerald-500 text- to-green-600 text-white px-4 py-2 border-none rounded-md ml-8"
                            href="#"
                        >
                            Experiences
                        </a>
                    </li>
                    <li>
                        <a
                            class="bg-gradient-to-r from-emerald-500 text- to-green-600 text-white px-4 py-2 border-none rounded-md ml-8"
                            href="#"
                        >
                            Get in touch
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navibar;
