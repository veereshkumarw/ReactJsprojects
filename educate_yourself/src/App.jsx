
import About from './About.jsx';
import './App.css';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import Services from './Services.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

// this is used for navigation in url Selection. we can directly navigate to required page like home, contact, services like in url:
// localhost:3000/services or /home or /about to get required page.

function App() {
  return (

    <BrowserRouter>
    <Header/>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>


    // <div>
    //  <About/>
    //  <Contact/> 
    //  <Home/>
    //  <Services/>

    // </div>
  );
}

export default App;
