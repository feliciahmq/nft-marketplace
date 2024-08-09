import Style from './Form.module.css';
import { Button } from '@/components/componentIndex';

import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineHttp, MdOutlineContentCopy } from 'react-icons/md';
import { 
  TiSocialFacebook, 
  TiSocialTwitter,
  TiSocialInstagram, 
} from 'react-icons/ti';

const Form = () => {
  return (
    <div className={Style.form}>
      <div className={Style.form_box}>
        <form>
          <div className={Style.form_box_input}>
            <label htmlFor='name'>Username</label>
            <input 
              type="text"
              placeholder='Lynn Leong'
              className={Style.form_box_input_username} 
            />
          </div>

          <div className={Style.form_box_input}>
            <label htmlFor='email'>Email</label>
            <div className={Style.form_box_input_box}>
              <div className={Style.form_box_input_box_icon}>
                <HiOutlineMail />
              </div>
              <input 
                type='text'
                placeholder='Email*'
              />
            </div>
          </div>

          <div className={Style.form_box_input}>
            <label htmlFor='description'>Description</label>
            <textarea 
              name="" 
              id="" 
              cols="30" 
              rows="6" 
              placeholder="About yourself" 
            />
          </div>

          <div className={Style.form_box_input}>
            <label htmlFor='website'>Website</label>
            <div className={Style.form_box_input_box}>
              <div className={Style.form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>

              <input type='text' placeholder='Website'/>
            </div>
          </div>

          <div className={Style.form_box_input_social}>
            <div className={Style.form_box_input}>
              <label htmlFor='facebook'>Facebook</label>
              <div className={Style.form_box_input_box}>
                <div className={Style.form_box_input_box_icon}>
                  <TiSocialFacebook />
                </div>
                <input type='text' placeholder='http://lynn' />
              </div>
            </div>

            <div className={Style.form_box_input}>
              <label htmlFor='twitter'>Twitter</label>
              <div className={Style.form_box_input_box}>
                <div className={Style.form_box_input_box_icon}>
                  <TiSocialTwitter />
                </div>
                <input type='text' placeholder='http://lynn' />
              </div>
            </div>

            <div className={Style.form_box_input}>
              <label htmlFor='instagram'>Instagram</label>
              <div className={Style.form_box_input_box}>
                <div className={Style.form_box_input_box_icon}>
                  <TiSocialInstagram />
                </div>
                <input type='text' placeholder='http://lynn' />
              </div>
            </div>
          </div>

          <div className={Style.form_box_input}>
            <label htmlFor='wallet'>Wallet address</label>
            <div className={Style.form_box_input_box}>
              <div className={Style.form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type='text' placeholder='0xEA674917894729ff8a7fa86rwe' />
              <div className={Style.form_box_input_box_icon}>
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          <div className={Style.form_box_btn}>
            <Button 
              btnName="Upload profile"
              handleClick={() => {}}
              classStyle={Style.button}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;