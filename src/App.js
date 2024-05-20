import Navbar from "./components/Navbar/Navbar.js";
import Content from "./components/Content/Content.js";
import Experience from "./components/Experience/Experience.js";
import Project from "./components/Projects/Project.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-black to-slate-900 h-full w-full sm:h-full sm:full cursor-default ">
        <Navbar />
        <Content />
        <Experience />
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default App;
