import Style from './Service.module.css';
import images from '@/img';

import Image from 'next/image';

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image 
            src={images.service1} 
            alt="Filter & Discover" 
            width={100}
            height={100}  
          />
          <p className={Style.service_box_item_step}> 
            <span>Step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Connect with wallet, discover, buy NFTs, sell you NFTs for money.
          </p>
        </div>

        <div className={Style.service_box_item}>
          <Image 
            src={images.service2} 
            alt="Connect Wallet" 
            width={100}
            height={100}  
          />
          <p className={Style.service_box_item_step}> 
            <span>Step 2</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>
            Connect with wallet, discover, buy NFTs, sell you NFTs and earn money.
          </p>
        </div>

        <div className={Style.service_box_item}>
          <Image 
            src={images.service3} 
            alt="Start Trading" 
            width={100}
            height={100}  
          />
          <p className={Style.service_box_item_step}> 
            <span>Step 3</span>
          </p>
          <h3>Start Trading</h3>
          <p>
            Connect with wallet, discover, buy NFTs, sell you NFTs for money.
          </p>
        </div>

        <div className={Style.service_box_item}>
          <Image 
            src={images.service4} 
            alt="Start Trading" 
            width={100}
            height={100}  
          />
          <p className={Style.service_box_item_step}> 
            <span>Step 4</span>
          </p>
          <h3>Start Trading</h3>
          <p>
            Connect with wallet, discover, buy NFTs, sell you NFTs for money.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Service;