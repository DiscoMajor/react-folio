import Intro from "./components/description.js";
import NaviBar from "./components/navbar.js";
import Experiences from "./components/experiences.js";
import MoreAbout from "./components/footer.js";
import AboutMe from "./components/aboutme.js";

function App() {
    return (
        <html className="overflow-y-scroll no-scrollbar scroll-smooth">
            <body>
                <NaviBar />
                <Intro />
                <AboutMe />
                <Experiences />
                <MoreAbout />
            </body>
        </html>
    );
}

export default App;
