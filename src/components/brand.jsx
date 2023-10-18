const Brand = () => {
  return (
    <div>
      <h1 className="m-auto text-center my-20 font-poppins font-bold text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase">
        Brand Name
      </h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap-12 md:grid md:grid-cols-2 md:gap-8 flex flex-col justify-center items-center my-12 gap-12 lg:ml-20 md:ml-8 md:mr-8">
        {/* item */}

        <div className="card lg:w-96 md:w-80 w-96 image-full hover:scale-110 hover:duration-500">
          <figure>
            <img
              className="object-cover"
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/LOGO/_1e7568f5-4b7f-44b3-8d44-3ed2863e5b1d.jpeg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">Microsoft</h2>
          </div>
        </div>
        {/* item */}

        <div className="card lg:w-96 md:w-80 w-96 image-full hover:scale-110 hover:duration-500">
          <figure>
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/LOGO/_3691c38f-19fc-4caf-922e-b9f0877c22a8.jpeg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">Google</h2>
          </div>
        </div>

        {/* item */}
        <div className="card lg:w-96 md:w-80 w-96 image-full hover:scale-110 hover:duration-500">
          <figure>
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/LOGO/_5eb46246-3b7f-4595-a85e-213d2fc7e91d.jpeg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">LG</h2>
          </div>
        </div>

        {/* item */}
        <div className="card lg:w-96 md:w-80 w-96 image-full hover:scale-110 hover:duration-500">
          <figure>
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/LOGO/_68c7b6e1-e200-4559-b6b9-877ce5d18c2d.jpeg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">Phone</h2>
          </div>
        </div>

        {/* item */}
        <div className="card lg:w-96 md:w-80 w-96 image-full hover:scale-110 hover:duration-500">
          <figure>
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/LOGO/_6b4614bc-af6f-41b0-b801-890c6ecc0aae.jpeg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">Phone</h2>
          </div>
        </div>

        {/* item */}
        <div className="card lg:w-96 md:w-80 w-96 image-full hover:scale-110 hover:duration-500">
          <figure>
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/LOGO/_dcc07856-1e8d-4bce-a230-a20055669b34.jpeg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">Phone</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
