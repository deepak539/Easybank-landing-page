import React from 'react';
import './ChooseEasybank.scss';
import ReasonsList from './ReasonsList';

const ChooseEasybank = () => {
  return (
    <div className="choose-easybank">
      <div className="easybank">
        <h1 className="easybank-question">Why choose Easybank?</h1>
        <p className="easybank-answer">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>
      <ReasonsList></ReasonsList>
    </div>
  );
};

export default ChooseEasybank;