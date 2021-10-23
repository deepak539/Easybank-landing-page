import React from 'react';
import onlineBanking from '../images/icon-online.svg';
import simpleBudgeting from '../images/icon-budgeting.svg';
import fastOnboard from '../images/icon-onboarding.svg';
import opanApi from '../images/icon-api.svg';
import ReasonItem from './ReasonItem';
import './ReasonsList.scss';



const ReasonsList = () => {

  const Reasons = [
    {
      id: 1,
      icon: onlineBanking,
      title: 'Online Banking',
      content: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
      id: 2,
      icon: simpleBudgeting,
      title: 'Simple Budgeting',
      content: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
    },
    {
      id: 3,
      icon: fastOnboard,
      title: 'Fast Onboarding',
      content: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
    },
    {
      id: 4,
      icon: opanApi,
      title: 'Open API',
      content: ' Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
    }
  ]

  return (
    <div className="reasons-list">
      {Reasons.map(reason => (
        <ReasonItem key={reason.id} icon={reason.icon} title={reason.title} content={reason.content} />
      ))}
    </div>
  );
};

export default ReasonsList;