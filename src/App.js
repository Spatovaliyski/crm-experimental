import React, { Component } from "react";
import update from "immutability-helper";
import ModalFormButton from "./components/ModalFormButton";
//import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import TicketsTable from "./components/TicketsTable";
import { Row, Col } from "antd";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const columns = [
  {
    title: "Ticket ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "First Name",
    dataIndex: "firstname",
    key: "firstname"
  },
  {
    title: "Last Name",
    dataIndex: "lastname",
    key: "lastname"
  }
];

class App extends Component {
  state = {
    tickets: []
  };

  handleChildFunc(newTicket) {
    newTicket.then(respData => {
      const newTickets = update(this.state.tickets, { $push: respData });
      console.log(newTickets);
      const newState = Object.assign({}, this.state, {
        tickets: newTickets
      });
      this.setState(newState);
    });
  }

  componentDidMount() {
    axios
      .get("api/tickets")
      .then(response => {
        const newTickets = response.data;

        // create a new "State" object without mutating
        // the original State object.
        const newState = Object.assign({}, this.state, {
          tickets: newTickets
        });

        // store the new state object in the component's state
        console.log(newState);
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo">Martin's CRM</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">Tickets</Menu.Item>
            <Menu.Item key="2">Contacts</Menu.Item>
            <Menu.Item key="3">Opportunities</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Tickets</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Content style={{ padding: "0 24px", minHeight: 525 }}>
              <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
                <Row type="flex" justify="end" style={{ marginBottom: 10 }}>
                  <ModalFormButton
                    buttonText="Create New Ticket"
                    title="Title"
                    myFunc={this.handleChildFunc.bind(this)}
                  />
                </Row>

                <Row>
                  <Col>
                    <TicketsTable
                      dataSource={this.state.tickets}
                      columns={columns}
                    />
                  </Col>
                </Row>
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
        </Footer>
      </Layout>
    );
  }
}

export default App;
