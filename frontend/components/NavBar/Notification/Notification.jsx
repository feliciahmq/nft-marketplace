import Style from './Notification.module.css';
import images from "@/img";

import Image from 'next/image';

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div>
          <Image
            className={Style.notification_box_img} 
            src={images.user1} 
            alt="profile image" 
            width={50} 
            height={50}
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4>Lynn Leong</h4>
          <p>Measure run your user...</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
}

export default Notification;