import { fetchByUid } from '../services/fetch.service';

const getData = res => res.data;

const fetchHeader = () => (dispatch) => {
  dispatch({
    type: 'FETCH_HEADER',
    payload: { status: 'started' }
  });

  fetchByUid('header', 'header1')
    .then(response => {
      dispatch({
        type: 'FETCH_HEADER',
        payload: {
          status: 'success',
          data: getData(response),
        }
      });
    })
    .catch(error => {
      dispatch({
        type: 'FETCH_HEADER',
        payload: {
          status: 'error',
          error,
        }
      });
    });
};

export {
  fetchHeader
};
