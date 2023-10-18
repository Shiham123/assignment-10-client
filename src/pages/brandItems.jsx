import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BrandItems = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="flex justify-center items-center w-9/12 m-auto text-center py-[5rem]">
          <img
            src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/Microsoft/aaron-jones-wWFUqIzphTI-unsplash.jpg"
            alt=""
            className="w-full rounded-lg"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex justify-center items-center w-9/12 m-auto text-center py-[5rem]">
          <img
            className="w-full rounded-lg"
            src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/Microsoft/billy-freeman-DPOdCl4bGJU-unsplash.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center w-9/12 m-auto text-center py-[5rem]">
          <img
            className="w-full rounded-lg"
            src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/Microsoft/c-d-x-PDX_a_82obo-unsplash.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BrandItems;
