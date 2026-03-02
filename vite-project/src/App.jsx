import './App.css'
import myImage1 from './assets/myImage1.jpeg'
import myImage2 from './assets/myImage2.jpeg'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import project4 from './assets/project4.png'

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const getAIResponse = (input) => {
    const text = input.toLowerCase();

    if (text.includes("skill")) {
      return "I am skilled in HTML, CSS, JavaScript, React, C++, Java, and MongoDB.";
    }

    if (text.includes("project")) {
      return "My main projects include StudySync, Tic Tac Toe, and Rock Paper Scissors.";
    }

    if (text.includes("internship")) {
      return "I am currently looking for internship opportunities in frontend or full-stack development.";
    }

    if (text.includes("education")) {
      return "I am pursuing IT Engineering.";
    }

    if (text.includes("contact")) {
      return "You can contact me through the contact section in this portfolio.";
    }

    if (text.includes("hello") || text.includes("hi")) {
      return "Hello! How can I help you today?";
    }

    return "Thank you for your question. Please ask about my skills, projects, internship, or education.";
  };

  const handleAsk = () => {
    setReply("Thinking...");
    setTimeout(() => {
      const response = getAIResponse(message);
      setReply(response);
    }, 800);
  };

  const typingRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = form.name.value;
    const subject = form.subject.value;
    const email = form.email.value;
    const mobile = form.mobile.value;
    const whatsapp = form.whatsapp.value;
    const message = form.message.value;

    const body = `
    Name: ${name}
    Email: ${email}
    Mobile: ${mobile}
    WhatsApp: ${whatsapp}

    Message:
    ${message}
      `;

    const gmailLink =
    `https://mail.google.com/mail/?view=cm&fs=1&to=sanketmore2630@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailLink, "_blank");
  };

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ["Web Designer", "Frontend Developer"],
      typeSpeed: 60,
      backSpeed: 50,
      backDelay: 1200,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  // ================= Scroll Animation =================
  useEffect(() => {
    const sections = document.querySelectorAll("#about-me, #contact, #skills, #projects, #ai-assistant");

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>

      {/* Dark/Light Mode Icon */}
      <div className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
      </div>

      <header>
        <div>
          <a href="#" id='leftHeader'>Sanket</a>
        </div>
        
        <div id='middleHeader'>
          <a href="#home">Home</a>
          <a href="#about-me">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Project</a>
          <a href="#contact">Contact</a>
        </div>

        <div id='rightHeader'>
          <a href="#contact" id="contactButton">Contact Me</a>
        </div>
      </header><br />

      {/* Home Section */}
      <div id='home' className="home">
        <div id='home-image'>
          <img src={myImage1} alt="My Image1" width={500} id='myImage1'/>
        </div>

        <div id='home-content'>
          <div className='home-name'>
            <h1>Hi, It's <span className="name-highlight">Sanket</span></h1>
          </div>

          <div className='home-web'>
            <p>I'm a <span ref={typingRef}></span></p>
          </div>

          <div className='home-para'>
            <p>I am a passionate developer who enjoys building clean, responsive, and user-friendly web applications. I love turning ideas into real projects and continuously improving my skills through learning and practice.</p>
          </div>

          <div className='home-logo'>
            <a href="https://github.com/Sanket-code-12">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sanket-more-366032324/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>

          <div className='home-button'>
            <a href="#contact" id="home-hire-me">Hire Me</a>
            <a href="#contact" id="home-contact">Contact</a>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div id='about-me' className="about-me">
        <div id='about-me-header'><br /><br />
            <h1>About Me</h1>
        </div>
        <div id='about-me-container'>
          <div id='about-me-image'>
            <img src={myImage2} alt="My Image2" width={500} id='myImage2'/>
          </div>

          <div id='about-me-para'>
            <h2>Designing Is My Passion</h2><br />
            <p>I am a passionate Web Developer and Frontend Developer who enjoys building clean, responsive, and user-friendly websites. I like turning ideas into real projects and continuously improving my skills by learning modern technologies and practicing Data Structures and Algorithms.</p><br />
            <p>I am currently focused on improving my problem-solving skills, building real-world projects, and growing as a developer step by step. I am actively seeking internship opportunities where I can apply my skills, learn from real-world experience, and grow as a software developer.</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills">
        <div id="skills-header"><h1>My Skills</h1></div>
        <div id="skills-container">
          <div id="skills-left">
            <h2>Skills Reflect My Knowledge & Learning Journey</h2>
            <p>I am a passionate IT engineering student and web developer who loves building modern,
            interactive, and user-friendly applications. I continuously learn new technologies
            and improve my problem-solving skills by working on real projects and hackathons.
            My focus is on creating smart, efficient, and innovative solutions using web
            development and programming.</p>
            <h3>Experience: Learning & Building Projects</h3>
          </div>

          <div id="skills-right">
            <div className="skill-box">
              <h4>Frontend Developer</h4>
              <p>HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap</p>
            </div>
            <div className="skill-box">
              <h4>Programming</h4>
              <p>C, C++, Java, DSA (Improving)</p>
            </div>
            <div className="skill-box">
              <h4>Database</h4>
              <p>MySQL, MongoDB</p>
            </div>
            <div className="skill-box">
              <h4>Version Control</h4>
              <p>Git, GitHub</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id='projects' className='Project'>
          <h1>Projects</h1>
          <div className='project-item'>
            <a href="https://sanket-code-12.github.io/studysync/" target="_blank" rel="noopener noreferrer">
              <div className='card'>
                <img src={project1} alt="Project 1" width={400} id='project1'/>
                <h3>Review Project 1</h3>
                <p>StudySync is a responsive web app for seamless online learning, built with HTML, CSS .</p>
              </div>
            </a>
            <a href="https://sanket-code-12.github.io/Card-tiger-/" target="_blank" rel="noopener noreferrer">
              <div className='card'>
                <img src={project2} alt="Project 2" width={400} id='project2'/>
                <h3>Review Project 2</h3>
                <p>Tiger is a responsive order summary card built with HTML, CSS .</p>
              </div>
            </a>
            <a href="https://sanket-code-12.github.io/Tic-Tac-Toe-Game/" target="_blank" rel="noopener noreferrer">
              <div className='card'>
                <img src={project3} alt="Project 3" width={400} id='project3'/>
                <h3>Review Project 3</h3>
                <p>Tic Tac Toe is a classic game built with HTML, CSS, and JavaScript, featuring a restart option.</p>
              </div>
            </a>
            <a href="https://sanket-code-12.github.io/Rock-Paper-Scissors/" target="_blank" rel="noopener noreferrer">
              <div className='card'>
                <img src={project4} alt="Project 4" width={400} id='project4'/>
                <h3>Review Project 4</h3>
                <p>Rock Paper Scissors is an interactive game built with HTML, CSS, and JavaScript where you play against the computer.</p>
              </div>
            </a>
          </div>
      </div>

      {/* ================= AI ASSISTANT SECTION ================= */}
<div id="ai-assistant" className="ai-assistant">
  <h1>AI Assistant</h1>

  <div className="ai-container">

    <p className="ai-subtitle">
      Ask anything about my skills, projects, or career goals.
    </p>

    <div className="ai-input-box">
  <input
    type="text"
    placeholder="Ask about Sanket..."
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  />
  <button onClick={handleAsk}>Ask</button>
</div>

{reply && (
  <div className="ai-response">
    <p>{reply}</p>
  </div>
    )}

  </div>
</div>

      {/* Contact Section */}
      <div id="contact" className="contact">
        <div className="contact-container">
          <h1 className="contact-title">Contact Me</h1>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter your name" required minLength="3"/>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="Enter subject" required/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Enter your email" required/>
              </div>
              <div className="form-group">
                <label>Mobile Number (Optional)</label>
                <input type="tel" name="mobile" placeholder="Enter mobile number" pattern="[0-9]{10}"/>
              </div>
            </div>

            <div className="form-group full-width">
              <label>WhatsApp Number (Optional)</label>
              <input type="tel" name="whatsapp" placeholder="Enter WhatsApp number" pattern="[0-9]{10}"/>
            </div>

            <div className="form-group full-width">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="Write your message here..." required></textarea>
            </div>

            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App
