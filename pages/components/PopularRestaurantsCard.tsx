import Image, { StaticImageData } from 'next/image';
import React from 'react'
interface typesofprops {
    restaurantName: string;
    cardPic: StaticImageData;
  }
const PopularRestaurantsCard = ({restaurantName, cardPic}:typesofprops) => {
  return (
    <span className='Popular-Restaurants-Card'>
      <Image src={cardPic} alt='Popular-Restaurants-Card-Pic' />
      <b>{restaurantName}</b>
    </span>
  )
}

export default PopularRestaurantsCard
