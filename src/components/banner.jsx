import styles from './banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textContainer}>
        <div className="flex justify-center items-center py-[15rem] px-8">
          <h1 className="font-poppins text-white lg:text-5xl md:text-4xl text-xl tracking-widest text-center lg:leading-[5rem] md:leading-[3rem] leading-none">
            <span className="uppercase text-black">
              Grow day business with digital product
            </span>
            <br />
            <br />
            <span className="font-bold lg:text-6xl md:text-5xl uppercase text-2xl">
              Chose your brand wisely
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
