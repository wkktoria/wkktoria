import About from "./components/About";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
