import React from 'react';
import './ListItem.scss';

const ListItem = (props) => {
  return (
    <li className="list-item">
      <svg xmlns={props.link} width={props.width} height="20"><path fill="#FFF" d={props.d}/></svg>
    </li>
  );
};

export default ListItem;