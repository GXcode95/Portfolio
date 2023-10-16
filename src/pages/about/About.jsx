import './about.css'

const skills = ['Rails', 'Hotwire', 'React', 'Docker', 'AWS', 'Postgresql', 'Tailwind', 'Figma']
const works = [
  {
    title: 'Fullstack Developer',
    company: 'Leikir Web',
    date: '2022-2023'
  }
]
function About() {
  return (
    <div className="about">
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
          <ul>
            {skills.map(skill => { return (
              <li key={skill}>
                { skill }
              </li>
            )})}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default About