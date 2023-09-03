import React, { useEffect } from "react";
import "./Contact Us.css";
import { MdOutgoingMail } from "react-icons/md";
import { BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import Footer from "../../../Component/Footer/Footer"

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <div class="contact-page">
      <div class="bg-image"></div>

      <div class="content-wrap">
        <h1>Contact Us</h1>

        <div class="contact-cards">
          <div class="contact-card1">
            <i class="fas fa-envelope">
              <MdOutgoingMail />
            </i>
            <a href="mailto:CoreNetapplication@gmail.com" style={{textDecoration: "none", color: "#333"}}>
                CoreNetapplication@gmail.com
              </a>
          </div>

          <div class="contact-card">
            <i class="fas fa-phone">
              {" "}
              <BsTelephoneFill />
            </i>
            <p>09082373084</p>
          </div>

          <div class="contact-card">
            <i class="fas fa-globe">
              <BsLinkedin />
            </i>
            <p>www.example.com</p>
          </div>
        </div>
      </div>

      <section className="team">
        <div className="members">
          <div className="member">
            <h2> Reach us </h2>
            <p>
              Continuous Improvement: We're dedicated to refining and expanding
              our platform to meet your evolving needs. Your feedback drives our
              innovation. Customer Support: Our support team is at your service
              whenever you need assistance. We're here to ensure your experience
              is seamless. Cost-Efficiency: We offer competitive pricing plans
              that cater to businesses of all sizes. Enjoy premium features
              without breaking the bank. Proven Results: Countless organizations
              have experienced transformative results using our web application.
              Join the ranks of satisfied customers who have boosted their
              productivity and achieved their goals.
            </p>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
