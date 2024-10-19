import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'
interface typesofprops {
    restaurantName: string;
    url: string;
    cardPic: StaticImageData;
  }
const PopularRestaurantsCard = ({restaurantName, cardPic, url}:typesofprops) => {
  return (
    <Link href={`${url}`} className='Popular-Restaurants-Card'>
      <Image src={cardPic} alt='Popular-Restaurants-Card-Pic' />
      <b>{restaurantName}</b>
    </Link>
  )
}

export default PopularRestaurantsCard
