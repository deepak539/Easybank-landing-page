import React from 'react';
import './ArticlesCards.scss';

const ArticlesCards = (props) => {
  return (
    <div className='article-card'>
      <img src={props.image} alt="card-img" className="article-card-img" />
      <div className="article-card-info">
        <h2 className="article-card-info-author">{props.author}</h2>
        <p className="article-card-info-headline">{props.title}</p>
        <p className="article-card-info-content">{props.content}</p>
      </div>
    </div>
  );
};

export default ArticlesCards;