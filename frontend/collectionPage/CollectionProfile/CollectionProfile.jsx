import Style from './CollectionProfile.module.css';
import images from '@/img';

import Image from 'next/image';
import { 
  TiSocialFacebook, 
  TiSocialLinkedin, 
  TiSocialTwitter, 
  TiSocialInstagram, 
} from 'react-icons/ti';

const collectionProfile = () => {
  const cardArray = [1,2,3,4];

  return (
    <div className={Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        <div className={Style.collectionProfile_box_left}>
          <Image
            src={images.nft_image_3}
            alt='nft image'
            width={300}
            height={300}
            className={Style.collectionProfile_box_left_img}
          />

          <div className={Style.collectionProfile_box_left_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.collectionProfile_box_middle}>
          <h1>Awesome NFTs Collection</h1>
          <p>
            CryptoPunk #7804: A rare digital collectible featuring a pixelated alien with a pipe, sunglasses, and a cap, owned and verified as an NFT on the Ethereum blockchain.
          </p>

          <div className={Style.collectionProfile_box_middle_box}>
            {cardArray.map((el,i) => (
              <div className={Style.collectionProfile_box_middle_box_item} key={i + 1}>
                <small>Floor Price</small>
                <p>${i + 1}9,652</p>
                <span>+ {i + 2}.11%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default collectionProfile;