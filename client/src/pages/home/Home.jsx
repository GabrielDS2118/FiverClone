import React from 'react';

import Featured from '../../components/featured/Featured';
import Slide from '../../components/slide/Slide';
import TrustedBy from '../../components/trustedby/TrustedBy';
import './Home.scss';

import { cards } from '../../data';
import CategoryCard from '../../components/categorycard/CategoryCard';
import FingerTips from '../../components/fingertips/FingerTips';
import Explore from '../../components/explore/Explore';
import Business from '../../components/business/Business';

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CategoryCard key={card.id} item={card} />
        ))}
      </Slide>
      <FingerTips />
      <Explore />
      <Business />
    </div>
  );
};

export default Home;
