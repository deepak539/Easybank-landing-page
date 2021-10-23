import React from 'react';
import './ReasonsItem.scss';

const ReasonItem = (props) => {
  return (
    <div className='reason-item'>
      <img src={props.icon} alt="reason-icon" className="reason-item-icon" />
      <h2 className="reason-item-title">{props.title}</h2>
      <p className="reason-item-content">{props.content}</p>
    </div>
  );
};

export default ReasonItem;