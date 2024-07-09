import Intro from "./components/description.js";
import NaviBar from "./components/navbar.js";
import Experiences from "./components/experiences.js";
import ContactMe from "./components/contact.js";
import AboutMe from "./components/aboutme.js";

function App() {
    return (
        <>
            <NaviBar />
            <Intro />
            <AboutMe />
            <Experiences />
            <ContactMe />
        </>
    );
}

export default App;
