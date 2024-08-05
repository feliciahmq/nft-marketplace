import Style from './Discover.module.css';
import Link from 'next/link';

const Discover = ({ setDiscover }) => {
  const handleItemClick = () => {
    setDiscover(false); 
  };

  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author Profile",
      link: "author"
    },
    {
      name: "NFT Details",
      link: "NFT-details"
    },
    {
      name: "Account Setting",
      link: "account-setting"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "blog"
    },
  ];

  return (
    <div>
      {discover.map((el, i) => (
        <Link href={`/${el.link}`} key={i} onClick={handleItemClick} passHref>
        <div className={Style.discover}>
          {el.name}
        </div>
      </Link> 
      ))}
    </div>
  );
}

export default Discover;