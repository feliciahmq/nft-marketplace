
import { Category, Brand, Title } from '@/components/componentIndex';
import NFTDetailsPage from '@/NFTDetailsPage/NFTDetailsPage';

const NFTDetails = () => {
  return (
    <div>
      <NFTDetailsPage />
      <Title 
        heading="Categories"
        paragraph="Browse NFTs by categories."
      />
      <Category />
      <Brand />
    </div>
  );
};

export default NFTDetails;