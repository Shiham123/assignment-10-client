const AddProduct = () => {
  return (
    <form>
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
            className="text-xl font-normal px-12 rounded-lg border-none outline-none"
          >
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
            <option value="date">Date</option>
            <option value="grape">Grape</option>
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
            type="text"
            name="rating"
            placeholder="Place your rating here"
            className="text-xl font-normal px-12 rounded-lg border-none outline-none"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-[#9bff2e] px-12 py-4 rounded-lg font-poppins tracking-widest font-bold text-2xl my-8"
          >
            Add Product
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
