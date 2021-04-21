import { useQuery, gql } from '@apollo/client'

import Spinner from '../spinner/spinner.component'
import CollectionOverview from './collection-overview.component'

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`

const CollectionOverviewContainer = () => {

  const { loading, error, data } = useQuery(GET_COLLECTIONS)

  if(loading) return <Spinner />
  if(error) return <p>Error: {error}</p>
  return <CollectionOverview collections={data.collections} />
}

export default CollectionOverviewContainer

// import { connect } from 'react-redux'
// import { compose } from 'redux'
// import WithSpinner from '../withSpinner/with-spinner.component'
// import CollectionOverview from './collection-overview.component'
// import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'
// import { createStructuredSelector } from 'reselect'



// // const mapStateToProps = state => ({
// //     isLoading: state.shop.isFetching
// // })

// const mapStateToProps = createStructuredSelector({
//   isLoading: selectIsCollectionFetching,
// })

// const CollectionOverviewContainer = compose(
//     connect(mapStateToProps), 
//     WithSpinner
// )(CollectionOverview)

// export default CollectionOverviewContainer