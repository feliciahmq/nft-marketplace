import Style from './AudioCard.module.css';
import images from '@/img';
import LikeProfile from '../../LikeProfile/LikeProfile';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb';

const AudioCard = () => {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  const playMusic = () => {
    if (!play) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  }

  return (
    <div className={Style.audioCard}>
      <div className={Style.audioCard_box}>
        <div className={Style.audioCard_box_like_time}>
          <div 
            className={Style.audioCard_box_like} 
            onClick={() => likeNft()}
          >
            {
              like ? (
                <AiFillHeart className={Style.audioCard_box_like_icon} />
              ) : (
                <AiOutlineHeart className={Style.audioCard_box_like_icon_unlike} />
              )
            }
            <span>24</span>

          </div>
          <div className={Style.audioCard_box_time}>
            <div className={Style.audioCard_box_like_time_remaining}>
              <small>Remaining time</small>
              <h5>2h : 20m : 25s</h5>
            </div>
          </div>
        </div>

        <div className={Style.audioCard_box_player}>
          <Image 
            src={images.musiceWave}
            alt='music'
            width={180}
          />
          <div 
            className={Style.audioCard_box_musicPlayer}
            onClick={() => {playMusic()}}
          > 
            {play ? (
              <div className={Style.audioCard_box_musicPlayer_icon}> 
                <TbPlayerPause />
              </div>
            ) : (
              <div className={Style.audioCard_box_musicPlayer_icon}> 
                <TbPlayerPlay />
              </div>
            )}
          </div>
        </div>

        <div className={Style.audioCard_box_details}>
          <div className={Style.audioCard_box_details_info}>
            <h4>NFT music #1234</h4>
            <div className={Style.audioCard_box_details_info_price}>
              <small>Price</small>
              <p>$4,232.12</p>
            </div>
          </div>

          <div className={Style.audioCard_box_details_stock}>
            <LikeProfile count={4}/>
            <small>18 in stock</small>
          </div>
        </div>

        <div className={Style.audioCard_box_img}>
          <Image 
            src={images.creatorbackground10} 
            alt='background'
            width={425}
            height={425}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioCard;