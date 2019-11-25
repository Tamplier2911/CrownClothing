// OverviewComponent
import CollectionPage from "./CollectionPage";

// Redux and Selectors
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop-selectors";

// HOC Spinner
import Spinner from "../../components/Spinner/Spinner";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

// Currying all function together  left <== right | top <== bottom
const CollectionPageContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionPage);

export default CollectionPageContainer;
