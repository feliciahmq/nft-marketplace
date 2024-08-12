import Style from './HelpCenter.module.css';
import Link from 'next/link';

const HelpCenter = ({ setHelp }) => {
  const handleItemClick = () => {
    setHelp(false); 
  };

  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contactUs",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  return (
    <div className={Style.box}>
      {helpCenter.map((el, i) => (
        <Link href={{ pathname: `${el.link}` }} key={i} onClick={handleItemClick} passHref>
          <div className={Style.helpCenter}>
            {el.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HelpCenter;