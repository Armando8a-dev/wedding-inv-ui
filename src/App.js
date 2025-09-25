import './App.css';
import Home from "./components/Home";
import Dedicatory from "./components/Dedicatory";
import Countdown from "./components/Countdown";
import Family from "./components/Family";
import Places from "./components/Places";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Event from "./components/Event";
import Gift from "./components/Gift";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Attendance from "./components/Attendance";

function App() {
    return (
        <div>
            <Attendance/>
            <Home/>
            <div className="w-full h-[5px] bg-white relative"/>
            <Dedicatory/>
            <div className="w-full h-[5px] bg-white relative"/>
            <Countdown/>
            <div className="w-full h-[5px] bg-white relative"/>
            <Family/>
            <div className="w-full h-[5px] bg-white relative"/>
            <Places/>
            <div className="w-full h-[5px] bg-white relative"/>
            <Timeline/>
            <div className="w-full h-[5px] bg-white relative"/>
            <Gallery/>
            <div className="w-full h-[5px] bg-white relative"/>
            <Event/>
            <div className="w-full h-[5px] bg-white relative"/>
            <Gift/>
            <div className="w-full h-[5px] bg-white relative"/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
