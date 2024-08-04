import Style from './AuthorProfileCard.module.css';
import images from '@/img';
import { Button } from '@/components/componentIndex';

import { useState } from 'react';
import Image from 'next/image';
import { MdVerified, MdCloudUpload, MdOutlineReportProblem } from 'react-icons/md';
import { FiCopy } from 'react-icons/fi';
import { 
  TiSocialFacebook, 
  TiSocialLinkedin, 
  TiSocialYoutube,
  TiSocialInstagram,
} from 'react-icons/ti';
import { BsThreeDots } from 'react-icons/bs';

const AuthorProfileCard = () => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  const copyAddress = () => {
    const copyText = document.getElementById("myInput");

    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  const openShare = () => {
    if (!share) {
      setShare(true);
      setReport(false);
    } else {
      setShare(false);
    }
  };

  const openReport = () => {
    if (!report) {
      setShare(false);
      setReport(true);
    } else {
      setReport(false);
    }
  };

  return (
    <div className={Style.authorProfileCard}>
      <div className={Style.authorProfileCard_box}>
        <div className={Style.authorProfileCard_box_img}>
          <Image
            src={images.nft_image_1}
            alt='NFT Image'
            width={220}
            height={220}
            className={Style.authorProfileCard_box_img_img}
          />
        </div>

        <div className={Style.authorProfileCard_box_info}>
          <h2>Lynn Leon{""}{" "}
            <span>
              <MdVerified /> 
            </span>{" "}
          </h2>

          <div className={Style.authorProfileCard_box_info_address}>
            <input 
              type='text' 
              value='0x829BD82345859B049282483939292A830' 
              id='myInput' 
            />
            <FiCopy 
              onClick={() => copyAddress()}
              className={Style.authorProfileCard_box_info_address_icon}
            />

            <div>
              <p>
                Punk #3456 / An OG Cryptopunk Collector, hoarder of NFTs. 
              </p>

              <div className={Style.authorProfileCard_box_info_social}>
                <a href="#">
                  <TiSocialFacebook />
                </a>
                <a href="#">
                  <TiSocialInstagram />
                </a>
                <a href="#">
                  <TiSocialLinkedin />
                </a>
                <a href="#">
                  <TiSocialYoutube />
                </a>
              </div>
            </div>

            <div className={Style.authorProfileCard_box_share}>
              <Button btnName="Follow" handleClick={() => {}} />
              <MdCloudUpload 
                onClick={() => openShare()} 
                className={Style.authorProfileCard_box_share_icon} 
              />

              {share && (
                <div className={Style.authorProfileCard_box_share_upload}>
                  <p>
                    <span>
                      <TiSocialFacebook />
                    </span> {" "}
                    {""}
                    Facebook
                  </p>
                  <p>
                    <span>
                      <TiSocialInstagram />
                    </span> {" "}
                    {""}
                    Instagram
                  </p>
                  <p>
                    <span>
                      <TiSocialLinkedin />
                    </span> {" "}
                    {""}
                    Linkedin
                  </p>
                  <p>
                    <span>
                      <TiSocialYoutube />
                    </span> {" "}
                    {""}
                    Youtube
                  </p>
                </div>
              )}

              <BsThreeDots 
                onClick={() => openReport()} 
                className={Style.authorProfileCard_box_share_icon}  
              />

              {report && (
                <p className={Style.authorProfileCard_box_share_report}>
                  <span>
                    <MdOutlineReportProblem />
                  </span> {" "}
                  {""}
                  Report abuse
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;