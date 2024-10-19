import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'

interface typesofprops {
    categories: string;
    companyCounter: string;
    url: string;
    cardPic: StaticImageData;
}
  
const PopularCategoriesCard = ({categories, companyCounter, cardPic, url}:typesofprops) => {
  return (
    <span className='Popular-Categories-Card'>
      <Image src={cardPic} alt='Popular-Categories-Card-pic' />
      <span className='detail-box-Popular-Categories-Card'>
      <Link href={`${url}`}><b>{categories}</b></Link>
        <p>{companyCounter}</p>
      </span>
    </span>
  )
}

export default PopularCategoriesCard
