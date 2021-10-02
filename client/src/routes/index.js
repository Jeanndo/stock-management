import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Stock from '../components/stock/stock'
import Dashboard from '../components/dashboard';
import Landing from '../components/Landing/Landing'
import ClientPage from '../components/clientPage/client'
import Signup from '../components/Auth/Signup'
import Login from '../components/Auth/SignIn'
import Pricing from '../components/Landing/Pricing'
import About from '../components/Landing/About';
import ForgotPassword from '../components/Auth/ForgotPassward';
import ResetPassword from '../components/Auth/resetPassword';

class Routes extends React.Component {
    render() {
      return (
        <Router>
          <Switch>
           <Route exact path="/" component={Landing}/>
            <Route exact path="/stock" component={Stock}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/homepage" component={ClientPage}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/pricing" component={Pricing}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/forgot-password" component={ForgotPassword}/>
            <Route exact path={`/reset-password/:${this.props.token}`} component={ResetPassword}/>
          </Switch>
        </Router>
      );
    }
  }
  export default Routes;