import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const MyCart = () => {
  const [cartData, setCartData] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState('');

  useEffect(() => {
    fetch('https://server-side-assignment-10.vercel.app/cart', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          setIsCartEmpty('not item is added');
        } else {
          console.log(data);
          setCartData(data);
          setIsCartEmpty('');
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCartDelete = (id) => {
    fetch(`https://server-side-assignment-10.vercel.app/cart/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: 'error',
          text: 'item deleted successfully',
        });
        setCartData((prevData) => prevData.filter((item) => item._id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-8 mx-8 my-12">
      {isCartEmpty ? (
        <p>No item is added</p>
      ) : (
        cartData.map((item) => {
          const { _id, name, url, price, brand } = item;
          return (
            <div key={_id}>
              <div className="card card-side bg-base-100 shadow-xl">
                <div>
                  <img
                    src={url}
                    alt="Movie"
                    width="200px"
                    className="rounded-lg px-4 py-4"
                  />
                </div>
                <div className="card-body">
                  <h2 className="card-title font-poppins">
                    Product name : {name}
                  </h2>
                  <p className="font-poppins tracking-wide">
                    Brand name : {brand}
                  </p>
                  <p className="font-poppins tracking-wide">Price : ${price}</p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => handleCartDelete(_id)}
                      className="bg-[#9bff2e] text-black font-poppins my-8 py-4 px-4 rounded-lg hover:bg-black hover:text-[#9bff2e] duration-500 tracking-widest capitalize font-bold"
                    >
                      Delete item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MyCart;
