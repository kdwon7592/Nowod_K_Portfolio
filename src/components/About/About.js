import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/languageName'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { en, kr, blog, social } = about;
  const [{ languageName }] = useContext(LanguageContext);

  const name = languageName === 'en' ? en.name : kr.name;
  const role = languageName === 'en' ? en.role : kr.role;
  const description = languageName === 'en' ? en.description : kr.description;


  return (
    <>
      <section className='about div_section' id='about'>
        <div className='about_left'>
          <img className='about_image' src='/resoucres/image/profile_nowod_good.jpg' alt='profile_image' />
          <hr width='120px' />
          <span className='about_small_intro'>Email : </span>
          <span className='about_small_intro'>kdwon7592@naver.com</span>
        </div>
        <div className='about_center'>
          {name && (
            <h1>
              {languageName === 'en' ? 'Hello' : '안녕하세요.'}<br />
              <span className='about__name'>{name}</span>
            </h1>
          )}

          {role && <h2 className='about__role'>{role}.</h2>}
          <p className='about__desc'>{description && description}</p>

          <div className='about__contact center'>
            {blog && (
              <a href={blog}
                target='_blank'
                rel="noreferrer">
                <span type='button' className='btn btn--outline'>
                  My Blog
                </span>
              </a>
            )}

            {social && (
              <>
                {social.github && (
                  <a
                    href={social.github}
                    target='_blank'
                    rel="noreferrer"
                    aria-label='github'
                    className='link link--icon'
                  >
                    <GitHubIcon />
                  </a>
                )}

                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    target='_blank'
                    rel="noreferrer"
                    aria-label='linkedin'
                    className='link link--icon'
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
