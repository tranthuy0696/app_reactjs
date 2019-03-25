import { connect } from 'react-redux';
import MenuHeader from './MenuHeader';

const mapStateToProps = state => ({
    isLogin: state.getIn(['auth', 'isLogin'])
});

const MenuHeaderContainer = connect(mapStateToProps)(MenuHeader);

export default MenuHeaderContainer;