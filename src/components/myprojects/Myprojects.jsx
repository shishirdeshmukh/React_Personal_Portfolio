import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/tender.png'
import IMG2 from '../../assets/expense.png'
import IMG3 from '../../assets/portfolio.png'
import IMG4 from '../../assets/jobhunt.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Tender Works</h3>
            <small className='text-light'>Spring Boot | ReactJs | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shishirdeshmukh/Tender-Works-MCA-Sem-1" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Expense Tracker</h3>
            <small className='text-light'>ReactJS | Bootstrap</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shishirdeshmukh/react-expense-tracker" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://shishirdeshmukh.github.io/react-expense-tracker/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shishirdeshmukh/React_Personal_Portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://shishirdeshmukh.github.io/React_Personal_Portfolio/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>JobHunt</h3>
            <small className='text-light'>HTML | CSS | JS | PHP | Bootstrap</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shishirdeshmukh/JobHunt" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects