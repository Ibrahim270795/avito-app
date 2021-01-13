import React from 'react';
import {  useSelector } from 'react-redux';

function Content (props) {
  const images = useSelector(state => state.images.items);
  const loading = useSelector(state => state.images.loading);

  return (
    <div className='content'>
      {loading ? 'loading' : (
        images.map(image => <img src={image.url} alt={'img'} />
      ))}
    </div>
  )
}

export default Content;