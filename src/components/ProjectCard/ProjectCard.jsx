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
      // initial={{ opacity: 0, x: '-90vw' }}
      // animate={{ opacity: hasBeenInViewport ? 1 : 0, x: hasBeenInViewport ? 0 : '-90vw' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: hasBeenInViewport ? 1 : 0}}
      transition={{
        ease: 'linear',
        duration: 1,
        x: { duration: 0.7 }
      }}
      onClick={handleClick}
    >
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

        <div className='flex gap-5 items-center'>
          { project.live_url &&
              <a href={project.live_url} target="_blank" rel="noreferrer" className="btn btn-primary btn-outline">
                Live DEMO
              </a>}

          { project.code_url &&
              <a to={project.code_url} target="_blank" rel="noreferrer">
                <VscGithubAlt className="h-10 w-10" />
              </a> }
        </div>
      </div>
    </motion.div>
  )

}

export default ProjectCard