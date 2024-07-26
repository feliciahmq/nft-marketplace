import Style from '@/styles/index.module.css';
import { 
  HeroSection, 
  Service, 
  BigNFTSlider 
} from '@/components/componentIndex';

const Index = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
    </div>
  );
};

export default Index;