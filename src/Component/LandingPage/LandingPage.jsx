import { useEffect } from "react";
import Footer from "../Footer/Footer";
import "./LandingPage.css";
import { TiArrowRepeatOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const landingPage = () => {
  const Nav = useNavigate();
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <>
      <div className="topPictureHolder">
        <div className="layerColor">
          <div className="aboutUs">
            <h1>Welcome</h1>
          </div>

          <p className="aboutText">
            Embark on a Journey of Exploration, Management, and Network Mastery!
          </p>
        </div>
      </div>

      <div className="spacing"></div>

      <div className="ourMainFocus">
        <div className="mainFocusAlign">
          <div className="Section-holder">
            <section className="card-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-lg-3">
                    <div className="card">
                      <img src="Team1.jpg" alt="" className="card-img" />
                      <div className="card-body">
                        <h3 className="card-title">
                          Streamlined Article Allocation
                        </h3>
                        <p className="card-description">
                          CoreNet streamlines article assignments to reporters,
                          providing clear deadlines and responsibilities for
                          enhanced clarity and accountability.
                        </p>
                        <div
                          className="card-button"
                          onClick={() => Nav("./about")}
                        >
                          Learn More
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-lg-3">
                    <div className="card">
                      <img src="Team2.jpg" alt="" className="card-img" />
                      <div className="card-body">
                        <h3 className="card-title">Enhanced Accountability</h3>
                        <p className="card-description">
                          CoreNet emphasizes accountability by requiring
                          reporters to promptly accept assignments and adhere to
                          specified deadlines; missed submissions result in
                          automatic reassignment to other reporters by the
                          editor.
                        </p>
                        <div
                          className="card-button"
                          onClick={() => Nav("./about")}
                        >
                          Learn More
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-lg-3">
                    <div className="card">
                      <img src="Team3.jpg" alt="" className="card-img" />
                      <div className="card-body">
                        <h3 className="card-title">Data-Driven Insights</h3>
                        <p className="card-description">
                          CoreNet's data analytics yield insights into news
                          production efficiency, allowing editors to monitor
                          submission times, pinpoint bottlenecks, and enhance
                          resource allocation for improved productivity.
                        </p>
                        <div
                          className="card-button"
                          onClick={() => Nav("./about")}
                        >
                          Learn More
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="spacing"></div>
      <section className="testimonial-section">
        <div className="testimonial-section-top-text1">
          <h2>Testimonials</h2>
        </div>
        <div className="testimonial-section-wrap">
          <div className="testimonial">
            <div className="testimonial-content">
              <p>
                "CoreNet has been a game-changer for my business. It's easy to
                use, and the support is excellent. I can't imagine running my
                network without it."
              </p>
              <cite>- Chaeity Ajah</cite>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-content">
              <p>
                "I've tried other network solutions, but CoreNet stands out.
                It's fast, reliable, and the user interface is intuitive. I
                highly recommend it."
              </p>
              <cite>- Tijani Emmanuel</cite>
            </div>
          </div>
        </div>

        <div className="testimonial-section-wrap">
          <div className="testimonial">
            <div className="testimonial-content">
              <p>
                "I'm thoroughly impressed with CoreNet. It's transformed the way
                we handle networking in our organization. The intuitive
                interface and exceptional support have made a world of
                difference."
              </p>
              <cite>- Colin Thomos</cite>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-content">
              <p>
                "Using CoreNet has been a revelation. It's simplified our
                network operations and improved productivity. The outstanding
                support team is always there when we need them."
              </p>
              <cite>- David Ogunleye</cite>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="testimonial-section-top-text">
          <h2>Available plans</h2>
        </div>
        <div className="Price-Card">
          <div className="pricing-card">
            <h3>Basic</h3>
            <p>One Admin, and two workers</p>
            <p>Free</p>
            <button>Select Plan</button>
          </div>
          <div className="pricing-card">
            <h3>Pro</h3>
            <p>Three Admins, and Thirty workers</p>
            <p>$49/month</p>
            <button>Select Plan</button>
          </div>
          <div className="pricing-card">
            <h3>Premium</h3>
            <p>Unlimited Admins, and workers</p>
            <p>$99/month</p>
            <button>Select Plan</button>
          </div>
        </div>
      </section>

      <section className="developers-section">
        <div className="Secttext">
          <h1 className="developers-section-text">Meet Our Developers</h1>
        </div>
        <div className="developer">
          <img src="Tijani.jpg" alt="Developer 1" />
          <h3>Tijani Ezekiel A.</h3>
          <p>Front-end Developer</p>
        </div>
        <div className="developer">
          <img src="Yusuf.jpg" alt="Developer 2" />
          <h3>Oriade Yusuf </h3>
          <p>Front-end Developer</p>
        </div>
        <div className="developer">
          <img src="Amaka.jpg" alt="Developer 3" />
          <h3>Ekeh Amaka</h3>
          <p>Back-end Developer</p>
        </div>

        <div className="developer">
          <img src="Michael.jpg" alt="Developer 1" />
          <h3>Okpoko Micheal</h3>
          <p>Backend Developer</p>
        </div>
        <div className="developer">
          <img src="Ray.jpg" alt="Developer 1" />
          <h3>Aguye Raymond</h3>
          <p>Backend Developer</p>
        </div>
        <div className="developer">
          <img src="Sammy.jpg" alt="Developer 2" />
          <h3>Ideke Samuel</h3>
          <p>Front-end Developer</p>
        </div>
        <div className="developer">
          <img src="Dan.jpg" alt="Developer 3" />
          <h3>Anaeto Daniel</h3>
          <p>Front-end Developer</p>
        </div>
      </section>

      <br />

      <div className="App">
        <header className="footer-Top">
          <h1>See Your team Assignment Progress In One Place</h1>
          <p>Your One-Stop Solution for Writing and Editing</p>
          <div className="cta-button" onClick={() => Nav("../login")}>
            sign in
          </div>
        </header>

        <section id="services">
          <div className="service">
            <h2>Application Task Updates Status</h2>
            <p>
              This section provides a visual representation of the status
              updates for tasks in the application. The colors indicate the
              current status:
            </p>
            <ul className="status-list">
              <li>
                <span className="status-orange"></span> Pending
              </li>
              <li>
                <span className="status-green"></span> Active
              </li>
              <li>
                <span className="status-blue"></span> Complete
              </li>
            </ul>
          </div>

          <div className="service">
            <h2>Seamless Experience: Intuitive User Interface</h2>
            <p>
              The article emphasizes the application's user-friendly design for
              writers and editors, ensuring easy navigation and access to
              features. The intuitive interface enhances collaboration and task
              focus, enhancing the creative experience.
            </p>
          </div>

          <div className="service">
            <h2>Mastering Time: The Writer's Timer</h2>
            <p>
              The article underscores time management's significance for writers
              using the application, showcasing the integrated timer feature's
              role in maintaining task awareness and enhancing productivity.
              This feature enables writers to concentrate on their creative work
              while efficiently managing their allocated time.
            </p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <footer className="footer">
            <p>&copy; 2023 CoreNet</p>
          </footer>
        </section>
      </div>
    </>
  );
};

export default landingPage;
