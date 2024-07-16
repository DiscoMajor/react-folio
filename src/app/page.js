import Intro from "./components/description.js";
import NaviBar from "./components/navbar.js";
import Experiences from "./components/technoskills.js";
import MoreAbout from "./components/footer.js";
import AboutMe from "./components/aboutme.js";
import TechnoSkills from "./components/technoskills.js";

function App() {
    return (
        <html className="overflow-y-scroll no-scrollbar scroll-smooth">
            <body>
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
