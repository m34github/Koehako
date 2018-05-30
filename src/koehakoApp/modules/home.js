import index from '../.env/algoliasearch.config';

// action type
const LOAD_HOME = 'LOAD_HOME';

// action creator
const loadHome = () => (dispatch) => {
  index.search('目安箱', (err, content) => {
    dispatch({
      type: LOAD_HOME,
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
  isLoaded: false
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOME: {
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

export { loadHome };
export default reducer;
