import React from 'react';
import { useSelector } from 'react-redux';
import Image from './Image';
import ReactLoading from 'react-loading';

function Content(props) {
  const images = useSelector((state) => state.images.items);
  const loading = useSelector((state) => state.images.loading);

  return (
    <div className="content">
      {loading ? (
        <ReactLoading color="color" />
      ) : (
        images.map((image) => {
          return <Image image={image} key={image.id} />;
        })
      )}
    </div>
  );
}

export default Content;
