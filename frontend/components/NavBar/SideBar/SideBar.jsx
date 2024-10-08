import Style from './SideBar.module.css';
import images from '@/img';
import Button from '@/components/Button/Button';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { 
  TiSocialFacebook, 
  TiSocialLinkedin, 
  TiSocialTwitter, 
  TiSocialYoutube, 
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from 'react-icons/ti';

const SideBar = ({ setOpenSideMenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author Profile",
      link: "author"
    },
    {
      name: "NFT Details",
      link: "NFTDetails"
    },
    {
      name: "Account Setting",
      link: "account"
    },
    {
      name: "Upload NFT",
      link: "uploadNFT"
    },
    {
      name: "Connect Wallet",
      link: "connectWallet"
    },
  ];

  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contactUs",
    },
    {
      name: "Sign Up",
      link: "/",
    },
    {
      name: "Sign In",
      link: "/",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  }

  return (
    <div className={Style.sideBar}>
      <GrClose 
        className={Style.sideBar_closeBtn} 
        onClick={() => closeSideBar()} 
      />
      <div className={Style.sideBar_box}>
        <Image 
          src={images.logo} 
          alt="logo"
          width={150} 
          height={150} 
        />
        <p>
          Discover the most coolest articles on the topics of NFT & share them
        </p>
        <div className={Style.sideBar_social}>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            < TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
      </div>
      <div className={Style.sideBar_menu}>
        <div>
          <div 
            className={Style.sideBar_menu_box}
            onClick={() => openDiscoverMenu()}
          > 
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {
            openDiscover && (
              <div className={Style.sideBar_discover}>
                {discover.map((el, i) => (
                  <p key={i + 1}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>

        <div>
          <div 
            className={Style.sideBar_menu_box}
            onClick={() => openHelpMenu()}  
          >
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {
            openHelp && (
              <div className={Style.sideBar_discover}>
                {helpCenter.map((el, i) => (
                  <p key={i + 1}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>
        
      </div>
      <div className={Style.sideBar_button}>
          <Button btnName="Create" handleClick={() => {}}/>
          <Button btnName="Connect" handleClick={() => {}}/>
      </div>
    </div>
  );
}

export default SideBar;