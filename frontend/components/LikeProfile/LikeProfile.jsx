import Style from './LikeProfile.module.css';
import images from '@/img';

import Image from 'next/image';

const LikeProfile = ({ count = 4 }) => {
  const imageArray = [images.user1, images.user2, images.user3, images.user4];

  return (
    <div className={Style.like}>
      {imageArray.slice(0, count).map((el, i) => (
        <div className={Style.like_box} key={i + 1}>
          <Image 
            src={el}
            width={15}
            height={15}
            alt={`user ${i + 1}`}
            className={Style.like_box_img}
          />
        </div>  
      ))}
    </div>
  );
};

export default LikeProfile;