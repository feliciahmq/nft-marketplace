import Style from './Category.module.css';
import images from '@/img';

import Image from 'next/image';
import { BsCircleFill } from 'react-icons/bs';

const Category = () => {
  const CategoryArray = [
    images.creatorbackground8,
    images.creatorbackground11,
    images.creatorbackground10,
    images.creatorbackground2,
    images.creatorbackground4,
    images.creatorbackground5,
  ];

  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={i + 1}>
            <Image 
              src={el}
              className={Style.category_box_img}
              alt='Background Image'
              style={{ 
                width: '100%', 
                height: '150px', 
                objectFit: 'cover' 
              }}
            />

            <div className={Style.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>Fun</h4>
                <small>1995 NFTs</small>
              </div>
            </div>
          </div>    
        ))}
      </div>
    </div>
  );
};

export default Category;