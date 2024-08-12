import Style from '@/styles/contactUs.module.css';
import FormStyle from '@/accountPage/Form/Form.module.css';
import { Button } from '@/components/componentIndex';

import { 
  TiSocialFacebook, 
  TiSocialLinkedin, 
  TiSocialTwitter, 
  TiSocialYoutube, 
  TiSocialInstagram,
} from 'react-icons/ti';
import { HiOutlineMail } from 'react-icons/hi';

const contactUs = () => {
  return (
    <div className={Style.contactUs}>
      <div className={Style.contactUs_box}>
        <h1>Contact</h1>
        <div className={Style.contactUs_box_box}>
          <div className={Style.contactUs_box_box_left}>
            <div className={Style.contactUs_box_box_left_item}>
              <h3>📍 ADDRESS</h3>
              <p>Singapore NUS 21 Lower Kent Ridge Rd, Singapore 119077</p>
            </div>
            <div className={Style.contactUs_box_box_left_item}>
              <h3>✉️ EMAIL</h3>
              <p>nus.etc@gmail.com</p>
            </div>
            <div className={Style.contactUs_box_box_left_item}>
              <h3>☎️ PHONE</h3>
              <p>000-123-456-7890</p>
            </div>
            <div className={Style.contactUs_box_box_left_item}>
              <h3>🌐 SOCIALS</h3>
              <a href='#'>
                <TiSocialFacebook />
              </a>
              <a href='#'>
                <TiSocialLinkedin />
              </a>
              <a href='#'>
                <TiSocialInstagram />
              </a>
              <a href='#'>
                <TiSocialYoutube />
              </a>
              <a href='#'>
                <TiSocialTwitter />
              </a>
            </div>
          </div>
          <div className={Style.contactUs_box_box_right}>
            <form>
              <div className={FormStyle.form_box_input}>
                <label htmlFor='full name'>Full Name</label>
                <input 
                  type="text"
                  placeholder='Full Name'
                  className={FormStyle.form_box_input_username} 
                />
              </div>

              <div className={FormStyle.form_box_input}>
                <label htmlFor='email'>Email</label>
                <div className={FormStyle.form_box_input_box}>
                  <div className={FormStyle.form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input 
                    type='text'
                    placeholder='Email*'
                  />
                </div>
              </div>

              <div className={FormStyle.form_box_input}>
                <label htmlFor='message'>Message</label>
                <textarea 
                  name="" 
                  id="" 
                  cols="30" 
                  rows="6" 
                  placeholder="Message" 
                />
              </div>

              <Button
                btnName="Send Message"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactUs;