import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "../components/Home";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import Activate from "../components/Activate";
import Forgot from "../components/Forgot";
import Reset from "../components/Reset";
import Dashboard from "../components/Dashboard";
import Billing from "../components/Billing";
import App from "../components/Calculator/App";
import DueCreditsWithItems from "../components/DueCreditItems";
import NewCredit from "../components/NewCredit";
import Notes from "../components/Notes";
import PastCreditsWithItems from "../components/PastCreditItems";
import PastCredits from "../components/PastCredits";
import AdvanceOrders from "../components/AdvanceOrders";
import DueCredits from "../components/DueCredits";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" exact component={Home} />
        <PublicRoute restricted path="/signup" exact component={Signup} />
        <PublicRoute restricted path="/signin" exact component={Signin} />
        <PublicRoute
          restricted
          path="/auth/activate/:token"
          exact
          component={Activate}
        />
        <PublicRoute
          restricted
          path="/auth/password/forgot"
          exact
          component={Forgot}
        />
        <PublicRoute
          restricted
          path="/auth/password/reset/:token"
          exact
          component={Reset}
        />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />

        <PrivateRoute restricted path ="/billing" exact component={Billing}/>
        <PrivateRoute restricted path ="/advanceorders" exact component={AdvanceOrders}/>
        <PrivateRoute restricted path ="/newcredit" exact component={NewCredit}/>
        <PrivateRoute restricted path ="/pastcredits" exact component={PastCredits}/>
        <PrivateRoute restricted path ="/duecredits" exact component={DueCredits}/>
        <PrivateRoute restricted path ="/duecreditwithitems" exact component={DueCreditsWithItems}/>
        <PrivateRoute restricted path ="/pastcreditswithitems" exact component={PastCreditsWithItems}/>
        <PrivateRoute restricted path ="/calculator" exact component={App}/>
        <PrivateRoute restricted path ="/notes" exact component={Notes}/>

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
