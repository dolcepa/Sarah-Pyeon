import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Music from './components/Music';
import Leadership from './components/Leadership';
import Art from './components/Art';
import Honors from './components/Honors';
import Projects from './components/Projects';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoFundMeButton from './components/GoFundMeButton';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Research />
        <Music />
        <Leadership />
        <Art />
        <Honors />
        <Projects />
        <Volunteer />
        <Contact />
      </main>
      <Footer />
      <GoFundMeButton />
    </div>
  );
}

export default App;

