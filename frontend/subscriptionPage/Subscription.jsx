import Style from './Subscription.module.css';
import { Button } from '@/components/componentIndex';

import { TiTick } from 'react-icons/ti';

const Subscription = ({ el, i}) => {
  return (
    <div className={Style.subcriptionBox}>
      <div className={Style.subcriptionBox_box}>
        <span className={Style.subcriptionBox_box_span}>
          {el.plan}
        </span>
        <small className={Style.subcriptionBox_box_small}>
          {el.popular || ""}
        </small>
        <p className={Style.subcriptionBox_box_price}>
          {el.price}
        </p>

        <div className={Style.subcriptionBox_box_info}>
          {el.service.map((el, i) => (
            <p 
              className={Style.subcriptionBox_box_info_para}
              key={i + 1}  
            >
              <span>
                <TiTick />
              </span>
              {el}
            </p>
          ))}
        </div>
        <Button 
          btnName="Choose"
          handleClick={() => {}}
          classStyle={Style.button}
        />
      </div>
    </div>
  );
};

export default Subscription;