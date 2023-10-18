import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const BrandItems = () => {
  return (
    <div>
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

      {/* items  */}
      {/* ======================= */}

      <div className="flex justify-center items-center flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 md:px-[1rem] lg:px-[10rem] px-0">
        {/* item */}
        <div className="card w-80 bg-[#53ba00] shadow-xl my-8">
          <figure>
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/Microsoft/aaron-jones-wWFUqIzphTI-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <span className="font-poppins font-bold">Computer</span>
              <div className="badge font-poppins capitalize font-semibold text-xl p-4 text-[#53ba00] hover:text-black duration-500">
                Microsoft
              </div>
            </h2>
            <p className="font-poppins font-semibold tracking-wider">
              Type : Technology and Electronics
            </p>
            <p className="font-poppins font-semibold tracking-wider">
              $ 200 dollar
            </p>
            <p className="font-poppins font-semibold tracking-wider">
              Rating : 5/10
            </p>
            <div className="card-actions justify-start">
              <Link to="/itemDetails">
                <button className="bg-[#9bff2e] px-4 py-2 rounded-full hover:scale-110 duration-500 font-poppins font-semibold tracking-widest capitalize my-4">
                  show Details
                </button>
              </Link>
              <Link to="/updateItem">
                <button className="bg-[#9bff2e] px-4 py-2 rounded-full hover:scale-110 duration-500 font-poppins font-semibold tracking-widest capitalize">
                  Update Product
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandItems;
