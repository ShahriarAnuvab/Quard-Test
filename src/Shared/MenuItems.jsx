import { useRef } from "react";
import PropTypes from "prop-types";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const MenuItems = ({ data, text }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container mx-auto mt-10">
      <div className="flex items-center gap-10 ">
        <div className="flex items-center justify-between w-full text-[#2f323b] mb-2">
          <h1 className="text-2xl lg:text-4xl font-bold">{text}</h1>
          <Link to="/addmore">
           
            <p className=" hidden xl:block  text-[#fc6011]">AddMore</p>
          </Link>
        </div>
        <div className="flex items-center justify-end mb-2">
          <div ref={nextRef} className="hidden lg:block cursor-pointer">
            <MdOutlineArrowBackIos />
          </div>
          <div ref={prevRef} className="cursor-pointer">
            <MdOutlineArrowForwardIos />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.navigation.update();
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {data.map((menuItem) => (
            <SwiperSlide key={menuItem.Id}>
              <div className=" rounded-md">
                <img
                  src={menuItem.ImageUrl}
                  alt={menuItem.Name}
                  className=" h-[300px] w-full object-cover mb-4 rounded-xl shadow-lg"
                />
                <p className="text-center text-xl">{menuItem.Name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

MenuItems.propTypes = {
  data: PropTypes.array,
  text: PropTypes.string,
};
export default MenuItems;
