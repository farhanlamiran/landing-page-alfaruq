import About from "../../components/Modules/LandingPage/About";
import Activities from "../../components/Modules/LandingPage/Activities";
import Departments from "../../components/Modules/LandingPage/Departments";
import Gallery from "../../components/Modules/LandingPage/Gallery";
import Hero from "../../components/Modules/LandingPage/Hero";
import Testimonials from "../../components/Modules/LandingPage/Testimonials";
import Navbar from "./Navbar";

function Landing() {
    return (
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <Departments/>
        <Activities/>
        <Testimonials/>
        <Gallery/>
        </>

    )
}
export default Landing;