import "./App.css";
import Adidas from "./components/Adidas/Adidas";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import SamsungSection from "./components/SamsungSection/SamsungSection";
import Tennents from "./components/Tennents/Tennents";
import Footer from "./components/footer/Footer";
import KasperSky from "./components/kaspersky/KasperSky";
import PepsiSection from "./components/pepsiSection/PepsiSection";
import SunnySide from "./components/sunnyside/SunnySide";
import Adidas_4D from './components/Adidas_4D/Adidas_4D'
import Architects from './components/Architects/Architects'
import David from './components/David/David'
import Inputtype from "./components/Inputtype";

function App() {
  return (
    <>
        <Header />
        {/* <Inputtype /> */}
      <div className="overflow-hidden w-full  mx-auto" >
        <HeroSection />
        <Adidas />
        <SamsungSection />
        <KasperSky />
        <PepsiSection />
        <SunnySide />
        <Adidas_4D />
      <Architects/>
      <David/>
        <Tennents />

        <Footer />
      </div>
    </>
  );
}

export default App;
