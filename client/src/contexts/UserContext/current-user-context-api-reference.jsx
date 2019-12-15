import CurrentUserContext from "./current-user-context.js";
import React, { Component, useContext } from "react";

// Dynamically setting value of user context.
// Providing user context to certain branch in app ctructure, to avoid prop drilling.

// Value must be set inside of a class component, in order to laverage re-rendering nature of setState.

// this.state = { currentUser: null } => substribe => this.setState({ currentUser: data })
// laverage state to change data dynamically in provider

// Now, whenever state will change, component will be re-rendered
// updated value will be passed to the provider,
// as well, as updating values of components that uses this context.

class UserExampleDynamicContext extends Component {
  constructor() {
    super();

    this.state = { currentUser: null };
  }

  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChange(async userAuth => {
      if (userAuth) {
        const userRef = await createProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <main>Main component doesn't really need context.</main>
        <footer>Footer component neither.</footer>
      </div>
    );
  }
}

// Taking use of dynamic context in header component by useContext

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div>
      <div>{currentUser.email}</div>
    </div>
  );
};

export default UserExampleDynamicContext;
