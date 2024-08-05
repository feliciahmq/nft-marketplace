import Style from './AuthorTaps.module.css';

import { useState } from 'react';
import Image from 'next/image';
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from 'react-icons/ti';

const AuthorTaps = ({ 
  setCollectibles, 
  setCreated, 
  setLike, 
  setFollower, 
  setFollowing, 
}) => {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created by Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const openDropDownList = () => {
    if (!openList) {
      setOpenList(true);
    } else {
      setOpenList(false);
    }
  };

  const openTab = (e, index) => {
    const btnText = e.target.innerText;
    setActiveBtn(index); 
    setOpenList(false);

    if (btnText == "Collectibles") {
      setCollectibles(true);
      setCreated(false);
      setLike(false);
      setFollower(false);
      setFollowing(false);
    } else if (btnText == "Created") {
      setCollectibles(false);
      setCreated(true);
      setLike(false);
      setFollower(false);
      setFollowing(false);
    } else if (btnText == "Liked") {
      setCollectibles(false);
      setCreated(false);
      setLike(true);
      setFollower(false);
      setFollowing(false);
    } else if (btnText == "Followers") {
      setCollectibles(false);
      setCreated(false);
      setLike(false);
      setFollower(true);
      setFollowing(false);
    } else if (btnText == "Following") {
      setCollectibles(false);
      setCreated(false);
      setLike(false);
      setFollower(false);
      setFollowing(true);
    }
  };

  const selectMenuItem = (item) => {
    setSelectedMenu(item);
    setOpenList(false); 
  };

  return (
    <div className={Style.authorTaps}>
      <div className={Style.authorTaps_box}>
        <div className={Style.authorTaps_box_left}>
        <div className={Style.authorTaps_box_left_btn}>
            {["Collectibles", "Created", "Liked", "Following", "Followers"].map((btnText, index) => (
              <button
                key={index}
                className={`${activeBtn === index + 1 ? Style.active : ""}`}
                onClick={(e) => openTab(e, index + 1)}
              >
                {btnText}
              </button>
            ))}
          </div>
        </div>
        
        <div className={Style.authorTaps_box_right}>
          <div 
            className={Style.authorTaps_box_right_para} 
            onClick={() => openDropDownList()}
          >
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>

          {openList && (
            <div className={Style.authorTaps_box_right_list}>
              {listArray.map((el, i) => (
                <div 
                  key={i+1} 
                  onClick={() => setSelectedMenu(el)}
                  className={Style.authorTaps_box_right_list_item}  
                >
                  <p>{el}</p>
                  <span>{selectedMenu == el && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}  
        </div>
      </div>
    </div>
  );
};

export default AuthorTaps;