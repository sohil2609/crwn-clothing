import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import { SignInSignUpPage } from './pages/sign-in-sign-out/sign-in-sign-out.component';
import { auth } from './firebase/firebase.utilities'


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user)
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header user={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
