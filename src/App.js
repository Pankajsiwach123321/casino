import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Poker from './components/Poker';
import Nuestros from './components/Nuestros';
import JackPot from './components/JackPot';
import Elegirnos from './components/Elegirnos';
import Razones from './components/Razones';
import Ofertas from './components/Ofertas';
import Coner from './components/Coner';
import Preguntas from './components/Preguntas';
import Lanja from './components/Lanja';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Backtop from './components/Backtop';
import Loader from './components/Loader';
document.body.classList.add("overflow-hidden")
function App() {
  const [preloder, setpreloder] = useState(true)
  setTimeout(() => {
    setpreloder(false)
    document.body.classList.remove("overflow-hidden")

  }, 4000);
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className="App bg-[#00141B] overflow-hidden">
      {preloder && <Loader />}
      <Header />
      <Poker />
      <Nuestros />
      <JackPot />
      <Elegirnos />
      <Razones />
      <Ofertas />
      <Coner />
      <Preguntas />
      <Lanja />
      <Footer />
      <Backtop />
    </div>
  );
}

export default App;
