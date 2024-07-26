import Style from '@/styles/index.module.css';
import { 
  HeroSection, 
  Service, 
  BigNFTSlider, 
  Subscribe,
  Title, 
  Category,
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
      <Category />
      <Subscribe />
    </div>
  );
};

export default Index;