import React from 'react'
import Title from '../Titles'
import PortfolioItem from './PortfolioItem'

export default function Portfolio() {

  // const allPortfolios =[
  //   {id:1 , image:"/image/Feminine Life.jpg" , alt:'store'},
  //   {id:2 , image:'/image/Modern.jpg' , alt:'feminine life'},
  //   {id: 3, image:'/image/more details.jpg' , alt:'ui,ux'},
  //   {id:4 , image:'/image/Web Design.jpg' , alt:'working desk'}
  // ]

  return (
  <>
  <div className='mainView flex flex-col justify-center items-center' id='portfolio'>
  <Title value='Portfolio' />
  <PortfolioItem />

  {/* <div className="allportfolio flex gap-6">
  <PortfolioItem image={allPortfolios[0].image} alt={allPortfolios[0].alt} />
  <PortfolioItem image={allPortfolios[1].image} alt={allPortfolios[1].alt} />
  <PortfolioItem image={allPortfolios[2].image} alt={allPortfolios[2].alt}/>
  <PortfolioItem image={allPortfolios[3].image} alt={allPortfolios[3].alt}/>
  </div> */}
  
  </div>
  </>
  )
}
