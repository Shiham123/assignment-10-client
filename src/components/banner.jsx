import styles from './banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textContainer}>
        <h1 className="text-3xl text-white">
          TechSavvy: Navigating the Digital Frontier
        </h1>
      </div>
    </div>
  );
};

export default Banner;
