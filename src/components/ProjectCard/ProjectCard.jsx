import { useRef, useEffect, useMemo, useState } from 'react'
import './project_card.css'
import { motion } from 'framer-motion'
import { VscGithubAlt } from 'react-icons/vsc'

function ProjectCard({project}) {

  const handleClick = (e) => {
    if (e.target.tagName == 'A')
      return
    
    window.open(project.live_url)
  }

  const cardRef = useRef(null);

  const useIsInViewport = (ref) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  }

  const isInViewport = useIsInViewport(cardRef);

  const [hasBeenInViewport, setHasBeenInViewport] = useState(false)
  
  useEffect(() => {
    if(isInViewport && !hasBeenInViewport)
      setHasBeenInViewport(true)

  }, [isInViewport, hasBeenInViewport])

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: hasBeenInViewport ? 1 : 0}}
      transition={{
        ease: 'linear',
        duration: 1,
        x: { duration: 0.7 }
      }}
      onClick={handleClick}
    >

      <figure className="project-card__img">
        <img src={project.image_url} alt={`${project.name} project screenshot`}/>
      </figure>
      
      <div className="project-card__body">
        <h2 className="project-card__title title">{project.name}</h2>
        <p className="project-card__text">{project.description}</p>
        
        <ul className="project-card__badge">
          {project.tags.map(tag => {
            return <li key={tag} className="badge badge-accent">{tag}</li>
          })}
        </ul>

        <div className="project-card__actions">
          <button className="mybtn" disabled={project.live_url }>
            <span>Demo</span><i></i>
          </button>
          {project.code_url &&
            
            <a to={project.code_url} target="_blank" rel="noreferrer" className="glow-icon">
              <VscGithubAlt className="h-8 w-8" />
            </a>}
        </div>
      </div>
    
    </motion.div>
  )

}

export default ProjectCard