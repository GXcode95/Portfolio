import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './projects.css'
import me from '../../assets/me.jpg'
import pacomail from '../../assets/pacomail.png'
import { motion } from 'framer-motion'

const projects = {
  pro: [
    {
      name: 'Pacomail',
      description: "It's a SaaS mailtacher with email previsualization and live editing. It integrates a live debugger that can detect bad email practice and help you to fix it. Designed to be collaborative it integrates differents group/company system.",
      tags: ['Rails', 'React', 'Tailwind'],
      live_url: 'pacomail.io',
      code_url: null,
      image_url: pacomail,
    },
  ],
  perso: [
    {
      name: 'Project Perso 1',
      description: 'Project description lkezjdklezdkljelkd klaezjlkdqs jdj qsklfj kqldsjflk qsjdklfjqsdklfj klsqdjfkl qdsjklfj qsdlkjf klqdjsflk jqdsklfj klqdsjfklq sdjkfljqdslkj lkqdsjfl jqdslfkjdqsk ljflkdqsjfkl jqdsklf jqdslkfj kldqsjf kldqsjflk jqdsklfj dlqksjf klqdsj',
      tags: ['Rails', 'React', 'Tailwind'],
      live_url: 'https://google.com',
      code_url: 'https://github.com',
      image_url: me,
    },
    {
      name: 'Project Perso 2',
      description: 'Project description lkezjdklezdkljelkd klaezjlkdqs jdj qsklfj kqldsjflk qsjdklfjqsdklfj klsqdjfkl qdsjklfj qsdlkjf klqdjsflk jqdsklfj klqdsjfklq sdjkfljqdslkj lkqdsjfl jqdslfkjdqsk ljflkdqsjfkl jqdsklf jqdslkfj kldqsjf kldqsjflk jqdsklfj dlqksjf klqdsj',
      tags: ['Rails', 'React', 'Tailwind'],
      live_url: 'https://google.com',
      code_url: 'https://github.com',
      image_url: me,
    },
    {
      name: 'Project Perso 3',
      description: 'Project description lkezjdklezdkljelkd klaezjlkdqs jdj qsklfj kqldsjflk qsjdklfjqsdklfj klsqdjfkl qdsjklfj qsdlkjf klqdjsflk jqdsklfj klqdsjfklq sdjkfljqdslkj lkqdsjfl jqdslfkjdqsk ljflkdqsjfkl jqdsklf jqdslkfj kldqsjf kldqsjflk jqdsklfj dlqksjf klqdsj',
      tags: ['Rails', 'React', 'Tailwind'],
      live_url: 'https://google.com',
      code_url: 'https://github.com',
      image_url: me,
    },
  ]
}
function Projects() {

  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'linear',
        duration: .4,
      }}
    >
      <section className="wrapper">
        <h2 className="title">Profesional Projects</h2>
        {projects.pro.map(project => {
          return <ProjectCard key={project.name} project={project}/>
        })}
      </section>
      
      <section className="wrapper">
        <h2 className="title">Personal Projects</h2>
        <div className="flex flex-wrap gap-4">
          {projects.perso.map(project => {
            return <ProjectCard key={project.name} project={project}/>
          })}
        </div>
      </section>
    </motion.div>
  )
}

export default Projects