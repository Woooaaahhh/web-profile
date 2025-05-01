import { useEffect, useRef } from 'react';

function Projects() {
  const projectsRef = useRef(null);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: 'Online Shop',
      description: 'A full-stack e-commerce application built with React, PHP, and MySQL. Features include user authentication, product management, and shopping cart functionality.',
      technologies: ['React', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      link: 'https://github.com/justinaquilizan/ecom-exam.git',
      image: '/projects/online-shop.png'
    },
    {
      title: 'GCash UX Study',
      description: 'A comprehensive UX research and redesign project for the GCash mobile application. Includes user research, wireframes, and high-fidelity prototypes.',
      technologies: ['Figma', 'User Research', 'UX Design', 'Prototyping'],
      link: 'https://www.figma.com/design/yKBGzzPpqTjHEev5tCjMs8/Case-Study?t=hypLIH9kfWTpdPOo-0',
      image: '/projects/gcash-ux.png'
    }
  ];

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  <ul>
                    {project.technologies.map((tech, i) => (
                      <li key={i} className="tech-tag">{tech}</li>
                    ))}
                  </ul>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;