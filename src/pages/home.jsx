import AboutPage from '../components/about';
import Banner from '../components/banner';
import Brand from '../components/brand';
import Faq from '../components/faq';
import Footer from '../components/footer';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Brand />
      <AboutPage />
      <Faq />
      <Footer />
    </div>
  );
};
export default HomePage;
