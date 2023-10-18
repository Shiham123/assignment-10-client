import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/context';

const RegisterPage = () => {
  const context = useContext(AppContext);
  const { createUserEmailPassword, showProfile } = context;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userName = formData.get('username');
    const email = formData.get('email');
    const photoUrl = formData.get('url');
    const password = formData.get('password');

    createUserEmailPassword(email, password)
      .then((result) => {
        console.log(result);
        showProfile(userName, photoUrl)
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <h1 className="font-poppins text-5xl font-bold tracking-widest leading-10 my-10 hover:scale-110 duration-300 hover:opacity-80 uppercase">
            Register page
          </h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              {/* user name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-poppins">User Name :</span>
                </label>
                <input
                  type="text"
                  placeholder="UserName"
                  className="input input-bordered font-poppins"
                  name="username"
                  required
                />
              </div>

              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-poppins">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered font-poppins"
                  name="email"
                  required
                />
              </div>

              {/* photoUrl */}
              <div className="form-control">
                <label className="label font-poppins">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="url"
                  placeholder="Photo Url"
                  className="input input-bordered font-poppins"
                  name="url"
                  required
                />
              </div>

              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-poppins">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered font-poppins"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="bg-[#9bff2e] text-black font-poppins text-3xl py-4 rounded-lg hover:bg-black hover:text-[#9bff2e] duration-500 tracking-widest"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="px-5 font-poppins tracking-wider">
              Already have a account{' '}
              <Link to="/login">
                <span className="font-semibold hover:text-[#9bff2e] duration-500">
                  Login
                </span>
              </Link>
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
