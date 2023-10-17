const Brand = () => {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-12 md:grid md:grid-cols-2 md:gap-8 flex flex-col justify-center items-center my-12 gap-12">
        {/* item */}

        <div className="card lg:w-96 md:w-80 w-96 image-full hover:scale-110 hover:duration-500">
          <figure>
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/jj-ying-8bghKxNU1j0-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">Phone</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Show brand</button>
            </div>
          </div>
        </div>
        {/* item */}

        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/jj-ying-8bghKxNU1j0-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* item */}

        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/jj-ying-8bghKxNU1j0-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
