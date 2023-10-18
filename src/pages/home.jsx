import AboutPage from '../components/about';
import Banner from '../components/banner';
import Brand from '../components/brand';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Brand />
      <AboutPage />
    </div>
  );
};
export default HomePage;
