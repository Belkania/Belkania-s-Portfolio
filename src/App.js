import "./App.css";
import AnimatedCursor from "./components/animatedCursor/AnimatedCursor";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Knowledge from "./components/knowladge/Knowledge";
import Projects from "./components/projects/Projects";
import Story from "./components/story/Story";

function App() {
  return (
    <div className="App">
      {/* <AnimatedCursor /> */}
      <Header />
      <Story />
      <Knowledge />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
