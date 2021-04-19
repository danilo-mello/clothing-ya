import React, {useEffect} from 'react'
import { Route } from 'react-router-dom'

import { connect } from 'react-redux'

// import SHOP_DATA from './shop.data'
import { firestore, convertCollectionSnapShotToMap } from '../../firebase/firebase.util'
// import CollectionPreview from '../../components/collection-preview/collection-preview.component'
// import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import { fetchCollectionsStartAsync, updateCollection } from '../../redux/shop/shop.actions'

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container'
import CollectionPageContainer from '../collection/collection-page.container'

const ShopPage = ({fetchCollectionsStartAsyncProps, updateCollectionProps, match}) => {

    // const [collections, setCollections] = useState([])

    useEffect(() => {
        // setCollections(SHOP_DATA)
        fetchCollectionsStartAsyncProps()

        let unsubscribeFromSnapShot = null

        const collectionRef = firestore.collection('collections')

        unsubscribeFromSnapShot = collectionRef.onSnapshot(async (snapShot) => {
            const collectionsMap = convertCollectionSnapShotToMap(snapShot)
            updateCollectionProps(collectionsMap)
        })

        return () => {
            unsubscribeFromSnapShot()
        }
    }, [fetchCollectionsStartAsyncProps, updateCollectionProps])

    return (
        <div className="shop-page">
            
            {/* {
                collections && collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            } */}

            {/* <CollectionOverviewContainer /> */}

            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />


        </div>
    )
}

const mapStateToProps = (state) => ({
    collectionProps: state.shop.collections
})

const mapDispatchToProps = dispatch => ({
    updateCollectionProps: (collectionsMap) => dispatch(updateCollection(collectionsMap)),
    fetchCollectionsStartAsyncProps: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)