import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OurMoments from './components/OurMoments';
import About from './components/about';
import Footer from './components/footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <About />
            <OurMoments />
            <Footer />
        </div>
    );
}
