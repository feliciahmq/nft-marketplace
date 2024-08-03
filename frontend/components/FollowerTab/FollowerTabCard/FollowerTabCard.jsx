import Style from './FollowerTabCard.module.css';

import { useState } from 'react';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

const FollowerTabCard = ({ i, el }) => {
  const [following, setFollowing] = useState(false);

  const followMe = () => {
    if (!following) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }
  }

  return (
    <div className={Style.followerTabCard}>
      <div className={Style.followerTabCard_rank}>
        <p>
          #{i + 1}
          <span>🥇</span>
        </p>
      </div>

      <div className={Style.followerTabCard_box}>
        <div className={Style.followerTabCard_box_img}>
          <Image  
            src={el.background}
            alt='Profile Background'
            width={360}
            height={180}
            objectFit='cover'
            className={Style.followerTabCard_box_img_img}
          />
        </div>

        <div className={Style.followerTabCard_box_profile}>
          <Image 
            src={el.user}
            alt='Profile Picture'
            width={80}
            height={80}
            className={Style.followerTabCard_box_profile_img}
          />
        </div>
        
        <div className={Style.followerTabCard_box_info}>
          <div className={Style.followerTabCard_box_info_name}>
            <h4>
              Gilda Heng {" "}
              <span>
                <MdVerified />
              </span>
            </h4>
            <p>12.345 ETH</p>
          </div>

          <div className={Style.followerTabCard_box_info_following}>
            {following ? (
              <a onClick={() => followMe()}>
                Follow{" "} <span><TiTick/></span>
              </a>
            ) : (
              <a onClick={() => followMe()}>
                Following
              </a>
            )} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;