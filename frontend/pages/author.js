import Style from '@/styles/author.module.css';
import { Banner, NFTCardTwo } from '@/collectionPage/collectionIndex';
import { Brand, Title } from '@/components/componentIndex';
import images from '@/img';
import { AuthorProfileCard, AuthorTaps } from '@/authorPage/authorIndex'; 

import { useState, useEffect } from 'react'

const author = () => {
  const popularArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
    images.user6,
    images.user7,
    images.user8,
  ];

  const [collectibles, setCollectibles] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className={Style.banner}>
      <Banner bannerImage={images.creatorbackground6} />
      <AuthorProfileCard />
    </div>
  );
};

export default author;