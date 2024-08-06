import Style from './NFTDescription.module.css';
import images from '@/img';
import { Button } from '@/components/componentIndex';
import { NFTTabs } from '../NFTDetailsIndex';

import { useState } from 'react';
import Image from 'next/image';
import { MdVerified, MdCloudUpload, MdTimer, MdReportProblem, MdOutlineDeleteSweep } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { FaWallet, FaPercentage } from 'react-icons/fa';
import { 
  TiSocialFacebook, 
  TiSocialLinkedin, 
  TiSocialTwitter, 
  TiSocialYoutube, 
  TiSocialInstagram,
} from 'react-icons/ti';
import { BiTransferAlt, BiDollar } from 'react-icons/bi';

const NFTDescription = () => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('history');

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];

  const provenanceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];

  const ownerArray = [
    images.user2,
    images.user8,
    images.user7,
    images.user6,
    images.user1,
  ];

  const openSocial = () => {
    if (!social) {
      setSocial(true);
      setNFTMenu(false);
    } else {
      setSocial(false);
    }
  };

  const openNFTMenu = () => {
    if (!NFTMenu) {
      setSocial(false);
      setNFTMenu(true);
    } else {
      setNFTMenu(false);
    }
  };

  const openTabs = (tabName) => {
    setActiveTab(tabName.toLowerCase());
  };

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        <div className={Style.NFTDescription_box_share}>
          <p>Virtual Worlds</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload 
              className={Style.NFTDescription_box_share_box_icon} 
              onClick={() => openSocial()}  
            />

            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href='#'>
                  <TiSocialFacebook /> Facebook
                </a>
                <a href='#'>
                  <TiSocialInstagram /> Instagram
                </a>
                <a href='#'>
                  <TiSocialLinkedin /> LinkedIn
                </a>
                <a href='#'>
                  <TiSocialYoutube /> Youtube
                </a>
                <a href='#'>
                  <TiSocialTwitter /> Twitter
                </a>
              </div>
            )}

            <BsThreeDots 
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openNFTMenu()}
            />

            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href='#'>
                  <BiDollar /> Change Price
                </a>
                <a href='#'>
                  <BiTransferAlt /> Transfer
                </a>
                <a href='#'>
                  <MdReportProblem /> Report Abuse
                </a>
                <a href='#'>
                  <MdOutlineDeleteSweep /> Delete Item
                </a>
              </div>
            )}
          </div>
        </div>

        <div className={Style.NFTDescription_box_profile}>
          <h1>BearX #26374</h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt='profile'
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small> <br />
                <span>
                  James Leong <MdVerified />
                </span>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_box_right}>
            <Image
                src={images.user2}
                alt='profile'
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />

              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Creator</small> <br />
                <span>
                  Lynn Leong <MdVerified />
                </span>
              </div>
            </div>
          </div>

          <div className={Style.NFTDescription_box_profile_bidding}>
            <p>
              <MdTimer /> 
              <span>
                Auction ending in:
              </span>
            </p>

            <div className={Style.NFTDescription_box_profile_bidding_box_timer}>
              <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                <p>2</p>
                <span>Days</span>
              </div>
              <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                <p>22</p>
                <span>Hours</span>
              </div>
              <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                <p>24</p>
                <span>Minutes</span>
              </div>
              <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                <p>2</p>
                <span>Seconds</span>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_bidding_box_price}>
              <div className={Style.NFTDescription_box_profile_bidding_box_price_bid}>
                <small>Current Bid</small>
                <p>
                  1.000 ETH
                  <span>( ≈ $3,456.22 )</span>
                </p>
              </div>

              <span>[87 in stock]</span>
            </div>

            <div className={Style.NFTDescription_box_profile_bidding_box_button}>
              <Button 
                icon={<FaWallet/>}
                btnName="Place a bid" 
                handleClick={() => {}} 
                classStyle={Style.button} 
              />
              <Button 
                icon={<FaPercentage/>}
                btnName="Make offer" 
                handleClick={() => {}} 
                classStyle={Style.button} 
              />
            </div>

            <div className={Style.NFTDescription_box_profile_bidding_box_tabs}>
              <button
                onClick={(e) => openTabs('history')}
              >
                Bid History
              </button>
              <button
                onClick={(e) => openTabs('provenance')}
              >
                Provenance
              </button>
              <button
                onClick={(e) => openTabs('owner')}
              >
                Owner
              </button>
            </div>

            {activeTab === 'history' && (
              <div className={Style.NFTDescription_box_profile_bidding_box_card}>
                <NFTTabs dataTab={historyArray} />
              </div>
            )}

            {activeTab === 'provenance' && (
              <div className={Style.NFTDescription_box_profile_bidding_box_card}>
                <NFTTabs dataTab={provenanceArray} />
              </div>
            )}

            {activeTab === 'owner' && (
              <div className={Style.NFTDescription_box_profile_bidding_box_card}>
                <NFTTabs dataTab={ownerArray} icon={<MdVerified/>} />
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;