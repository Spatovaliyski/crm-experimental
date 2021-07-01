import React, { Component, useState } from "react";

import "./App.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Row, Col } from "antd";
import Contact from './Contact';
import Customers from './Customers';
import Orders from './Orders';
import Statistics from './Statistics';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import DefaultLayout from './components/layouts/default';
import IntroLayout from './components/layouts/intro';
import useToken from './components/tokens/useToken';
import Login from './components/login/Login';
import Logout from './components/login/Logout';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {

    const { token, setToken } = useToken();
    
    if(!token) {
      return (
        <IntroLayout>
          <Login setToken={setToken} />
        </IntroLayout>
      );
    }
    
    return (
      <DefaultLayout>
        <Router>
            <Nav />
            <div className="header-placeholder"></div>
            <Switch>
              <Route exact path="/" component={Home} />  
              <Route path="/Contact" component={Contact} />    
              <Route path="/Customers" component={Customers} />
              <Route path="/Orders" component={Orders} />
              <Route path="/Login" component={Login} />
              <Route path="/Logout" component={Logout} />
            </Switch>
        </Router>

      </DefaultLayout>
    );
  }

const Home = () => (
  <div className="container">
    <Layout className="page-title-strip">
        <Content style={{ padding: "0 24px"}}>
            <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
        </Content>
    </Layout>

    <Layout>
      <Layout className="home-updates">
        <Content className="home-content">
          <Layout>
            <Content>
              <div className="home-container">
                <Row gutter={24}>
                  <Col md={8} sm={24} style={{ margin: "0 0 16px" }}>
                    <div className="statistics-box">
                      <div className="statistics-meta">
                        <h4>Revenue</h4>
                        <h2>$2,454</h2>
                        <span>Compared to last year (2020)</span>
                      </div>
                    </div>
                  </Col>
                  <Col md={8} sm={24} style={{ margin: "0 0 16px" }}>
                    <div className="statistics-box">
                      <div className="statistics-meta">
                        <h4>Sales</h4>
                        <h2>$6,982</h2>
                        <span>Compared to last year (2020)</span>
                      </div>
                    </div>
                  </Col>
                  <Col md={8} sm={24} style={{ margin: "0 0 16px" }}>
                    <div className="statistics-box">
                      <div className="statistics-meta">
                        <h4>Costs</h4>
                        <h2>$8,310</h2>
                        <span>Compared to last year (2020)</span>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row gutter={32} style={{}}>
                  <Col span={24}>
                    <div className="newsfeed">
                      <div className="newsfeed-post">
                        <h2 className="newsfeed-title">Lorem Ipsum</h2>
                        <span className="newsfeed-posted">06 Jun, 2021</span>
                        <div className="newsfeed-content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        </div>
                      </div>

                      <div className="newsfeed-post">
                        <h2 className="newsfeed-title">Lorem Ipsum</h2>
                        <span className="newsfeed-posted">05 Jun, 2021</span>
                        <div className="newsfeed-content">
                          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <br />nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        </div>
                      </div>

                      <div className="newsfeed-post">
                        <h2 className="newsfeed-title">Lorem Ipsum</h2>
                        <span className="newsfeed-posted">04 Jun, 2021</span>
                        <div className="newsfeed-content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        </div>
                      </div>

                      <div className="newsfeed-post">
                        <h2 className="newsfeed-title">Lorem Ipsum</h2>
                        <span className="newsfeed-posted">03 Jun, 2021</span>
                        <div className="newsfeed-content">
                          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, <br />nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        </div>
                      </div>

                      <div className="newsfeed-post">
                        <h2 className="newsfeed-title">Lorem Ipsum</h2>
                        <span className="newsfeed-posted">02 Jun, 2021</span>
                        <div className="newsfeed-content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Content>
          </Layout>
        </Content>

        <Sider className="home-sidebar" width="300" style={{ background: "transparent"}}>
          <aside className="sidebar deals-sidebar">
            <div className="tile">
              <h1 className="title">Hi, Admin</h1>
              <p className="subtitle">Welcome to your personalized portal</p>
            </div>
            <div className="tile">
              <p>Submit your ticket information with us. <br />We will follow up with marketing and sales support to help you close the business.</p>
              <a href="/Tickets" className="tickets-link button button-primary button-with-icon icon-cloud-upload">View Tickets</a>
            </div>
          </aside>
        </Sider>
      </Layout>
    </Layout>
  </div>
);

export default App;
