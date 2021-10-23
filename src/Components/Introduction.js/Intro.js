import React from 'react';
import Content from './Content';
import ContentImgs from './ContentImgs';
// import mobiles from '../images/image-mockups.png';
import './Intro.scss';

const Intro = () => {
  return (
    <div className="intro">
      <Content></Content>
      <ContentImgs></ContentImgs>
      {/* <img src={mobiles} alt="mobiles" className="mobiles-svg" /> */}
    </div>
  );
};

export default Intro;