function Navibar() {
    return (
        <nav class="py-5 m-5 flex justify-between">
            <h1 class="text-xl font-bold">My Portfolio</h1>
            <ul class="flex items-center">
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
                        Me contacter !
                    </a>
                </li>
                <li>
                    <a
                        class="bg-gradient-to-r from-emerald-500 text- to-green-600 text-white px-4 py-2 border-none rounded-md ml-8"
                        href="#"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navibar;
