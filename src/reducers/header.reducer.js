import initialState from './initialState';

const fetch = {
  started: (state) => ({
    ...state,
    content: {},
    error: null,
    isFetching: true,
    fetched: false,
  }),
  success: (state, { data }) => ({
    ...state,
    content: data,
    error: null,
    isFetching: false,
    fetched: true,
  }),
  error: (state, { error }) => ({
    ...state,
    content: {},
    error,
    isFetching: false,
    fetched: true,
  })
};

export default function headerReducer(state = initialState.header, action) {
  switch (action.type) {
    case 'FETCH_HEADER':
      return fetch[action.payload.status](state, action.payload);
    default:
      return state;
  }
}
