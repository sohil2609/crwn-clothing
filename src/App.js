import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import Header from './components/header/header.component';
import { SignInSignUpPage } from './pages/sign-in-sign-out/sign-in-sign-out.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utilities';
import { connect } from 'react-redux';
import setCurretUser from './redux/user/user.action';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurretUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if(user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapShot => {
          setCurretUser ({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurretUser(null)
      }
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (
              <Redirect to="/" />) : ( <SignInSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
 setCurretUser: user => dispatch(setCurretUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
