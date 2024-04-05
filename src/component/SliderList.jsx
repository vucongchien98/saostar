/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import CardVertical from './CardVertical';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const SliderList = ({ data }) => {
  const [dataSlider, setDataSlider] = useState(null);
  useEffect(() => {
    setDataSlider(data);
  }, [data]);
  if (!dataSlider) {
    return <div>Loading...</div>; // hoặc thay bằng phần tử rỗng: return null;
  }
  return (
    <div className="mt-3">
      <Swiper
        style={{
          '--swiper-pagination-color': '#FFF',
        }}
        className="mySwiper"
        slidesPerView={3}
        grabCursor={true}
        spaceBetween={30}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
      >
        {dataSlider
          ? dataSlider.map((item, index) => (
              <SwiperSlide key={index}>
                <CardVertical data={item} titleSub={'fs-md px-3'} />
              </SwiperSlide>
            ))
          : ''}
      </Swiper>
    </div>
  );
};

export default SliderList;
