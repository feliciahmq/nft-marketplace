import Style from '@/styles/index.module.css';
import { 
  HeroSection, 
  Service, 
  BigNFTSlider, 
  Subscribe,
  Title
} from '@/components/componentIndex';

const Index = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title 
        heading="Browse by category"
        paragraph="Explore NFTs by the most featured categories."
      />
      <Subscribe />
    </div>
  );
};

export default Index;