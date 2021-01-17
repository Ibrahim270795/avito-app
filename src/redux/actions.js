export const loadImages = () => {
  return (dispatch) => {
    dispatch({
      type: 'images/load/start',
    });

    fetch('https://boiling-refuge-66454.herokuapp.com/images')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'images/load/success',
          payload: json,
        });
      });
  };
};

export const loadModal = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'modal/load/start',
    });

    fetch(`https://boiling-refuge-66454.herokuapp.com/images/?imageId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'modal/load/success',
          payload: json,
        });
      });
  };
};
