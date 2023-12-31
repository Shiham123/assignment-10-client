import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ItemDetails = () => {
  const { id } = useParams();
  const [isDetails, setIsDetails] = useState([]);

  useEffect(() => {
    fetch(`https://server-side-assignment-10.vercel.app/itemDetails/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsDetails(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const { name, url, brand, type, price, rating, details } = isDetails;

  const handleAddToCart = () => {
    const cartItems = {
      name,
      price,
      url,
      brand,
    };

    fetch('https://server-side-assignment-10.vercel.app/cart', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          text: 'Item added to cart successfully',
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center items-center flex-col w-9/12 m-auto text-center">
      <img
        src={url}
        alt=""
        className="rounded-lg my-12 w-5/12 hover:scale-110 duration-500"
      />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins tracking-widest font-semibold capitalize py-4">
        {name}
      </h1>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins tracking-widest font-semibold capitalize py-4">
        Brand Name : {brand}
      </h1>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins tracking-widest font-semibold capitalize py-4">
        Type of product : {type}
      </h1>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-poppins tracking-widest font-semibold capitalize py-4">
        Description : <span className="font-normal">{details}</span>
      </h1>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-poppins tracking-widest font-semibold py-4">
        Price : ${price}
      </h1>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-poppins tracking-widest font-semibold py-4">
        Rating : {rating}
      </h1>
      <button
        onClick={() => handleAddToCart()}
        className="bg-[#9bff2e] text-black font-poppins text-xl md:text-2xl lg:text-3xl my-8 py-8 px-8 rounded-lg hover:bg-black hover:text-[#9bff2e] duration-500 tracking-widest capitalize font-bold"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ItemDetails;
