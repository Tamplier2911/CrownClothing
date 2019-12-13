// OverviewComponent
import CollectionOverview from "./CollectionOverview";

// Redux and Selectors
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop-selectors";

// HOC Spinner
import Spinner from "../Spinner/Spinner";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

// Currying all function together  left <== right | top <== bottom
const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionOverview);

export default CollectionOverviewContainer;
