import React, { useEffect } from "react";
import "./About.css";
import Footer from "../../../Component/Footer/Footer";

const About = () => {
  useEffect(() => {
    document.title = "About - My App";
  }, []);

  return (
    // <div className="about-page">
      <div className="about-page">
      {/* <section className="hero">
        <div className="content">
          <h1>Our Story</h1>
          <p>
            At CoreNet, we're dedicated to revolutionizing the way businesses
            manage their tasks and streamline their operations. Our mission is
            simple but powerful: to empower administrators and teams with the
            tools they need to assign tasks seamlessly, track progress
            effortlessly, and ensure every project's success. <br />
            In today's fast-paced business landscape, effective task management
            is the cornerstone of success. At CoreNet, we understand the
            challenges faced by administrators and team leaders when it comes to
            managing tasks and ensuring timely submissions. That's why we've
            developed a cutting-edge web application designed to simplify the
            task assignment process and boost productivity. <br />
            <h1>Key Features</h1>
            <h3>1. Task Assignment Made Easy</h3>
            Gone are the days of email chains and confusing spreadsheets.
            CoreNet provides a simple yet robust task assignment system.
            Administrators can easily create tasks, assign them to specific team
            members, and provide all the necessary details.
            <h3>2. Deadline Tracking</h3>
            Meeting deadlines is crucial for project success. With CoreNet, you
            can set submission deadlines for each task, and our platform ensures
            that time starts counting as soon as the task is accepted. No more
            missed deadlines!
            <h3>3. Real-Time Updates</h3>
            Stay in the loop with real-time updates on task progress. Track
            who's working on what, how close tasks are to completion, and make
            informed decisions to keep your projects on track.
            <h3>4. Task Acceptance</h3>
            We empower your team members to take ownership of their work. They
            can accept tasks within the application, ensuring clarity and
            accountability.
            <h3>5. Customizable Workflows</h3>
            Every organization has its unique processes. CoreNet allows you to
            customize workflows to match your specific needs, giving you
            flexibility without the complexity.
            <h3>6. Data Insights</h3>
            Make data-driven decisions with our insightful analytics. Understand
            where your team excels and where improvements are needed to optimize
            your operations.
            <h1>Why Choose CoreNet?</h1>
            CoreNet isn't just a task management tool; it's a partner in your
            journey towards efficiency and productivity. Here's why you should
            choose us: Simplicity: Our intuitive interface requires no training,
            ensuring a smooth onboarding process for your team. Reliability:
            CoreNet is built to handle your workload, no matter how large or
            small. We guarantee 99.9% uptime so you can always count on us.
            Security: Your data is precious, and we treat it as such. CoreNet
            employs state-of-the-art security measures to protect your
            information. Support: Our dedicated support team is always here to
            assist you. Have a question or need assistance? We're just a message
            away.
          </p>
        </div>
      </section> */}
      <div className="about-page1">
        <section className="hero">
            <div className="content">
                <h1>Our Story</h1>
                <p>
                    At CoreNet, we're dedicated to revolutionizing the way businesses
                    manage their tasks and streamline their operations. Our mission is
                    simple but powerful: to empower administrators and teams with the
                    tools they need to assign tasks seamlessly, track progress
                    effortlessly, and ensure every project's success.
                </p>
                <p>
                    In today's fast-paced business landscape, effective task management
                    is the cornerstone of success. At CoreNet, we understand the
                    challenges faced by administrators and team leaders when it comes to
                    managing tasks and ensuring timely submissions. That's why we've
                    developed a cutting-edge web application designed to simplify the
                    task assignment process and boost productivity.
                </p>
                <h1>Key Features</h1>
                <ul>
                    <li>
                        <h3>1. Task Assignment Made Easy</h3>
                        <p>
                            Gone are the days of email chains and confusing spreadsheets.
                            CoreNet provides a simple yet robust task assignment system.
                            Administrators can easily create tasks, assign them to specific
                            team members, and provide all the necessary details.
                        </p>
                    </li>
                    <li>
                        <h3>2. Deadline Tracking</h3>
                        <p>
                            Meeting deadlines is crucial for project success. With CoreNet, you
                            can set submission deadlines for each task, and our platform ensures
                            that time starts counting as soon as the task is accepted. No more
                            missed deadlines!
                        </p>
                    </li>
                </ul>
                <h1>Why Choose CoreNet?</h1>
                <ul>
                    <li>
                        <h3>Simplicity</h3>
                        <p>
                            Our intuitive interface requires no training, ensuring a smooth
                            onboarding process for your team.
                        </p>
                    </li>
                    <li>
                        <h3>Reliability</h3>
                        <p>
                            CoreNet is built to handle your workload, no matter how large or
                            small. We guarantee 99.9% uptime so you can always count on us.
                        </p>
                    </li>
                    <li>
                        <h3>Security</h3>
                        <p>
                            Your data is precious, and we treat it as such. CoreNet employs
                            state-of-the-art security measures to protect your information.
                        </p>
                    </li>
                    <li>
                        <h3>Support</h3>
                        <p>
                            Our dedicated support team is always here to assist you. Have a
                            question or need assistance? We're just a message away.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    </div>

      <section className="team">
        <div className="members">
          <div className="member">
            <h2>Our Vision</h2>
            <p>
              Our vision is to provide organizations with a central hub for task
              management, enabling them to assign, monitor, and optimize tasks
              with ease. CoreNet was born out of the belief that technology
              should work for you, not against you. We're here to simplify your
              workload, so you can focus on what matters most, -- achieving your
              goals.
            </p>
          </div>
        </div>
        <div className="abtfooter">
        </div>
      </section>
          <Footer />
    </div>
  );
};

export default About;
