import './about.css'
import { motion } from 'framer-motion'
import Scroller from '../../components/Scroller/Scroller'

const skills = ['Rails', 'Git', 'Hotwire', 'Docker', 'Tailwind', 'Postgresql', 'React', 'Figma']
const works = [
  {
    title: 'Fullstack Developer',
    company: 'Leikir Web',
    date: '2022-2023'
  }
]
function About() {  
  const SkillItems = () => {
    return (
      skills.map((skill,idx) => (
        <span
          key={idx}
          className={`skills__item ${idx % 2 == 0 ? "bg-primary" : "bg-gray-darker"}`}
        >
          { skill }
        </span>
      ))
    )
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
        <section className="whoami">
          <h2 className="title">Who am I?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>

        <section className="work">
          <h2 className="title">Work timeline</h2>
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
          <h2 className="title">Skills</h2>
          <div>
            <Scroller duration={20}>
              <SkillItems />        
            </Scroller>
            <Scroller duration={30}>
              <SkillItems />
            </Scroller>
            <Scroller duration={10}>
              <SkillItems />
            </Scroller>
            <Scroller duration={40}>
              <SkillItems />
            </Scroller>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default About