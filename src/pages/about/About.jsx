import './about.css'
import { motion } from 'framer-motion'
import Scroller from '../../components/Scroller/Scroller'

const skills = ['Rails', 'React', 'Hotwire', 'Docker', 'Tailwind', 'Postgresql', 'AWS', 'Figma']
const works = [
  {
    title: 'Fullstack Developer',
    company: 'Leikir Web',
    date: '2022-2023'
  }
]
function About() {
  const isMainSKill = (skill) => {
    return ["Rails", "Hotwire", "Tailwind"].includes(skill)
  }
  
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'linear',
        duration: .4,
      }}
    >
      <div className="wrapper">
        <h1>About Me</h1>
        <section className="whoami">
          <h2>Who am I?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>

        <section className="work">
          <h2>Work timeline</h2>
          <ul>
            {works.map(work => { return (
              <li key={work}>
                <span className="work--title">{ work.title }</span>
                <span>{ work.company }</span>
                <span>{ work.date }</span>    
              </li>
            )})}
          </ul>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <Scroller>
            {skills.map((skill,idx) => (
              <li
                className={isMainSKill(skill) && 'text-primary'}
                key={idx}
              >
                { skill }
              </li>
            ))}
          </Scroller>
          <Scroller reverse={true} >
            {skills.reverse().map((skill,idx) => (
              <li
                className={isMainSKill(skill) && 'text-primary'}
                key={idx}
              >
                { skill }
              </li>
            ))}
          </Scroller>
        </section>
      </div>
    </motion.div>
  )
}

export default About