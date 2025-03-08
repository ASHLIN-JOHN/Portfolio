import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AnimationWrapper from './components/AnimationWrapper';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <AnimationWrapper>
          <Hero />
        </AnimationWrapper>
        <AnimationWrapper>
          <About />
        </AnimationWrapper>
        <AnimationWrapper>
          <Projects />
        </AnimationWrapper>
        <AnimationWrapper>
          <Skills />
        </AnimationWrapper>
        <AnimationWrapper>
          <Contact />
        </AnimationWrapper>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;