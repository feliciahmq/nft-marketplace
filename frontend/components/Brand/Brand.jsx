import Style from './Brand.module.css';
import images from '@/img';
import { Button } from '../componentIndex';

import Image from 'next/image';

const Brand = () => {
  return (
    <div className={Style.brand}>
      <div className={Style.brand_box}>
        <div className={Style.brand_box_left}>
          <Image 
            src={images.logo}
            alt='brand logo'
            width={180}
            height={180}
            className={Style.brand_box_left_logo}
            style={{ filter: 'invert()' }}
          />
          <h1>Earn free crypto with NFTCo</h1>
          <p>A creative agency that lead and inspire.</p>
        
          <div className={Style.brand_box_left_btn}>
            <Button
              btnName="Create"
              handleClick={() => {}}
            />
            <Button
              btnName="Discover"
              handleClick={() => {}}
            />
          </div>
        </div>
        <div className={Style.brand_box_right}>
          <Image
            src={images.earn}
            alt='brand logo'
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;