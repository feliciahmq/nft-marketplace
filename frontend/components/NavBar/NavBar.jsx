"use client";

import Style from './NavBar.module.css';
import { Discover, HelpCenter, Notification, Profile, SideBar } from './index';
import { Button } from '../componentIndex';
import images from '../../img';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';

import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(!discover);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelp(!help);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setDiscover(false);
      setHelp(false);
      setNotification(true);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(true);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>

        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Link href="/">
              <Image 
                src={images.logo} 
                alt="NFT Logo" 
                width={100} 
                height={100}
                priority
              />
            </Link>
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder='Search NFT' />
              <BsSearch onClick={() => {}} className={Style.search_icon}/>
            </div>
          </div>
        </div>

        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            {/* Discover */}
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover setDiscover={setDiscover}/>
              </div>
            )}
          </div>
            {/* HelpCenter */}
            <div className={Style.navbar_container_right_help}>
              <p onClick={(e) => openMenu(e)}>Help Center</p>
              {help && (
                <div className={Style.navbar_container_right_help_box}>
                  <HelpCenter setHelp={setHelp}/>
                </div>  
              )}
            </div>
          {/* Notification */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications 
              className={Style.notify} 
              onClick={() => openNotification()} 
            />
            {notification && <Notification />}
          </div>
          {/* Create Button */}
          <div className={Style.navbar_container_right_button}>
            <Button btnName="Create" handleClick={() => {}}/>
          </div>
          {/* User Profile */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image 
                src={images.user1} 
                alt="Profile" 
                width={40} 
                height={40} 
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}  
              />
              {profile && <Profile />}
            </div>
          </div>
          {/* Menu Button - mobile device*/}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight 
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>
      {/* Sidebar component - mobile device */}
      {
        openSideMenu && (
          <div className={Style.sideBar}>
            <SideBar setOpenSideMenu={setOpenSideMenu} />
          </div>  
        )
      }
    </div>
  );
}

export default NavBar;