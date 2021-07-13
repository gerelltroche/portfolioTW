import Hero from './Components/Hero/Hero'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Portfolio from "./Components/Porfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

function App() {

  return (
    <div className={''}>
        <Hero />
        <Nav />
        <About />
        <Portfolio />
        <Contact />
    </div>
  );
}

export default App;
