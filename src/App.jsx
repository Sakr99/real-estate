import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import GroupCards from "./components/GroupCards";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";

function App() {
  return (
    <main>
      <Navbar />
      <div className="py-4 ">
        <Banner />
        <GroupCards />
        <About />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}

export default App