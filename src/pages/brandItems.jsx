import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/Microsoft/aaron-jones-wWFUqIzphTI-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">Microsoft</div>
            </h2>
            <p>Technology and Electronics</p>
            <p>$ 200 dollar</p>
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">show Details</div>
              <div className="badge badge-outline">Update Product</div>
            </div>
          </div>
        </div>
        {/* item */}
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/Microsoft/aaron-jones-wWFUqIzphTI-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">Microsoft</div>
            </h2>
            <p>Technology and Electronics</p>
            <p>$ 200 dollar</p>
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">show Details</div>
              <div className="badge badge-outline">Update Product</div>
            </div>
          </div>
        </div>
        {/* item */}
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/Microsoft/aaron-jones-wWFUqIzphTI-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">Microsoft</div>
            </h2>
            <p>Technology and Electronics</p>
            <p>$ 200 dollar</p>
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">show Details</div>
              <div className="badge badge-outline">Update Product</div>
            </div>
          </div>
        </div>
        {/* item */}
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/Microsoft/aaron-jones-wWFUqIzphTI-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">Microsoft</div>
            </h2>
            <p>Technology and Electronics</p>
            <p>$ 200 dollar</p>
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">show Details</div>
              <div className="badge badge-outline">Update Product</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandItems;
