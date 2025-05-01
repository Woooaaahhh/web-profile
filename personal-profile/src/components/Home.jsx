import { useEffect, useRef } from 'react';

function Home() {
  const homeRef = useRef(null);

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

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="home-section" ref={homeRef}>
      <div className="container">
        <div className="hero-content">
          <div className="profile-section">
            <img 
              src="https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/476613662_1662738867951904_175377778003718445_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFOImSx07vYygqTA6KfZb25dWYbEUJ8e8t1ZhsRQnx7yxBDtQOgu4AP8k964MHQLMXfgRmX3yXTwsuGnrCS9yFM&_nc_ohc=L-CHulEgI8QQ7kNvwFHwe2S&_nc_oc=AdmusNSyFoSPgoD7VFmTHoG8oXXKPaKRO5lwoIIyj9349xbb6l74-g0zFu8a5kyJiyo&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=sWCc0R9Qf8mVFNxG53cU_A&oh=00_AfGPhDI0OfnvD7GE_1pnE7ImgX_nYO4S55HlGFsuXvLnhA&oe=6818C261" 
              alt="Profile"
              className="profile-image"
            />
          </div>
          <div className="name-section">
            <h1>Andrei Asnan</h1>
            <p className="subtitle">Web Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;