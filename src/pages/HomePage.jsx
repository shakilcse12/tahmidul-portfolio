import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import HowItWorks from "../components/HowItWorks";
import ImageSection from "../components/ImageSection";
const HomePage = () => {
    return (
        <div className="flex flex-col">
            <Banner />
            <HowItWorks />
            <ImageSection />
            <ContactUs />
            <AboutUs />
        </div>
    );
}

export default HomePage;