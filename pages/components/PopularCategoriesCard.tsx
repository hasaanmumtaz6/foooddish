import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface typesofprops {
    categories: string;
    companyCounter: string;
    cardPic: StaticImageData;
}
  
const PopularCategoriesCard = ({categories, companyCounter, cardPic}:typesofprops) => {
  return (
    <span className='Popular-Categories-Card'>
      <Image src={cardPic} alt='Popular-Categories-Card-pic' />
      <span className='detail-box-Popular-Categories-Card'>
        <b>{categories}</b>
        <p>{companyCounter}</p>
      </span>
    </span>
  )
}

export default PopularCategoriesCard
