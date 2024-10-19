import React from "react";
import PopularCategoriesCard from "./PopularCategoriesCard";
import burger from "@/public/img/burger.png";
import Salads from '@/public/img/Salads.png';
import PastaCasuals from '@/public/img/PastaCasuals.png';
import Pizza from '@/public/img/Pizza.png';
import Breakfast from '@/public/img/Breakfast.png';
import Soups from '@/public/img/soups.png';

const PopularCategories = () => {
  return (
    <section className="Popular-category-box">
      <span className="popular-categories-header">
        <b>Foood Dish Popular Categories 🤩</b>
      </span>
      <div className="popular-categories-cards-box">
        <PopularCategoriesCard
          categories="Burgers & Fast food"
          companyCounter="21 Restaurants"
          cardPic={burger}
        />
        <PopularCategoriesCard
          categories="Salads"
          companyCounter="32 Restaurants"
          cardPic={Salads}
        />
        <PopularCategoriesCard
          categories="Pasta & Casuals"
          companyCounter="4 Restaurants"
          cardPic={PastaCasuals}
        />
        <PopularCategoriesCard
          categories="Pizza"
          companyCounter="32 Restaurants"
          cardPic={Pizza}
        />
        <PopularCategoriesCard
          categories="Breakfast"
          companyCounter="4 Restaurants"
          cardPic={Breakfast}
        />
        <PopularCategoriesCard
          categories="Soups"
          companyCounter="32 Restaurants"
          cardPic={Soups}
        />
      </div>
    </section>
  );
};

export default PopularCategories;
