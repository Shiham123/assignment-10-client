import React, { useContext } from 'react';
import {
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import { Link, NavLink } from 'react-router-dom';
import { AppContext } from '../context/context';

import Swal from 'sweetalert2';

const NavbarItem = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const context = useContext(AppContext);
  const { user, logout } = context;

  const photoUrl = user?.photoURL;
  const displayName = user?.displayName;

  const handleLogout = () => {
    logout()
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: 'success',
          text: 'Logout successfully',
        });
      })
      .catch((error) => console.log(error));
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-white opacity-80 font-poppins font-semibold'
              : 'font-semibold text-gray-900'
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-white opacity-80 font-poppins font-semibold'
              : 'font-semibold text-gray-900'
          }
        >
          Add Product
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/myCart"
          className={({ isPending, isActive }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-white opacity-80 font-poppins font-semibold'
              : 'font-semibold text-gray-900'
          }
        >
          My Cart
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="mx-auto py-2 px-4 lg:px-8 lg:py-4 bg-[#53ba00]">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <div className="flex justify-center items-center gap-4">
            <img
              className="rounded-full hover:scale-110 duration-200"
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/_a946399b-7853-4fb7-a3bf-42a013df7654.png"
              width="70px"
              alt=""
            />
            <h1 className="font-bold font-poppins tracking-widest text-gray-800">
              Technology <br /> for everyone
            </h1>
          </div>
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        {/* toggle login logout */}

        {user ? (
          <div className="hidden md:hidden lg:flex lg:justify-center lg:items-center gap-8">
            <div>
              {user && (
                <div className="flex justify-center items-center">
                  <h1 className="font-poppins font-bold tracking-wider">
                    {displayName}
                  </h1>
                  <img
                    src={photoUrl}
                    alt=""
                    width="30px"
                    className="rounded-full border-white"
                  />
                </div>
              )}
            </div>
            <Button
              size="sm"
              className="hidden lg:inline-block bg-[#9bff2e] hover:bg-black hover:text-[#9bff2e] duration-500 text-black font-poppins"
            >
              <span onClick={handleLogout}>Log Out</span>
            </Button>
          </div>
        ) : (
          <Link to="/login">
            <Button
              size="sm"
              className="hidden lg:inline-block bg-[#9bff2e] hover:bg-black hover:text-[#9bff2e] duration-500 text-black font-poppins"
            >
              <span>Log In</span>
            </Button>
          </Link>
        )}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg -transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          {user ? (
            <Button
              size="sm"
              className="mb-2 bg-[#9bff2e] text-black hover:bg-black hover:text-[#9bff2e] duration-500 font-poppins"
            >
              <span onClick={handleLogout}>Log Out</span>
            </Button>
          ) : (
            <Link to="/login">
              <Button
                size="sm"
                className="mb-2 bg-[#9bff2e] text-black hover:bg-black hover:text-[#9bff2e] duration-500 font-poppins"
              >
                <span>Log In</span>
              </Button>
            </Link>
          )}
          {user && (
            <div className="flex justify-center items-center">
              <h1 className="font-poppins font-bold tracking-wider">
                {displayName}
              </h1>
              <img
                src={photoUrl}
                alt=""
                width="30px"
                className="rounded-full border-white"
              />
            </div>
          )}
        </div>
      </MobileNav>
    </div>
  );
};

export default NavbarItem;
