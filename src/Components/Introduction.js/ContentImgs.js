import React from 'react';
import mobiles from '../images/image-mockups.png';
import './ContentImgs.scss';

const ContentImgs = () => {
  return (
    <div className="bg-intro">
      <img src={mobiles} alt="mobiles" className="mobiles-svg" />
    </div>
  );
};

export default ContentImgs;