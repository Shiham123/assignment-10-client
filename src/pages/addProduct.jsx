import { useRef } from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
  const formRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const url = formData.get('url');
    const brand = formData.get('brand');
    const type = formData.get('type');
    const price = formData.get('price');
    const details = formData.get('details');
    const rating = formData.get('rating');
    const userAddData = {
      name,
      url,
      brand,
      type,
      price,
      details,
      rating,
    };

    fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },

      body: JSON.stringify(userAddData),
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire({
          icon: 'success',
          text: 'Item added to database successfully',
        });
        console.log(data);
        formRef.current.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="border-4 bg-[#53ba00] flex justify-center items-center flex-col py-12">
        <div className="flex font-poppins font-semibold text-2xl gap-12 my-4">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            placeholder="Product name"
            className="text-xl font-normal px-12 rounded-lg border-none outline-none"
          />
        </div>

        <div className="flex font-poppins font-semibold text-2xl gap-12 my-4">
          <label htmlFor="image">Image : </label>
          <input
            type="url"
            name="url"
            placeholder="Photo url here"
            className="text-xl font-normal px-12 rounded-lg border-none outline-none"
          />
        </div>

        <div className="flex font-poppins font-semibold text-2xl gap-12 my-4">
          <label htmlFor="dropdown">Brand Name :</label>
          <select
            id="dropdown"
            name="brand"
            className="text-xl font-normal px-12 rounded-lg border-none outline-none"
          >
            <option value="microsoft">Microsoft</option>
            <option value="google">Google</option>
            <option value="sony">Sony</option>
            <option value="apple">Apple</option>
            <option value="lg">LG</option>
            <option value="samsung">Samsung</option>
          </select>
        </div>

        <div className="flex font-poppins font-semibold text-2xl gap-12 my-4">
          <label htmlFor="type">Type :</label>
          <input
            type="text"
            name="type"
            placeholder="Product type here"
            className="text-xl font-normal px-12 rounded-lg border-none outline-none"
          />
        </div>

        <div className="flex font-poppins font-semibold text-2xl gap-12 my-4">
          <label htmlFor="price">Price : </label>
          <input
            type="number"
            name="price"
            placeholder="Type your price here"
            className="text-xl font-normal px-12 rounded-lg border-none outline-none"
          />
        </div>

        <div className="flex font-poppins font-semibold text-2xl gap-12 my-4">
          <label htmlFor="details">Details : </label>
          <textarea
            name="details"
            cols="30"
            rows="2"
            placeholder="Type your details here"
            className="text-xl font-normal px-12 rounded-lg border-none outline-none"
          ></textarea>
        </div>

        <div className="flex font-poppins font-semibold text-2xl gap-12 my-4">
          <label htmlFor="price">Rating : </label>
          <input
            type="number"
            name="rating"
            min="0"
            max="10"
            placeholder="Place your rating"
            className="text-xl font-normal px-12 rounded-lg border-none outline-none"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-[#9bff2e] hover:bg-black hover:text-[#9bff2e] duration-500 px-12 py-4 rounded-lg font-poppins tracking-widest font-bold text-2xl my-8"
          >
            Add Product
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
