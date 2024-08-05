import Style from '@/styles/search.module.css';
import { Slider, Brand } from '@/components/componentIndex';
import SearchBar from '@/searchPage/SearchBar/SearchBar';
import { Filter } from '@/components/componentIndex';
import { NFTCardTwo, Banner } from '@/collectionPage/collectionIndex';

import images from '@/img';

const search = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  return (
    <div className={Style.search}>
      <Banner bannerImage={images.creatorbackground4}/>
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default search;
