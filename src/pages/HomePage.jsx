import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import HowItWorks from "../components/HowItWorks";
import ImageSection from "../components/ImageSection";
import Projects from "../components/Projects";
import ResumeSection from "../components/ResumeSection";
import Skills from "../components/Skills";
const HomePage = () => {
    return (
        <div className="flex flex-col">
            <Banner />
            <AboutUs />
            <Projects />
            <Skills />
            <ContactUs />
            <ResumeSection />
        </div>
    );
}

export default HomePage;