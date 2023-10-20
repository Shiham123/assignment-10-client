import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

const BrandItems = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [isEmpty, setIsEmpty] = useState('');

  useEffect(() => {
    fetch(
      `https://server-side-assignment-10-p9u3k4b9y-shiham123.vercel.app/items/${name}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application.json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          setIsEmpty('no data found');
        } else {
          setItems(data);
          setIsEmpty('');
        }
      })
      .catch((error) => console.log(error));
  }, [name]);

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

        {isEmpty ? (
          <div className="flex justify-center items-center flex-col m-10">
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/LOGO/5928294_3009287.jpg"
              alt=""
            />
            <p className="font-poppins text-5xl hover:text-[#9bff2e] hover:bg-black duration-500 p-8 uppercase tracking-widest">
              no item available
            </p>
          </div>
        ) : (
          items.map((item) => {
            const { _id, url, brand, name, price, rating, type } = item;

            return (
              <div key={_id} className="card w-80 bg-[#53ba00] shadow-xl my-8">
                <figure>
                  <img
                    className="w-full h-[15rem] object-cover"
                    src={url}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    <span className="font-poppins font-bold">{name}</span>
                    <div className="badge font-poppins capitalize font-semibold text-xl p-4 text-[#53ba00] hover:text-black duration-500">
                      {brand}
                    </div>
                  </h2>
                  <p className="font-poppins font-semibold tracking-wider">
                    Type : {type}
                  </p>
                  <p className="font-poppins font-semibold tracking-wider">
                    $ {price} dollar
                  </p>
                  <p className="font-poppins font-semibold tracking-wider">
                    Rating : {rating}/10
                  </p>
                  <div className="card-actions justify-start">
                    <Link to={`/itemDetails/${_id}`}>
                      <button className="bg-[#9bff2e] hover:bg-black hover:text-[#9bff2e] px-4 py-2 rounded-full hover:scale-110 duration-500 font-poppins font-semibold tracking-widest capitalize my-4">
                        show Details
                      </button>
                    </Link>
                    <Link to={`/updateItem/${_id}`}>
                      <button className="bg-[#9bff2e] hover:bg-black hover:text-[#9bff2e] px-4 py-2 rounded-full hover:scale-110 duration-500 font-poppins font-semibold tracking-widest capitalize">
                        Update Product
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BrandItems;
