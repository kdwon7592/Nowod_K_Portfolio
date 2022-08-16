import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (skills == null) return null;

  return (
    <section className='div_section skills sector' id='skills'>
      <h2 className='section__title'>Skills</h2>
      {Object.keys(skills).map(level => (
        <>
          <h3 className='skills_header'>{skills[level].kr}</h3>
          <ul className='skills__list'>
            {skills[level].skill.map((skill) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                {skill}
              </li>
            ))}
          </ul>
        </>
      ))}
    </section>
  )
};

export default Skills
