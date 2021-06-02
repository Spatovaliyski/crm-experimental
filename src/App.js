import React, { Component } from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import Contact from './Contact';
import Tickets from './Tickets';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import DefaultLayout from './components/layouts/default'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <DefaultLayout>
        <Router>
            <Nav />

            <Switch>
              <Route exact path="/" component={Home} />  
              <Route path="/Contact" component={Contact} />    
              <Route path="/Tickets" component={Tickets} />     
            </Switch>
        </Router>
      </DefaultLayout>
    );
  }
}

const Home = () => (
  <div>
    <h1>Homepage</h1>
  </div>
);

export default App;
