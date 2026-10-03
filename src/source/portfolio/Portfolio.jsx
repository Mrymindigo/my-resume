import React from 'react'
import Title from '../Titles'
import PortfolioItem from './PortfolioItem'

export default function Portfolio() {

  return (
  <>
  <div className='mainView flex flex-col justify-center items-center' id='portfolio'>
  <Title value='Portfolio' />
  <PortfolioItem />
  
  </div>
  </>
  )
}
