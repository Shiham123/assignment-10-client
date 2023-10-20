import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/LOGO/20602801_6324728.jpg"
        alt=""
        className="w-6/12"
      />

      <Link to="/">
        <button className="bg-[#9bff2e] hover:bg-black hover:text-[#9bff2e] duration-500 px-12 py-4 rounded-lg font-poppins tracking-widest font-bold text-2xl my-8">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
