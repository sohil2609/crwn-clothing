import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utilities";
import { connect } from "react-redux";
import setCurretUser from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selector";
import {
  SpinnerContainer,
  SpinnerOverlay
} from "./components/withSpinner/withSpinner.styles";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const SignInSignUpPage = lazy(() =>
  import("./pages/sign-in-sign-out/sign-in-sign-out.component")
);

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurretUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapShot => {
          setCurretUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurretUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense
              fallback={
                <SpinnerOverlay>
                  <SpinnerContainer />
                </SpinnerOverlay>
              }
            >
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  this.props.currentUser ? (
                    <Redirect to="/" />
                  ) : (
                    <SignInSignUpPage />
                  )
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurretUser: user => dispatch(setCurretUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
