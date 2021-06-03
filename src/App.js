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
  <div>
    <Layout>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: "24px 0", background: "#fff" }}>
          <Content style={{ padding: "0 24px", minHeight: 525 }}>
            <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
              <Row type="flex" justify="end" style={{ marginBottom: 10 }}>
                
              </Row>

              <Row gutter={32}>
                <Col span={6}>
                  <div className="statistics-box">
                    <div className="statistics-meta">
                      <p>Profit</p>
                      <h2>$1400</h2>
                      <span>Compare to last year (2019)</span>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="statistics-box">
                    <div className="statistics-meta">
                      <p>Profit</p>
                      <h2>$1400</h2>
                      <span>Compare to last year (2019)</span>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="statistics-box">
                    <div className="statistics-meta">
                      <p>Profit</p>
                      <h2>$1400</h2>
                      <span>Compare to last year (2019)</span>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="statistics-box">
                    <div className="statistics-meta">
                      <p>Profit</p>
                      <h2>$1400</h2>
                      <span>Compare to last year (2019)</span>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row gutter={32}>
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
    </Layout>
  </div>
);

export default App;
