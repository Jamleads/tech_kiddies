import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
// import { ChildImage, ParentImg } from "../assets";
import { Pagination } from "swiper/modules";
import { testimonies } from "../utilities/data";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonies = () => {
  const [childTestimonies, setChildTestimonies] = useState(true);
  useState;
  const switchTestimonies = (e) => {
    const buttonText = e.target.textContent.trim();
    setChildTestimonies(buttonText === "Children");
  };
  return (
    <section
      id="testimonies"
      className="bg-lightYellow py-10 flex flex-col gap-10"
    >
      <span className="w-[120px] mx-auto py-[2px] px-[2px] rounded-full md:border-[2px] border-[1px] border-darkerBlue flex items-center justify-center">
        <Button
          btnText={"Testimonies"}
          btnStyle={
            "md:border-[2px] border-[1px] text-xs rounded-full border-darkerBlue px-5 py-[2px] bg-transparent"
          }
        />
      </span>

      <h1 className="font-showcase text-center show-text">What People Say</h1>

      <div className="w-[200px] mx-auto flex items-center justify-between px-[4px] py-[2px] border-darkerBlue border-[2px] rounded-full">
        <Button
          btnClick={(e) => switchTestimonies(e)}
          btnText={"Parents"}
          btnStyle={`${
            childTestimonies
              ? "bg-transparent text-darkerBlue"
              : "bg-darkerBlue text-mainWhite"
          } text-xs rounded-full px-5 py-[4px] `}
        />
        <Button
          btnClick={(e) => switchTestimonies(e)}
          btnText={"Children"}
          btnStyle={`${
            childTestimonies
              ? "bg-darkerBlue text-mainWhite"
              : "bg-transparent text-darkerBlue"
          } text-xs rounded-full px-5 py-[4px] `}
        />
      </div>

      <div data-aos="zoom-in" className="lg:w-[60%] w-[90%] mx-auto">
        <Swiper pagination modules={[Pagination]} className="mySwiper">
          {testimonies
            .filter((item) => item.isParent === !childTestimonies)
            .map((each) => (
              <SwiperSlide key={each.id}>
                <div className="testimonies lg:h-[350px] flex lg:flex-row flex-col items-center">
                  <div className="lg:w-[100%] px-8  lg:h-full h-[400px] flex items-center justify-center bg-mainWhite lg:rounded-s-2xl">
                    <div className="text-darkerBlue flex flex-col gap-5">
                      <h1 className="inter-small !text-[25px] !leading-10 !font-light">
                        {each.testMessage}
                      </h1>
                      <div className="name">
                        <p>{each.name}</p>
                        <span className=" font-thin">
                          {each.isParent === true ? "Parent" : "Children"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* <div className="lg:w-[45%] h-full reviewImage">
                    <img
                      src={each.isParent === true ? ParentImg : ChildImage}
                      alt=""
                      className="w-full h-full rounded-r-2xl"
                    />
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonies;
