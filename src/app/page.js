import Intro from "./components/banner.js";
import NaviBar from "./components/header.js";
import AboutMe from "./components/aboutme.js";
import TechnoSkills from "./components/technoskills.js";

function App() {
    return (
        <html className="overflow-y-scroll no-scrollbar scroll-smooth" suppressHydrationWarning={true}>
            <body suppressHydrationWarning={true}>
                <NaviBar />
                <Intro />
                <AboutMe />
                <TechnoSkills />
            </body>
        </html>
    );
}

export default App;
