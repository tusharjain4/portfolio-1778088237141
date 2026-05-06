'use client';

import React from 'react';

interface Project {
  name: string;
  description: string;
  tech: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  // Array of placeholder image paths. Extend if more projects are added.
  const placeholderImages = [
    "/placeholder-project-1.png", // Corresponds to img_rectangle_369.png
    "/placeholder-project-2.png", // Corresponds to img_rectangle_369_396x836.png
    "/placeholder-project-3.png", // Corresponds to img_rectangle_369_1.png
  ];

  return (
    <section className="works-section">
      <div className="works-content">
        <h2 className="works-title">My Works</h2>
        <div role="list">
          {projects.map((project, index) => (
            <article className="project-item" role="listitem" key={index}>
              <div className="project-info">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-keywords">
                  {project.tech.map((tech, techIndex) => (
                    <span className="keyword" key={techIndex}>{tech}</span>
                  ))}
                </div>
                {/* Description added here as it's not explicitly in template HTML for projects,
                    but is in JSON and improves context */}
                <p className="skill-description mt-2">{project.description}</p>
              </div>
              {/* Using a placeholder image for each project */}
              <img
                src={placeholderImages[index % placeholderImages.length]}
                alt={`Project showcase for ${project.name}`}
                className="project-image"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;