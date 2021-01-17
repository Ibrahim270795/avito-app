import React from 'react';
import { Link } from 'react-router-dom';

function Image(props) {
  return (
    <div className="image">
      <Link
        to={`/${props.image.url === props.image.id ? props.image.url : ''}`}
      >
        <img src={props.image.url} alt={'img'} />
      </Link>
    </div>
  );
}

export default Image;
