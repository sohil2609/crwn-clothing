import React from 'react';
import { connect } from 'react-redux';
import './collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
    console.log(collection)
    return (
        <div className="collection-page">
            <h2 className="title">{collection.title.toUpperCase()}</h2>
            <div className="items">
                {
                    collection.items.map(item => <CollectionItem {...item} key={item.id}/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CollectionPage) 