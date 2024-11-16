import Image from "next/image";
import React, { useState } from "react";
import riderPic from "@/public/img/burgers.png";

const TrackDish = () => {
  const [dishReady, setDishReady] = useState(true);
  const [riderRecived, setRiderRecived] = useState(false);
  const [riderOnWay, setRiderOnWay] = useState(false);
  const [riderOnDoor, setRiderOnDoor] = useState(false);

  const dishready = () => {
    setDishReady(true);
    setRiderRecived(false);
    setRiderOnWay(false);
    setRiderOnDoor(false);
  };
  const riderrecieved = () => {
    setDishReady(false);
    setRiderRecived(true);
    setRiderOnWay(false);
    setRiderOnDoor(false);
  };
  const rideronway = () => {
    setDishReady(false);
    setRiderRecived(false);
    setRiderOnWay(true);
    setRiderOnDoor(false);
  };
  const riderondoor = () => {
    setDishReady(false);
    setRiderRecived(false);
    setRiderOnWay(false);
    setRiderOnDoor(true);
  };

  return (
    <section className="dish-tracker-box padding-off-box py-6" id="track">
      <b className="text-3xl">Track your Rider</b>
      <div className="tracker-box">
        <div className="tracker-place">
          <span className="tracker-place-details" onClick={dishready}>
            <h4 className="tracker-place-title">Order Ready</h4>
            <p className="tracker-place-description">
              Your order is ready, and handeld to the Rider.
            </p>
          </span>

          <span className="tracker-place-details" onClick={riderrecieved}>
            <h4 className="tracker-place-title">Rider Recived</h4>
            <p className="tracker-place-description">
              Your order is recived by the Rider from {"*"}
              <b>restaurants</b>
              {"*"}.
            </p>
          </span>

          <span className="tracker-place-details" onClick={rideronway}>
            <h4 className="tracker-place-title">Rider On the way</h4>
            <p className="tracker-place-description">
              Your order is recived by the Rider, and he/she on the way with
              your Order.
            </p>
          </span>

          <span className="tracker-place-details" onClick={riderondoor}>
            <h4 className="tracker-place-title">Rider on the door</h4>
            <p className="tracker-place-description">
              Your order is on your door please open the door with sweet heart
              and give positive/negative review to the rider
            </p>
          </span>
        </div>
        <div className="tracker-place-about w-full">
          {dishReady && (
            <div className="tracker-place-about-box w-full flex items-start justify-between gap-4">
              <div className="tracker-place-card-about w-1/2 text-gray-400">
                <h5 className="tracker-place-card-about-title text-orange-500 font-bold text-2xl">
                  Your Order Ready
                </h5>
                <p>Our mission is provide you your dish on time.</p>
                <div className="ridder-card-box relative text-[15px] w-full">
                  <span className="rider-detail-card1">
                    <span className="rider-detail-card-context-box text-gray-400">
                      <h6>Pizza</h6>
                      <p>Londan, BH, 67854</p>
                      <p>20-04-2024 | 12:40:35 AM</p>
                      <p>900$</p>
                    </span>
                    <span className="rider-detail-card-pic-box">
                      <Image
                        src={riderPic}
                        alt="rider-pic"
                        className="w-32 h-auto rounded-md"
                      />
                    </span>
                  </span>
                  <span className="rider-detail-card2">
                    <span className="rider-detail-card-context-box text-gray-400">
                      <h6>Salads</h6>
                      <p>Londan, BH, 67854</p>
                      <p>20-04-2024 | 12:40:35 AM</p>
                      <p>900$</p>
                    </span>
                    <span className="rider-detail-card-pic-box">
                      <Image
                        src={riderPic}
                        alt="rider-pic"
                        className="w-32 h-auto rounded-md"
                      />
                    </span>
                  </span>
                  <span className="rider-detail-card1">
                    <span className="rider-detail-card-context-box text-gray-400">
                      <h6>Burgers</h6>
                      <p>Londan, BH, 67854</p>
                      <p>20-04-2024 | 12:40:35 AM</p>
                      <p>900$</p>
                    </span>
                    <span className="rider-detail-card-pic-box">
                      <Image
                        src={riderPic}
                        alt="rider-pic"
                        className="w-32 h-auto rounded-md"
                      />
                    </span>
                  </span>
                  <span className="rider-detail-card2">
                    <span className="rider-detail-card-context-box text-gray-400">
                      <h6>Finger Chips</h6>
                      <p>Londan, BH, 67854</p>
                      <p>20-04-2024 | 12:40:35 AM</p>
                      <p>900$</p>
                    </span>
                    <span className="rider-detail-card-pic-box">
                      <Image
                        src={riderPic}
                        alt="rider-pic"
                        className="w-32 h-auto rounded-md"
                      />
                    </span>
                  </span>
                </div>
                <span className="total-price-box">
                  <h2>Total Price {":"}</h2>
                  <b>1800$</b>
                </span>
              </div>
              <div className="tracker-place-card-about three-d-effect flex items-center w-1/2 justify-center flex-col">
                <h2 className="text-gray-400 text-4xl w-full text-center">
                  Coming Soon
                </h2>
                <h2 className="text-gray-400 text-4xl w-full text-center">
                  Restaurants 3D Effects
                </h2>
              </div>
            </div>
          )}
          {riderRecived && (
            <div className="tracker-place-about-box w-full flex items-start justify-between gap-4">
              <div className="tracker-place-card-about three-d-effect flex items-center w-1/2 justify-center flex-col">
                <h2 className="text-gray-400 text-4xl w-full text-center">
                  Coming Soon
                </h2>
                <h2 className="text-gray-400 text-4xl w-full text-center">
                  Restaurants 3D Effects
                </h2>
              </div>
              <div className="tracker-place-card-about w-1/2 text-gray-400">
                <h5 className="tracker-place-card-about-title text-orange-500 font-bold text-2xl">
                  Rider Recived The Order
                </h5>
                <p>Our mission is provide you your dish on time.</p>
                <div className="ridder-card-box relative text-[15px] w-full">
                  <span className="rider-detail-card1">
                    <span className="rider-detail-card-context-box text-gray-400">
                      <h6>Pizza</h6>
                      <p>Londan, BH, 67854</p>
                      <p>20-04-2024 | 12:40:35 AM</p>
                      <p>900$</p>
                    </span>
                    <span className="rider-detail-card-pic-box">
                      <Image
                        src={riderPic}
                        alt="rider-pic"
                        className="w-32 h-auto rounded-md"
                      />
                    </span>
                  </span>
                  <span className="rider-detail-card2">
                    <span className="rider-detail-card-context-box text-gray-400">
                      <h6>Salads</h6>
                      <p>Londan, BH, 67854</p>
                      <p>20-04-2024 | 12:40:35 AM</p>
                      <p>900$</p>
                    </span>
                    <span className="rider-detail-card-pic-box">
                      <Image
                        src={riderPic}
                        alt="rider-pic"
                        className="w-32 h-auto rounded-md"
                      />
                    </span>
                  </span>
                  <span className="rider-detail-card1">
                    <span className="rider-detail-card-context-box text-gray-400">
                      <h6>Burgers</h6>
                      <p>Londan, BH, 67854</p>
                      <p>20-04-2024 | 12:40:35 AM</p>
                      <p>900$</p>
                    </span>
                    <span className="rider-detail-card-pic-box">
                      <Image
                        src={riderPic}
                        alt="rider-pic"
                        className="w-32 h-auto rounded-md"
                      />
                    </span>
                  </span>
                  <span className="rider-detail-card2">
                    <span className="rider-detail-card-context-box text-gray-400">
                      <h6>Finger Chips</h6>
                      <p>Londan, BH, 67854</p>
                      <p>20-04-2024 | 12:40:35 AM</p>
                      <p>900$</p>
                    </span>
                    <span className="rider-detail-card-pic-box">
                      <Image
                        src={riderPic}
                        alt="rider-pic"
                        className="w-32 h-auto rounded-md"
                      />
                    </span>
                  </span>
                </div>
                <span className="total-price-box">
                  <h2>Total Price {":"}</h2>
                  <b>1800$</b>
                </span>
              </div>
            </div>
          )}
          {riderOnWay && (
            <div className="tracker-place-about-box w-full flex items-start justify-between gap-4">
              <div className="tracker-place-card-about w-1/2 text-gray-400">
                <h5 className="tracker-place-card-about-title text-orange-500 font-bold text-2xl">
                  Your rider on the way
                </h5>
                <p>Our mission is provide you your dish on time.</p>
                <div className="ridder-card-box relative text-[15px] w-full">
                  <span className="rider-detail-card1">
                    <span className="rider-detail-card-context-box text-gray-400">
                      <h6>Pizza</h6>
                      <p>Londan, BH, 67854</p>
                      <p>20-04-2024 | 12:40:35 AM</p>
                      <p>900$</p>
                    </span>
                    <span className="rider-detail-card-pic-box">
                      <Image
                        src={riderPic}
                        alt="rider-pic"
                        className="w-32 h-auto rounded-md"
                      />
                    </span>
                  </span>
                  <span className="rider-detail-card2">
                    <span className="rider-detail-card-context-box text-gray-400">
                      <h6>Salads</h6>
                      <p>Londan, BH, 67854</p>
                      <p>20-04-2024 | 12:40:35 AM</p>
                      <p>900$</p>
                    </span>
                    <span className="rider-detail-card-pic-box">
                      <Image
                        src={riderPic}
                        alt="rider-pic"
                        className="w-32 h-auto rounded-md"
                      />
                    </span>
                  </span>
                  <span className="rider-detail-card1">
                    <span className="rider-detail-card-context-box text-gray-400">
                      <h6>Burgers</h6>
                      <p>Londan, BH, 67854</p>
                      <p>20-04-2024 | 12:40:35 AM</p>
                      <p>900$</p>
                    </span>
                    <span className="rider-detail-card-pic-box">
                      <Image
                        src={riderPic}
                        alt="rider-pic"
                        className="w-32 h-auto rounded-md"
                      />
                    </span>
                  </span>
                  <span className="rider-detail-card2">
                    <span className="rider-detail-card-context-box text-gray-400">
                      <h6>Finger Chips</h6>
                      <p>Londan, BH, 67854</p>
                      <p>20-04-2024 | 12:40:35 AM</p>
                      <p>900$</p>
                    </span>
                    <span className="rider-detail-card-pic-box">
                      <Image
                        src={riderPic}
                        alt="rider-pic"
                        className="w-32 h-auto rounded-md"
                      />
                    </span>
                  </span>
                </div>
                <span className="total-price-box">
                  <h2>Total Price {":"}</h2>
                  <b>1800$</b>
                </span>
              </div>
              <div className="tracker-place-card-about three-d-effect flex items-center w-1/2 justify-center flex-col">
                <h2 className="text-gray-400 text-4xl w-full text-center">
                  Coming Soon
                </h2>
                <h2 className="text-gray-400 text-4xl w-full text-center">
                  Restaurants 3D Effects
                </h2>
              </div>
            </div>
          )}
          {riderOnDoor && (
            <div className="tracker-place-about-box w-full flex items-start justify-between gap-4">
              <div className="tracker-place-card-about three-d-effect flex items-center w-1/2 justify-center flex-col">
                <h2 className="text-gray-400 text-4xl w-full text-center">
                  Coming Soon
                </h2>
                <h2 className="text-gray-400 text-4xl w-full text-center">
                  Restaurants 3D Effects
                </h2>
              </div>
              <div className="tracker-place-card-about w-1/2 text-gray-400">
                <h5 className="tracker-place-card-about-title text-orange-500 font-bold text-2xl">
                  Rider on the Door.
                </h5>
                <p>Our mission is provide you your dish on time.</p>
                <div className="ridder-card-box relative text-[15px] w-full">
                  <span className="rider-detail-card1">
                    <span className="rider-detail-card-context-box text-gray-400">
                      <h6>Pizza</h6>
                      <p>Londan, BH, 67854</p>
                      <p>20-04-2024 | 12:40:35 AM</p>
                      <p>900$</p>
                    </span>
                    <span className="rider-detail-card-pic-box">
                      <Image
                        src={riderPic}
                        alt="rider-pic"
                        className="w-32 h-auto rounded-md"
                      />
                    </span>
                  </span>
                  <span className="rider-detail-card2">
                    <span className="rider-detail-card-context-box text-gray-400">
                      <h6>Salads</h6>
                      <p>Londan, BH, 67854</p>
                      <p>20-04-2024 | 12:40:35 AM</p>
                      <p>900$</p>
                    </span>
                    <span className="rider-detail-card-pic-box">
                      <Image
                        src={riderPic}
                        alt="rider-pic"
                        className="w-32 h-auto rounded-md"
                      />
                    </span>
                  </span>
                  <span className="rider-detail-card1">
                    <span className="rider-detail-card-context-box text-gray-400">
                      <h6>Burgers</h6>
                      <p>Londan, BH, 67854</p>
                      <p>20-04-2024 | 12:40:35 AM</p>
                      <p>900$</p>
                    </span>
                    <span className="rider-detail-card-pic-box">
                      <Image
                        src={riderPic}
                        alt="rider-pic"
                        className="w-32 h-auto rounded-md"
                      />
                    </span>
                  </span>
                  <span className="rider-detail-card2">
                    <span className="rider-detail-card-context-box text-gray-400">
                      <h6>Finger Chips</h6>
                      <p>Londan, BH, 67854</p>
                      <p>20-04-2024 | 12:40:35 AM</p>
                      <p>900$</p>
                    </span>
                    <span className="rider-detail-card-pic-box">
                      <Image
                        src={riderPic}
                        alt="rider-pic"
                        className="w-32 h-auto rounded-md"
                      />
                    </span>
                  </span>
                </div>
                <span className="total-price-box">
                  <h2>Total Price {":"}</h2>
                  <b>1800$</b>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackDish;
