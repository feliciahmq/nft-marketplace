import Style from '@/styles/index.module.css';
import { HeroSection } from '@/components/componentIndex';

const Index = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
    </div>
  );
};

export default Index;