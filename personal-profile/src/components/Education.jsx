import { useEffect, useRef } from 'react';

function Education() {
  const educationRef = useRef(null);

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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  const education = [
    {
      institution: 'University of Cabuyao',
      degree: 'Bachelor of Science in Information Technology',
      period: '2022 - 2026',
      location: 'Katapatan Homes, Cabuyao, Laguna',
      achievements: [
        'N/A'
      ]
    },
    {
      institution: 'Aitsa Cabuyao',
      Strand: 'General Academic Strand',
      period: '2019 - 2021',
      location: 'Burgos, Poblacion Uno, Cabuyao',
      achievements: [
        'G11 & G12 Top 2 Overall'
      ]
    },
    {
      institution: 'Pulo National High School',
      Strand: 'General Academic Strand',
      period: '2016 - 2019',
      location: 'Pulo, Cabuyao, Laguna',
      achievements: [
        'N/A'
      ]
    }
  ];

  return (
    <section id="education" className="education-section" ref={educationRef}>
      <div className="container">
        <h2>Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <h3>{edu.institution}</h3>
                <span className="education-period">{edu.period}</span>
              </div>
              <div className="education-content">
                <h4>{edu.degree}</h4>
                <p className="education-location">{edu.location}</p>
                {edu.achievements.length > 0 && (
                  <div className="achievements">
                    <h5>Achievements</h5>
                    <ul>
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;