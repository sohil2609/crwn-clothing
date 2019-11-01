import React from 'react';
import  { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
import { CollectionPreview } from '../collection-preview/collection-preview.component';

const CollectionOverview = ({collections}) => {
    console.log(collections)
    return (
        <div className="collection-overview">
            {
                collections
                .map((collection) => (
                    <CollectionPreview title={collection.title} items={collection.items} key={collection.id}/>
            ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview)