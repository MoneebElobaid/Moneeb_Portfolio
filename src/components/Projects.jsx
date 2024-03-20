import projects from "../data/projects.json";

export default function Projects() {
  return (
    <section className="projects">
        <div className="wrapper projects__wrapper">
            <div className="projects__grid">
                <h2 className="projects__headline header-xl">Projects</h2>
                <a href="#contact" className="projects__contact underline">Contact me</a>
                {projects.map(project => (
                    <div key={project.id} className="projects__item">
                        <div className="image__container">
                            <img className="projects__image" src={project.image} alt={project.name} />
                        </div>
                        <h3 className="projects__name">{project.name}</h3>
                        <p className="projects__tags">
                            {project.technologies.map((tech, idx) => <span key={idx}>{tech}</span>)}
                        </p>
                        <div className="projects__links">
                            <a href={project.live} className="underline">View Project</a>
                            <a href={project.gihubLink} className="underline">View Code</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}