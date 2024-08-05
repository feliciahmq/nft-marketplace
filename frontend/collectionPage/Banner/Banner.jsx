import Style from './Banner.module.css';

import Image from 'next/image';

const Banner = ({ bannerImage }) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image 
          src={bannerImage}
          style={{ 
            width: '100%', 
            height: '300px', 
            objectFit: 'cover' 
          }}
          alt='background'
        />
      </div>

      <div className={Style.banner_img_mobile}>
        <Image 
          src={bannerImage}
          style={{ 
            width: '100%', 
            height: '900px', 
            objectFit: 'cover' 
          }}
          alt='background'
        />
      </div>
    </div>
  );
};

export default Banner;