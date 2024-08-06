import Style from './NFTTabs.module.css';

import Image from 'next/image';

const NFTTabs = ({ dataTab, icon }) => {
  return (
    <div className={Style.NFTTabs}>
      {dataTab.map((el, i) => (
        <div className={Style.NFTTabs_box} key={i + 1}>
          <Image
            src={el}
            alt='profile image'
            width={40}
            height={40}
            className={Style.NFTTabs_box_img}
          />
          <div className={Style.NFTTabs_box_info}>
            <span>
              Offer by $770 by <span>John Leong</span> {icon}
            </span>
            <small>Jun 24 - 3:58 PM</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTTabs;