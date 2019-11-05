import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsFetching } from '../../redux/shop/shop.selector';
import { compose } from 'redux';
import WithSpinner from '../../components/withSpinner/withSpinner.component';
import CollectionComponent from './collection.component';

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching
})

export default compose(connect(mapStateToProps), WithSpinner)(CollectionComponent)