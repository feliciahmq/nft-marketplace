import Style from '@/styles/about.module.css';
import { Brand } from '@/components/componentIndex';
import images from '@/img';

import Image from 'next/image';


const about = () => {
  const founderArray = [
    {
      name:"Dylan O'Brien",
      position: "Co-founder, Chief Executive",
      images: images.founder1,
    },
    {
      name:"Harry Styles",
      position: "Co-founder, Chief Executive",
      images: images.founder2,
    },
    {
      name:"Angelina Jolie",
      position: "Co-founder, Chairman",
      images: images.founder3,
    },
    {
      name:"Lee Ji Eun",
      position: "Co-founder, Chief Strategy Officer",
      images: images.founder4,
    },
  ];

  const factsArray = [
    {
      title: "10 million",
      info: "Articles have been public around the world."
    },
    {
      title: "100,000",
      info: "Registered user accounts."
    },
    {
      title: "200+",
      info: "Countries and regions have our presence."
    },
  ];

  return (
    <div className={Style.about}>
      <div className={Style.about_box}>
        <div className={Style.about_box_hero}>
          <div className={Style.about_box_hero_left}>
            <h1>About Us</h1>
            <p>
              At NFTCo Marketplace, we're dedicated to empowering creators and collectors by providing a seamless platform for buying, selling, and discovering unique digital assets. Our mission is to foster a vibrant community where art, technology, and innovation converge in the evolving world of NFTs.
            </p>
          </div>

          <div className={Style.about_box_hero_right}>
            <Image
              src={images.hero}
              style={{ 
                width: '100%', 
                height: '400px', 
                objectFit: 'cover' 
              }}
              alt='background'
            />
          </div>
        </div>

        <div className={Style.about_box_title}>
          <h2>Founder</h2>
          <p>
            NFTCo was founded by a visionary leader passionate about bridging the gap between traditional art and digital innovation, creating a platform that redefines how we engage with digital collectibles.
          </p>
        </div>

        <div className={Style.about_box_founder}>
          <div className={Style.about_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.about_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  style={{ 
                    width: '100%', 
                    height: '300px', 
                    objectFit: 'cover',
                  }}
                  className={Style.about_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.about_box_title}>
          <h2>Fast Facts</h2>
          <p>
            NFTCo Marketplace offers over 10,000 unique digital assets and supports multiple blockchain networks for secure and seamless transactions.
          </p>
        </div>

        <div className={Style.about_box_facts}>
          <div className={Style.about_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.about_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default about;