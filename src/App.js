import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <h1 className="text-center">Hello</h1>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
