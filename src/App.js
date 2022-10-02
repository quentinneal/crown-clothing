import React, { useState, useEffect, lazy, Suspense } from 'react';

// React Router
import { Switch, Route, Redirect } from 'react-router-dom';

// React Redux
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import './App.scss';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import {selectCurrentUser} from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shoppage/shoppage.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));


const App = ({ checkUserSession, currentUser }) => {

  //unsubscribeFromAuth = null;

  // Get user information from sign in authentication.

  /* This section will scan to see if the google account information is detected (userAuth)
  if it is, this section will run a function (createUserProfileDocument)
  that will get a reference to the information created or already in the datababse 
  (see firebase.utils.js). This code will then scan for the database info (snapshot) which is
  immediately detected or detected after it is created (createUserProfileDocument).
  This code will then update the state with the database details so it can be used in
  the application (Hello Quentin! etc)*/

 
// Initial keyboard use allows keyboard highlight navigation
const [mouseUser, setMouseUser] = useState(false);

useEffect(() => {

  const mouseDownFunc = () => {
    setMouseUser(true);
    window.removeEventListener('mousedown', mouseDownFunc);
  }

  window.addEventListener('mousedown', mouseDownFunc);
  return () => {
    window.removeEventListener('mousedown', mouseDownFunc);
  };

}, []);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

   

    return (
      <div className={`App ${mouseUser ? 'mousedown' : 'keydown'}`}>
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route 
                exact 
                path='/signin' 
                render={() => 
                  currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
        <Footer />
      </div>
    );
  }

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (App);
