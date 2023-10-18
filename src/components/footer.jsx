import { AiFillGoogleCircle, AiFillGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-[#53ba00b3] text-black rounded-t-lg">
        <aside>
          <img
            className="rounded-full my-10"
            src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/_a946399b-7853-4fb7-a3bf-42a013df7654.png"
            alt=""
            width="150px"
          />
          <h1 className="font-bold font-poppins tracking-widest text-gray-800">
            Technology for everyone
          </h1>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiUtKaA9f6BAxW4SWwGHZeSBX0QPAgJ">
              <AiFillGoogleCircle
                size={50}
                className="hover:scale-110 duration-500"
              />
            </a>

            <a>
              <BsFacebook size={45} className="hover:scale-110 duration-500" />
            </a>
            <a>
              <AiFillGithub
                size={50}
                className="hover:scale-110 duration-500"
              />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
