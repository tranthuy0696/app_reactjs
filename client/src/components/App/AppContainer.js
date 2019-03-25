import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
    isLogin: state.getIn(['auth', 'isLogin'])
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;