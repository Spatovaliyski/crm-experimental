import React, { Component } from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Row, Col } from "antd";
import Contact from './Contact';
import Tickets from './Tickets';
import Statistics from './Statistics';
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
              <Route path="/Statistics" component={Statistics} />
            </Switch>
        </Router>

      </DefaultLayout>
    );
  }
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
                  <Col span={6}>
                    <div className="statistics-box">
                      <div className="statistics-meta">
                        <h4>Profit</h4>
                        <h2>$1400</h2>
                        <span>Compared to last year (2020)</span>
                      </div>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div className="statistics-box">
                      <div className="statistics-meta">
                        <h4>Profit</h4>
                        <h2>$1400</h2>
                        <span>Compared to last year (2020)</span>
                      </div>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div className="statistics-box">
                      <div className="statistics-meta">
                        <h4>Profit</h4>
                        <h2>$1400</h2>
                        <span>Compared to last year (2020)</span>
                      </div>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div className="statistics-box">
                      <div className="statistics-meta">
                        <h4>Profit</h4>
                        <h2>$1400</h2>
                        <span>Compared to last year (2020)</span>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row gutter={32} style={{margin: "2.5em 0", background: "#FFF"}}>
                  <Col span={12}>
                    Test
                  </Col>
                  <Col span={12}>
                    Test
                  </Col>
                </Row>
              </div>
            </Content>
          </Layout>
        </Content>

        <Sider className="home-sidebar" width="300" style={{ background: "transparent"}}>
          <aside class="sidebar deals-sidebar">
            <div class="tile">
              <h1 class="title">Hi, Admin</h1>
              <p class="subtitle">Welcome to your personalized portal</p>
            </div>
            <div class="tile">
              <p>Submit your ticket information with us. <br />We will follow up with marketing and sales support to help you close the business.</p>
              <a href="#" class="tickets-link button button-primary button-with-icon icon-cloud-upload">View Tickets</a>
            </div>
          </aside>
        </Sider>
      </Layout>
    </Layout>
  </div>
);

export default App;
