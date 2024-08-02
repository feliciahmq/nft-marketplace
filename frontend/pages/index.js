import Style from '@/styles/index.module.css';
import { 
  HeroSection, 
  Service, 
  BigNFTSlider, 
  Subscribe,
  Title, 
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,
  AudioLive,
} from '@/components/componentIndex';

const Index = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title 
        heading="Audio Collections"
        paragraph="Discover latest Audio NFTs."
      />
      <AudioLive />
      <FollowerTab />
      <Title 
        heading="New Collections"
        paragraph="Browse NFTs by collections."
      />
      <Collection />
      <Title 
        heading="Featured NFts"
        paragraph="Discover the most oustanding NFTs."
      />
      <Filter />
      <NFTCard />
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