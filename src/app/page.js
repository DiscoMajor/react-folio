import Intro from "./components/description.js";
import NaviBar from "./components/header.js";
import MoreAbout from "./components/footer.js";
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
                <MoreAbout />
            </body>
        </html>
    );
}

export default App;
