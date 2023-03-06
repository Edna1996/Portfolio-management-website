import { Skills } from './Skills';
import { Projects } from './Projects';
import { Footer } from './Footer';

function Home() {
  return (
    <div className="home-page">
      {/* <div className="intro">
        <h1>Now studying math becomes easy!</h1>
        <p>
          We know subjects like math can be a problem when studying. Therefore,
          we are here to make math easier and more fun for you!
        </p>
      </div> */}
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
