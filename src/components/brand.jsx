import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Brand = () => {
  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    fetch('/brand.json')
      .then((response) => response.json())
      .then((data) => {
        setBrandData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="m-auto text-center my-20 font-poppins font-bold text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase">
        Brand Name
      </h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap-12 md:grid md:grid-cols-2 md:gap-8 flex flex-col justify-center items-center my-12 gap-12 lg:ml-20 md:ml-8 md:mr-8">
        {/* item */}

        {brandData &&
          brandData.map((item) => {
            const { id, name, image } = item;
            return (
              <div key={id}>
                <Link to={`/brand/${name}`}>
                  <div className="card lg:w-96 md:w-80 w-96 image-full hover:scale-110 hover:duration-500">
                    <figure>
                      <img className="object-cover" src={image} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-center">{name}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Brand;
