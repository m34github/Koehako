import { connect } from 'react-redux';

import * as action from '../modules/home';
import Home from '../components/Home.jsx';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  loadHome: (keyword) => {
    dispatch(action.loadHome(keyword));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
