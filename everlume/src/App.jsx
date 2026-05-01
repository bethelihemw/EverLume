import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;