import Style from './Profile.module.css';
import images from '@/img';

import Image from 'next/image';
import Link from 'next/link';
import { FaUserAlt, FaRegImage, FaUserEdit } from 'react-icons/fa';
import { MdHelpCenter } from 'react-icons/md';
import { TbDownloadOff, TbDownload } from 'react-icons/tb';


const Profile = ({ setProfile }) => {
  const handleItemClick = () => {
    setProfile(false); 
  };

  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className={Style.profile_account_img}
        />
        <div className={Style.profile_account_info}>
          <p>Lynn Leong</p>
          <small>X02938575834...</small>
        </div>
      </div>
      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <Link href="/author" onClick={handleItemClick} >
            <div className={Style.profile_menu_one_item}>
              <FaUserAlt />
              <p>My Profile</p>
            </div>
          </Link>
          <Link href="/" onClick={handleItemClick}>
            <div className={Style.profile_menu_one_item}>
              <FaRegImage />
              <p>My Items</p>
            </div>
          </Link>
          <Link href="/account" onClick={handleItemClick}>
            <div className={Style.profile_menu_one_item}>
              <FaUserEdit />
              <p>Edit Profile</p>
            </div>
          </Link>
        </div>

        <div className={Style.profile_menu_two}>
          <Link href="/contactUs" onClick={handleItemClick}>
            <div className={Style.profile_menu_one_item}>
              <MdHelpCenter />
              <p>Help</p>
            </div>
          </Link>
          <Link href="/" onClick={handleItemClick}>
            <div className={Style.profile_menu_one_item}>
              <TbDownload />
              <p>Disconnect</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;