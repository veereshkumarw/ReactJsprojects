import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from './components/Companies/Companies';
import "./App.css";
import Residencies from "./components/Residencies/Residencies";
import Values from "./components/Values/Values";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* header n hero are taken in single div bcoz the black-white gradient
      is shared by both header n hero section */}
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Values/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>

  );
}

export default App;
