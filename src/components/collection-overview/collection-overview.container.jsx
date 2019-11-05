import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../withSpinner/withSpinner.component';
import CollectionOverview from './collection-overview.component';
import { compose } from 'redux';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching
})

export default compose(connect(mapStateToProps), WithSpinner)(CollectionOverview);