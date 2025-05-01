import { useEffect, useRef } from 'react';

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="container">
        <h2>About Me</h2>
        <div className="about-top">
          <div className="about-image">
            <img 
              src="https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/476613662_1662738867951904_175377778003718445_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFOImSx07vYygqTA6KfZb25dWYbEUJ8e8t1ZhsRQnx7yxBDtQOgu4AP8k964MHQLMXfgRmX3yXTwsuGnrCS9yFM&_nc_ohc=L-CHulEgI8QQ7kNvwFHwe2S&_nc_oc=AdmusNSyFoSPgoD7VFmTHoG8oXXKPaKRO5lwoIIyj9349xbb6l74-g0zFu8a5kyJiyo&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=sWCc0R9Qf8mVFNxG53cU_A&oh=00_AfGPhDI0OfnvD7GE_1pnE7ImgX_nYO4S55HlGFsuXvLnhA&oe=6818C261" 
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a dedicated and passionate web developer with a strong 
              foundation in web development. My journey in programming began 
              with a curiosity for creating digital solutions that make a 
              difference in people's lives.
            </p>
            <p>
              When I'm not coding, you can find me playing video games or diving into books. 
              I enjoy exploring different gaming worlds and challenging myself in various 
              game genres. Reading keeps me engaged with new ideas and perspectives, 
              whether it's through novels, technical books, or articles. I also love 
              watching K-pop videos and movies, which brings me joy and helps me stay 
              connected with the latest trends in music and entertainment.
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Technical Skills</h3>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>HTML5/CSS3</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Tools & Frameworks</h3>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Postman</li>
                <li>Figma</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="hobbies-section">
            <h3>Hobbies</h3>
            <div className="hobbies-grid">
              <div className="hobby-card">
                <h4>Playing Video Games</h4>
                <p>From classic RPGs to modern multiplayer games, I enjoy exploring different gaming worlds and challenging myself in various game genres.</p>
              </div>
              <div className="hobby-card">
                <h4>Reading</h4>
                <p>Reading keeps me engaged with new ideas and perspectives, whether it's through novels, technical books, or articles.</p>
              </div>
              <div className="hobby-card">
                <h4>Watching K-pop Videos and Movies</h4>
                <p>Watching K-pop videos and movies brings me joy and helps me stay connected with the latest trends in music and entertainment.</p>
              </div>
              <div className="hobby-card">
                <h4>Playing Basketball</h4>
                <p>Whether it's pickup games with friends or team practices, basketball is a great way for me to stay active and competitive.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;