import "./home.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import me from '../../assets/me.jpg'
import { motion } from "framer-motion";

export const Home = () => {
  return (
      <motion.section
        className="home"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'linear',
          duration: .4,
        }}
      >
          <div
            className="bg-image"
            style={{ backgroundImage: `url(${me})` }}
          ></div>
          
          <div className="text">
            <div className="intro">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h2 className="mb-1">Hi, I'm</h2>
                <h1>
                  <Typewriter
                    options={{
                      strings: [
                        'Xavier Grenouillet',
                        'Web developer',
                        'Freelance',
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1">Dedicated technology enthusiast with an insatiable curiosity for unraveling the complexities of our digital world.</p>
            </div>

            <div className="cta">
              <Link to="/projects" className="btn  btn-primary btn-outline">
                Projects
              </Link>
              <Link to="/about" className="btn  btn-primary btn-outline">
                About
              </Link>
              <Link to="/contact" className="btn  btn-primary  btn-outline">
                Contact
              </Link>
            </div>
              
          </div>
      </motion.section>
  );
};

export default Home;
