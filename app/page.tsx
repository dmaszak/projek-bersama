import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OurMoments from './components/OurMoments';
import About from './components/about';

export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <OurMoments />
            <About />
        </div>
    );
}
