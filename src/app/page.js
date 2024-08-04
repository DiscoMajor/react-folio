import Intro from "./components/banner.js";
import NaviBar from "./components/header.js";
import Description from "./components/description.js";
import TechnoSkills from "./components/technoskills.js";

function App() {
    return (
        <html className="overflow-y-scroll no-scrollbar scroll-smooth" suppressHydrationWarning={true}>
            <body suppressHydrationWarning={true}>
                <NaviBar />
                <Intro />
                <Description />
                <TechnoSkills />
            </body>
        </html>
    );
}

export default App;
