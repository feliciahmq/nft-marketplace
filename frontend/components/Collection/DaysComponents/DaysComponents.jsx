import Style from './DaysComponents.module.css';
import images from '@/img';

import Image from 'next/image';
import { MdVerified } from 'react-icons/md';

const DaysComponents = ({ el, i }) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image 
            src={el.background} 
            className={Style.daysComponent_box_img_img}
            alt='Profile Background'
            style={{ 
              width: '100%', 
              height: '200px', 
              objectFit: 'cover' 
            }}
          />
        </div>

        <div className={Style.daysComponent_box_profile}>
          <Image 
            src={images.creatorbackground2}
            alt="profile"
            className={Style.daysComponent_box_img_1}
            objectFit='cover'
            style={{ 
              width: '100%', 
              height: '120px', 
              objectFit: 'cover' 
            }}
          />
          <Image 
            src={images.creatorbackground2}
            alt="profile"
            className={Style.daysComponent_box_img_2}
            style={{ 
              width: '100%', 
              height: '120px', 
              objectFit: 'cover' 
            }}
          />
          <Image 
            src={images.creatorbackground2}
            alt="profile"
            className={Style.daysComponent_box_img_3}
            style={{ 
              width: '100%', 
              height: '120px', 
              objectFit: 'cover' 
            }}
          />
        </div>

        <div className={Style.daysComponent_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <Image
                src={el.user}
                alt='profile'
                width={30}
                height={30}
                style={{ 
                  objectFit: 'cover' 
                }}
                className={Style.daysComponent_box_title_info_profile_img}
              />

              <p>
                Creator
                <span>
                  Lynn Leong {" "}
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>

            <div className={Style.daysComponent_box_title_info_price}>
              <small>1.234 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents