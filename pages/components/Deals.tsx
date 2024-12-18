import React, { useState } from "react";
import DealsCard from "./DealsCard";
import burger from "@/public/img/burgers.png";
import fishfry from "@/public/img/fishfry.png";

const Deals = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const button1Click = () => {
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
  };
  const button2Click = () => {
    setActive1(false);
    setActive2(true);
    setActive3(false);
    setActive4(false);
  };
  const button3Click = () => {
    setActive1(false);
    setActive2(false);
    setActive3(true);
    setActive4(false);
  };
  const button4Click = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(true);
  };

  return (
    <section className="deals-exclusive-box">
      <div className="deals-box-header section-header">
        <b>Up to -40% {"🎊"} Foood Dish exclusive deals</b>
        <span className="deals-tabs-btns">
          <button
            className={active1 ? "deals-tabs-btn-active" : "deals-tabs-btn"}
            onClick={button1Click}
          >
            Vegan
          </button>
          <button
            className={active2 ? "deals-tabs-btn-active" : "deals-tabs-btn"}
            onClick={button2Click}
          >
            Sushi
          </button>
          <button
            className={active3 ? "deals-tabs-btn-active" : "deals-tabs-btn"}
            onClick={button3Click}
          >
            Pizza & Fast food
          </button>
          <button
            className={active4 ? "deals-tabs-btn-active" : "deals-tabs-btn"}
            onClick={button4Click}
          >
            Other
          </button>
        </span>
        <select className="mobile-deals-categories-selector">
          <option value="" onClick={button1Click}>Sushi</option>
          <option value="" onClick={button2Click}>Vegan</option>
          <option value="" onClick={button3Click}>Pizza & Fast food</option>
          <option value="" onClick={button4Click}>Other</option>
        </select>
      </div>

      <div>
        {active1 && (
          <span className="deals-food-cards">
            <DealsCard
              url="/"
              title="Restaurant"
              company="Chef Burgers London"
              cardPic={burger}
            />
            <DealsCard
              url="/"
              title="Restaurant"
              company="Grand Ai Cafe London"
              cardPic={fishfry}
            />
            <DealsCard
              url="/"
              title="Restaurant"
              company="Butterbrot Caf’e London"
              cardPic={burger}
            />
          </span>
        )}
        {active2 && (
          <span className="deals-food-cards">
            <DealsCard
              url="/"
              title="Restaurant"
              company="Chef Burgers London"
              cardPic={burger}
            />
            <DealsCard
              url="/"
              title="Restaurant"
              company="Grand Ai Cafe London"
              cardPic={fishfry}
            />
            <DealsCard
              url="/"
              title="Restaurant"
              company="Butterbrot Caf’e London"
              cardPic={burger}
            />
          </span>
        )}
        {active3 && (
          <span className="deals-food-cards">
            <DealsCard
              url="/"
              title="Restaurant"
              company="Chef Burgers London"
              cardPic={burger}
            />
            <DealsCard
              url="/"
              title="Restaurant"
              company="Grand Ai Cafe London"
              cardPic={fishfry}
            />
            <DealsCard
              url="/"
              title="Restaurant"
              company="Butterbrot Caf’e London"
              cardPic={burger}
            />
          </span>
        )}
        {active4 && (
          <span className="deals-food-cards">
            <DealsCard
              url="/"
              title="Restaurant"
              company="Chef Burgers London"
              cardPic={burger}
            />
            <DealsCard
              url="/"
              title="Restaurant"
              company="Grand Ai Cafe London"
              cardPic={fishfry}
            />
            <DealsCard
              url="/"
              title="Restaurant"
              company="Butterbrot Caf’e London"
              cardPic={burger}
            />
          </span>
        )}
      </div>
    </section>
  );
};

export default Deals;
