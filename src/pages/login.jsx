import { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/context';

import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  const context = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const { loginEmailPassword, loginGoogle } = context;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    loginEmailPassword(email, password)
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => console.log(error));
  };

  const handleGoogle = () => {
    loginGoogle()
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <h1 className="font-poppins text-5xl font-bold tracking-widest leading-10 my-10 hover:scale-110 duration-300 hover:opacity-80 uppercase">
            Login page
          </h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="bg-[#9bff2e] text-black font-poppins text-3xl py-4 rounded-lg hover:bg-black hover:text-[#9bff2e] duration-500 tracking-widest"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            {/* google login */}

            <div className="flex justify-center items-center bg-[#9bff2e] text-black font-poppins text-2xl gap-4 py-4 rounded-lg hover:bg-black hover:text-[#9bff2e] duration-500 tracking-widest">
              <FcGoogle />
              <button onClick={handleGoogle}>Login with google</button>
            </div>

            {/* Register toggle */}
            <div className="px-5 font-poppins tracking-wider my-8">
              Don&apos;t have a account{' '}
              <Link to="/register">
                <span className="font-semibold hover:text-[#9bff2e] duration-500">
                  Register
                </span>
              </Link>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
