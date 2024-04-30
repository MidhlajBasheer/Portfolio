import Navbar from "./components/Navbar/Navbar.js";
import Content from "./components/Content/Content.js";
// import Experience from "./components/Experience/Experience.js";

function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-900 h-screen pl-8 pr-4">
      <Navbar />
      <Content />
      {/* <Experience /> */}
    </div>
  );
}

export default App;
