import Navbar from "./components/Navbar/Navbar.js";
import Content from "./components/Content/Content.js";
import Experience from "./components/Experience/Experience.js";

function App() {
  return (
    <>
      <div className=" bg-gradient-to-r from-black to-slate-900 h-fit w-fit pl-6 pr-6 cursor-default">
        <Navbar />
        <Content />
        <Experience />
      </div>
    </>
  );
}

export default App;
