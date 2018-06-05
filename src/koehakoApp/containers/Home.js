import { connect } from 'react-redux';

import * as action from '../modules/home';
import Home from '../components/Home.jsx';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  search: (keyword, filter = '') => {
    dispatch(action.search(keyword, filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
