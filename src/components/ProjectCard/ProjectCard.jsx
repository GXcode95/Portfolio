import './project_card.css'

function ProjectCard({project}) {

  return (
    <div className="project-card">
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${project.image_url})` }}
      ></div>
      <div className="text">
        <h3>{ project.name }</h3>
        <p>{ project.description }</p>
        <ul className="flex gap-3 flex-wrap">
          {project.tags.map(tag => {
            return <li key={tag} className="badge badge-accent">{tag}</li>
          })}
        </ul>

        <div className='flex gap-3 flex-wrap'>
          <a href={project.live_url} target="_blank" rel="noreferrer" className="btn btn-outline btn-primary">
            See Live
          </a>
          <a href={project.code_url} target="_blank" rel="noreferrer" className="btn btn-outline btn-secondary">
            Source Code
          </a>
        </div>
      </div>
    </div>
  )

}

export default ProjectCard