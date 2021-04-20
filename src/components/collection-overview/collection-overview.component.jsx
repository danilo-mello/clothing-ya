import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { CollectionsOverviewContainer } from './collection-overview.styles'
import { selectColletionForPreview } from '../../redux/shop/shop.selector'

import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionOverview = ({ collectionsProps }) => (
    
    <CollectionsOverviewContainer>
    
    {   
        
        collectionsProps && collectionsProps.map(({ id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
    }
    </CollectionsOverviewContainer>
)

// const mapStateToProps = state => ({
//     collectionsProps: Object.keys(state.shop.collections).map(key => state.shop.collections[key])
// })

const mapStateToProps = createStructuredSelector({
    collectionsProps: selectColletionForPreview
})

export default connect(mapStateToProps)(CollectionOverview)