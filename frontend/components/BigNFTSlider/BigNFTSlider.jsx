import Style from './BigNFTSlider.module.css';
import images from '@/img';
import Button from '@/components/Button/Button';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { AiFillFire, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';
import { TbArrowBigLeftLine, TbArrowBigRightLine } from 'react-icons/tb';

const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(1);

  const sliderData = [
    {
      title: "Monkey NFT",
      id: 1,
      name: "Lynn Monkey",
      collection: "Gym",
      price: "000000666666 ETH",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 15,
        hours: 8,
        minutes: 12,
        seconds: 35,
      },
    },
    {
      title: "Cow NFT",
      id: 2,
      name: "Lynn Cow",
      collection: "Gym",
      price: "000000633333 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 5,
        hours: 2,
        minutes: 60,
        seconds: 32,
      },
    },
    {
      title: "Crocodile NFT",
      id: 3,
      name: "Lynn Crocodile",
      collection: "Gym",
      price: "000000662222 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 10,
        hours: 9,
        minutes: 22,
        seconds: 45,
      },
    },
  ];

  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image 
                src={sliderData[idNumber].image} 
                alt="profile image"
                width={50}
                height={50}
                className={Style.bigNFTSlider_box_left_creator_profile_img}  
              />
              <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon} />
              <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price}
                <span>
                  $256,78
                </span>
              </p>
            </div>

            <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon} />
              <span>Auction ending in</span>
            </p>

            <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>

              <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>

              <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>Mins</span>
              </div>

              <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>Secs</span>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}}/>
              <Button btnName="View" handleClick={() => {}}/>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLine 
              className={Style.bigNFTSlider_box_left_sliderBtn_icon} 
              onClick={() => dec()}  
            />
            <TbArrowBigRightLine 
              className={Style.bigNFTSlider_box_left_sliderBtn_icon} 
              onClick={() => inc()}  
            />
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image 
              src={sliderData[idNumber].nftImage} 
              alt="NFT Image" 
              className={Style.bigNFTSlider_box_right_box_img} 
              height={750}
            />
            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigNFTSlider;