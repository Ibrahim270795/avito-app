import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { loadModal } from '../redux/actions';
import { useParams } from 'react-router-dom';

function Modal(props) {
  const modal = useSelector((state) => state.modal.items);
  const loading = useSelector((state) => state.modal.loading);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.id !== undefined) {
      dispatch(loadModal(params.id));
    }
  }, [dispatch, params]);

  if (loading) {
    return <ReactLoading color="blue" />;
  }

  return (
    <div>
      {modal.map((item) => {
        return <img src={item.url} alt="img" key={item.id} />;
      })}
    </div>
  );
}

export default Modal;
