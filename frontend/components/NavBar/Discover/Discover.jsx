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
      link: "NFTDetails"
    },
    {
      name: "Account Setting",
      link: "account"
    },
    {
      name: "Upload NFT",
      link: "uploadNFT"
    },
    {
      name: "Connect Wallet",
      link: "connectWallet"
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