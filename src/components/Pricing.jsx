/* eslint-disable react/prop-types */
import { useState } from "react";
import { arrowRight, CheckedIcon } from "../assets";
import { pricingData } from "../utilities/data";
import Button from "./Button";

const Pricing = ({ atHome, btnClick }) => {
  const [yearly, setYearly] = useState(false);
  const xImgStyle =
    "img-qrap lg:w-[35px] lg:h-[35px] w-[40px] h-[40px] bg-mainWhite rounded-full flex items-center justify-center shadow-xs";

  return (
    <div className="pricing w-[90%] mx-auto flex flex-col gap-10">
      <div className="mt-10 py-[2px] px-[2px] rounded-full md:border-[2px] border-[1px] border-darkerBlue lg:w-[370px] w-[90%] mx-auto flex items-center">
        <Button
          btnText={"Application"}
          btnStyle={
            "md:border-[2px] border-[1px] rounded-full text-xs border-darkerBlue px-5 py-[2px] bg-transparent"
          }
        />
        {/* className="py-[2px] text-xs px-[2px] bg-transparent flex items-center gap-2"> */}
        <button className="py-[2px] px-[2px] bg-transparent flex items-center text-xs gap-2">
          <span>Enjoy 5% discount on Booking</span>
          <img src={arrowRight} alt="" />
        </button>
      </div>

      <h1 className="font-showcase !text-[55px] text-center">
        Get your kids started with{" "}
        <span className="text-baseOrange">subscription classes</span> for
        flexible learning
      </h1>

      <div className="w-[200px] mx-auto flex items-center justify-between px-[4px] py-[2px] border-darkerBlue border-[2px] rounded-full">
        <Button
          btnClick={() => setYearly(false)}
          btnText={"Monthly"}
          btnStyle={`${
            yearly
              ? "bg-transparent text-darkerBlue"
              : "bg-darkerBlue text-mainWhite"
          } text-xs rounded-full px-5 py-[4px] `}
        />
        <Button
          btnClick={() => setYearly(true)}
          btnText={"Yearly"}
          btnStyle={`${
            yearly
              ? "bg-darkerBlue text-mainWhite"
              : "bg-transparent text-darkerBlue"
          } text-xs rounded-full px-5 py-[4px] `}
        />
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 mt-10">
        {pricingData.map((item, index) => (
          <div
            key={index}
            data-aos="flip-left"
            data-aos-duration="1000"
            className={`hover-effect shadow-lg rounded-2xl bg-[#F2F5FF]`}
          >
            <div className=" border-b-2 px-5 py-7 flex flex-col">
              <p className="!text-2xl font-showcase">{item.title}</p>
              {/* <h2 className="font-showcase !text-[40px]">{item.price}</h2> */}
              <h2 className="font-showcase !text-[40px]">
                <span>
                  N
                  {(yearly ? item.priceN * 12 : item.priceN).toLocaleString(
                    "en-US"
                  )}
                </span>{" "}
                /{" "}
                <span>
                  $
                  {(yearly ? item.priceD * 12 : item.priceD).toLocaleString(
                    "en-US"
                  )}
                </span>
              </h2>
              <p>
                {item.discountText} <br />
                {/* <span className="text-baseOrange">
                  {item.discountPrice}
                </span>{" "} */}
                <span className="text-baseOrange">
                  ={" "}
                  {(yearly
                    ? item.discountPriceN * 12
                    : item.discountPriceN
                  ).toLocaleString()}{" "}
                  /
                </span>{" "}
                <span className="text-baseOrange">
                  $
                  {(yearly
                    ? item.discountPriceD * 12
                    : item.discountPriceD
                  ).toLocaleString()}
                </span>
              </p>
            </div>

            <div className="px-5 py-7 flex flex-col gap-5">
              <div>
                <Button
                  btnStyle={
                    "rounded-full w-full border-darkerBlue border-[3px] text-darkerBlue py-2 text-lg"
                  }
                  btnText={"Start For Free"}
                  btnClick={btnClick}
                />
                <p className="text-xs text-center">
                  First - class trial. No credit card required
                </p>
              </div>

              <ul className="flex flex-col gap-5">
                {item.addedPcakage.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className={xImgStyle}>
                      <img src={CheckedIcon} alt="" className="w-[50%]" />
                    </div>
                    <p className="text-[14px]">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {}
      <div className="flex justify-center mb-20">
        {atHome ? <Button btnClick={btnClick} btnText={"Explore Now"} /> : ""}
      </div>
    </div>
  );
};

export default Pricing;
