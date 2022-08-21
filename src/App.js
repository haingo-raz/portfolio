import {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import './App.scss';
import {ImLinkedin, ImGithub, ImTwitter} from 'react-icons/im';
import {GrMail} from 'react-icons/gr';
import {IoIosArrowDropupCircle} from 'react-icons/io';
import Project from './components/Project';

function App() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
  }, []);
  

  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth' 
      });
  };

  return (
    <>
      <section id="homepage">

        <div className="social-info">
          <div className="container">
            <img src="cute.png" alt=""/>
            <h1 className="title">Haingo R.</h1>
            <p>Lorum Ipsum</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/haingo-r-3a40751b3/" target="_blank" rel="noopener noreferrer"><ImLinkedin/></a>
              <a href="https://github.com/haingo-raz" target="_blank" rel="noopener noreferrer"><ImGithub/></a>
              <a href="https://twitter.com/hngraz" target="_blank" rel="noopener noreferrer"><ImTwitter/></a>
              <a href="mailto: haingo.razafindranto@gmail.com"><GrMail/></a>
            </div>
          </div>
        </div>

        <div className="description">
          <h1 className="title">About Me</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. .
          </p>
          <div className="button-section">
            <a href="haingo.pdf" target="_blank" rel="noreferrer">CV</a>
            <Link to="portfolio" smooth={true}>Portfolio</Link>
          </div>
        </div>

      </section>

      <section id="portfolio">
        <h1 className="title">Projects</h1>

        <div className="projects">

          <Project imgPath="memoryGame.png" name="Memory Card Game" githubLink="https://github.com/haingo-raz/Javascript-Memory-Game" demoLink="https://memory-game-demo-app.herokuapp.com/"/>
          <Project imgPath="studySession.png" name="Study Session Management" githubLink="https://github.com/haingo-raz/study-session-management" demoLink="http://brilliantstudy.co/"/>
          <Project imgPath="comingSoon.png" name="Future project" githubLink="https://github.com/haingo-raz/" demoLink=""/>
          <Project imgPath="comingSoon.png" name="Future project" githubLink="https://github.com/haingo-raz/" demoLink=""/>

          
          </div>
      </section>

      {showButton && (
          <Link to="/" onClick={scrollToTop}>
              <IoIosArrowDropupCircle className="btn-top"/>
          </Link>
        )}
    </>
  );
}

export default App;
