import React from 'react'

import { CollectionsOverviewContainer } from './collection-overview.styles'

import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionOverview = ({ collections }) => (
    
    <CollectionsOverviewContainer>
    
    {   
        
        collections && collections.map(({ id, ...otherCollection}) => (
            <CollectionPreview key={id} {...otherCollection} />
        ))
    }
    </CollectionsOverviewContainer>
)


export default CollectionOverview