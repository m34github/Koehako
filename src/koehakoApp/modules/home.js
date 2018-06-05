import index from '../.env/algoliasearch.config';

// action type
const SEARCH = 'SEARCH';

// action creator
const search = (keyword, filter) => (dispatch) => {
  index.search(filter + keyword, (err, content) => {
    dispatch({
      type: SEARCH,
      payload: {
        result: content.hits
      },
      meta: {
        isLoaded: true
      }
    });
  });
};

// initial state
const initialState = {
  result: [],
  isLoaded: false
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH: {
      return Object.assign({}, state, {
        result: action.payload.result,
        isLoaded: action.meta.isLoaded
      });
    }
    default: {
      return state;
    }
  }
};

export { search };
export default reducer;
