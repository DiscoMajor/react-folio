function Navibar() {
    return (
        <nav className="py-10 m-10 flex justify-between">
            <h1 className="text-xl">Welcome, take a sit.</h1>
            <ul className="flex items-center">
                <li>
                    <a
                        className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                        href="#"
                    >
                        Me contacter !
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navibar;
