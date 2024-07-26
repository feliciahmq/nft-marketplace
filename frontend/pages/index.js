import Style from '@/styles/index.module.css';
import { 
  HeroSection, 
  Service, 
  BigNFTSlider, 
  Subscribe,
  Title, 
  Category,
  Filter,
} from '@/components/componentIndex';

const Index = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title 
        heading="Featured NFts"
        paragraph="Discover the most oustanding NFTs."
      />
      <Filter />
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