import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Reveal from "./components/framer-motion/Reveal";
import GroupCards from "./components/GroupCards";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";

function App() {
  return (
    <main>
      <Navbar />
      <div className="py-4 ">
        <Reveal>
          <Banner />
        </Reveal>
        <Reveal>
          <GroupCards />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Footer />
        </Reveal>
      </div>
    </main>
  );
}

export default App