import React from 'react';
import './Content.scss';

const Content = () => {
  return (
    <div className="content">
      <h1 className="content-title">Next generation digital banking</h1>
      <p className="content-info">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
      <button className="request" id="content-request">Request Invite</button>
    </div>
  );
};

export default Content;