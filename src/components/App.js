import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import GroupsPage from "./groups/GroupsPage";
import GroupDetails from "./groups/GroupDetails";
// eslint-disable-next-line import/no-named-as-default
import ManageGroupPage from "./groups/ManageGroupPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/groups" component={GroupsPage} />
        <Route path="/group/:slug" component={ManageGroupPage} />
        <Route path="/group" component={ManageGroupPage} />
        <Route path="/group-details" component={GroupDetails} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
