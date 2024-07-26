import Style from '@/styles/index.module.css';
import { 
  HeroSection, 
  Service, 
  BigNFTSlider, 
  Subscribe
} from '@/components/componentIndex';

const Index = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Subscribe />
    </div>
  );
};

export default Index;