import "./home.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
      <section className="home">
          <div
            className="bg-image"
            style={{ backgroundImage: "url(https://i.ibb.co/wRjcnGL/me.jpg)" }}
          ></div>
          
          <div className="text">
            <div className="intro">
                <h2 className="mb-1">Hi, i'm</h2>
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
            <div className="flex gap-5 justify-center">
              <Link to="/portfolio" className="btn btn-outline btn-primary">
                Portfolio
              </Link>
              <Link to="/about" className="btn btn-outline btn-primary">
                About
              </Link>
              <Link to="/contact" className="btn btn-outline btn-primary">
                Contact
              </Link>
            </div>
              
          </div>
      </section>
  );
};

export default Home;
