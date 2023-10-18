import AboutPage from '../components/about';
import Banner from '../components/banner';
import Brand from '../components/brand';
import Faq from '../components/faq';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Brand />
      <AboutPage />
      <Faq />
    </div>
  );
};
export default HomePage;
