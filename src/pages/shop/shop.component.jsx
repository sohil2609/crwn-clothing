import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionStart } from '../../redux/shop/shop.action';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container'
import CollectionPageContainer from '../collection/collection.container'


const ShopPage = ({fetchCollectionStart, match}) => {
    useEffect(() => {
        fetchCollectionStart();
    }, [fetchCollectionStart])
    

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route exact path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
        </div>
    )
}

const mapDispatchToProps = (disptach) => ({
    fetchCollectionStart: () => disptach(fetchCollectionStart())
})


export default connect(null, mapDispatchToProps)(ShopPage);




