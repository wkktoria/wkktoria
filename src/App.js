import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <h1 className="text-center">Hello</h1>
      <Footer />
    </div>
  );
}

export default App;
