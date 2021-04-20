import { connect } from 'react-redux'
import { compose } from 'redux'
import WithSpinner from '../withSpinner/with-spinner.component'
import CollectionOverview from './collection-overview.component'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'
import { createStructuredSelector } from 'reselect'



// const mapStateToProps = state => ({
//     isLoading: state.shop.isFetching
// })

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps), 
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer