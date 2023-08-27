import Footer from "../Footer/Footer";
import "./LandingPage.css";
import { TiArrowRepeatOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const landingPage = () => {
  const Nav = useNavigate();

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
                      <img
                        src="https://media.istockphoto.com/id/643285752/photo/weve-done-it-again.jpg?s=612x612&w=0&k=20&c=ck3RUNZUSwuXkYV7otvB2vuWzAl2v2GEfgkDRIw8cyk="
                        alt=""
                        className="card-img"
                      />
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
                      <img
                        src="https://media.istockphoto.com/id/643285752/photo/weve-done-it-again.jpg?s=612x612&w=0&k=20&c=ck3RUNZUSwuXkYV7otvB2vuWzAl2v2GEfgkDRIw8cyk="
                        alt=""
                        className="card-img"
                      />
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
                      <img
                        src="https://media.istockphoto.com/id/643285752/photo/weve-done-it-again.jpg?s=612x612&w=0&k=20&c=ck3RUNZUSwuXkYV7otvB2vuWzAl2v2GEfgkDRIw8cyk="
                        alt=""
                        className="card-img"
                      />
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
          <h3>Oriade Yusuf</h3>
          <p>Front-end Developer</p>
        </div>
        <div className="developer">
          <img src="Amaka.jpg" alt="Developer 3" />
          <h3>Amaka</h3>
          <p>Back-end Developer</p>
        </div>

        <div className="developer">
          <img src="Michael.jpg" alt="Developer 1" />
          <h3>Micheal</h3>
          <p>Backend Developer</p>
        </div>
        <div className="developer">
          <img src="Ray.jpg" alt="Developer 1" />
          <h3>Raymond</h3>
          <p>Backend Developer</p>
        </div>
        <div className="developer">
          <img src="Sammy.jpg" alt="Developer 2" />
          <h3>Sammy Dek</h3>
          <p>Front-end Developer</p>
        </div>
        <div className="developer">
          <img src="Dan.jpg" alt="Developer 3" />
          <h3>Daniel</h3>
          <p>Front-end Developer</p>
        </div>
      </section>

      <br />

      <div className="App">
        <header className="footer-Top">
          <h1>See Your team Assignment Progress In One Place</h1>
          <p>Your One-Stop Solution for Writing and Editing</p>
          <div className="cta-button" onClick={() => Nav("../login")}>
            login
          </div>
        </header>

        <section id="services">
          <div className="service">
            <h2>Crafting Words into Art</h2>
            <p>
              The article emphasizes the power of words in literature as tools
              for crafting captivating stories that resonate with readers. The
              platform provided serves as a creative space for individuals to
              unleash their inner wordsmiths and transform language into art.
            </p>
          </div>

          <div className="service">
            <h2>The Art of Editing: Refining Prose</h2>
            <p>
              The article underscores the significance of editors in refining
              writing, transforming raw prose into polished pieces. The platform
              invites both writers and editors to join a community focused on
              dissecting sentences and enhancing paragraphs, collaboratively
              delving into the art of refining prose.
            </p>
          </div>

          <div className="service">
            <h2>Nurturing Your Writing Talent</h2>
            <p>
              The article highlights the importance of support and guidance in
              nurturing writing talent and fostering creativity. The platform
              offers a space for writers at all levels to share their work,
              receive feedback, and connect with fellow writers, collectively
              working towards nurturing talent and achieving literary
              excellence.
            </p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <footer className="footer">
            <p>&copy; 2023 Morrison Legal Advocacy</p>
          </footer>
        </section>
      </div>
    </>
  );
};

export default landingPage;
