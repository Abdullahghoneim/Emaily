import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveysNew from "./surveys/SuveysNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className='container'>
        <Header />
        <BrowserRouter>
          <div style={{ marginTop: "3rem" }}>
            <Route path='/' exact component={Landing} />
            <Route path='/surveys' exact component={Dashboard} />
            <Route path='/survey/new' component={SurveysNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
