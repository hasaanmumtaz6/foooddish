import React from 'react'
import PopularRestaurantsCard from './PopularRestaurantsCard'
import McDonalds from '@/public/img/macdonalds.png'
import PapaJhones from '@/public/img/papajhons.png'
import Kfc from '@/public/img/kfc.png'
import Texas from '@/public/img/texas.png'
import BurgerKing from '@/public/img/burgerking.png'
import Shawarma from '@/public/img/shawarma.png'


const PopularRestaurants = () => {
  return (
    <section className='Popular-Restaurants-box'>
      <div className='Popular-Restaurants-Card-header'>
        <b>Popular Restaurants</b>
      </div>
      <span className='Popular-Restaurants-Card-box'>
        <PopularRestaurantsCard restaurantName="McDonald’s" cardPic={McDonalds} />
        <PopularRestaurantsCard restaurantName="Papa Jhones" cardPic={PapaJhones} />
        <PopularRestaurantsCard restaurantName="KFC" cardPic={Kfc} />
        <PopularRestaurantsCard restaurantName="Texas Chicken" cardPic={Texas} />
        <PopularRestaurantsCard restaurantName="Burger King" cardPic={BurgerKing} />
        <PopularRestaurantsCard restaurantName="Shauarma 1" cardPic={Shawarma} />
      </span>
    </section>
  )
}

export default PopularRestaurants
