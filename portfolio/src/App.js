import Navbar from "./components/Navbar/Navbar.js";
import Content from "./components/Content/Content.js";
import Experience from "./components/Experience/Experience.js";
import Project from "./components/Projects/Project.js";

function App() {
  return (
    <>
      <div className=" bg-gradient-to-r from-black to-slate-900 2xl:h-screen 2xl:w-screen h-fit w-fit px-6 cursor-default">
        <Navbar />
        <Content />
        <Experience />
        <Project />
      </div>
    </>
  );
}

export default App;
