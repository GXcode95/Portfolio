import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './projects.css'
import me from '../../assets/me.jpg'

const projects = {
  pro: [
    {
      name: 'Project Name',
      description: 'Project description lkezjdklezdkljelkd klaezjlkdqs jdj qsklfj kqldsjflk qsjdklfjqsdklfj klsqdjfkl qdsjklfj qsdlkjf klqdjsflk jqdsklfj klqdsjfklq sdjkfljqdslkj lkqdsjfl jqdslfkjdqsk ljflkdqsjfkl jqdsklf jqdslkfj kldqsjf kldqsjflk jqdsklfj dlqksjf klqdsj',
      tags: ['Rails', 'React', 'Tailwind'],
      live_url: 'https://google.com',
      code_url: 'https://github.com',
      image_url: me,
    },
  ],
  perso: [
    {
      name: 'Project Name',
      description: 'Project description lkezjdklezdkljelkd klaezjlkdqs jdj qsklfj kqldsjflk qsjdklfjqsdklfj klsqdjfkl qdsjklfj qsdlkjf klqdjsflk jqdsklfj klqdsjfklq sdjkfljqdslkj lkqdsjfl jqdslfkjdqsk ljflkdqsjfkl jqdsklf jqdslkfj kldqsjf kldqsjflk jqdsklfj dlqksjf klqdsj',
      tags: ['Rails', 'React', 'Tailwind'],
      live_url: 'https://google.com',
      code_url: 'https://github.com',
      image_url: me,
    },
    {
      name: 'Project Name',
      description: 'Project description lkezjdklezdkljelkd klaezjlkdqs jdj qsklfj kqldsjflk qsjdklfjqsdklfj klsqdjfkl qdsjklfj qsdlkjf klqdjsflk jqdsklfj klqdsjfklq sdjkfljqdslkj lkqdsjfl jqdslfkjdqsk ljflkdqsjfkl jqdsklf jqdslkfj kldqsjf kldqsjflk jqdsklfj dlqksjf klqdsj',
      tags: ['Rails', 'React', 'Tailwind'],
      live_url: 'https://google.com',
      code_url: 'https://github.com',
      image_url: me,
    },
    {
      name: 'Project Name',
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
    <div className="projects">
      <section>
        <h2>Profesional Projects</h2>
        {projects.pro.map(project => {
          return <ProjectCard key={project} project={project}/>
        })}
      </section>
      
      <section>
        <h2>Personal Projects</h2>
        {projects.perso.map(project => {
          return <ProjectCard key={project} project={project}/>
        })}
      </section>
    </div>
  )
}

export default Projects