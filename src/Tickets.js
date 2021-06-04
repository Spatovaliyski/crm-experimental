import React, { Component } from "react";
import update from "immutability-helper";
import ModalFormButton from "./components/tickets/ModalFormButton";
import TicketsTable from "./components/tickets/TicketsTable";
//import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Row, Col } from "antd";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import DefaultLayout from './components/layouts/default';

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
      .get("/api/tickets")
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
      <div>
        <Layout className="page-title-strip">
          <Content style={{ padding: "0 24px"}}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Tickets</Breadcrumb.Item>
              </Breadcrumb>
          </Content>
        </Layout>

        <Layout>
          <Content className="main" style={{ margin: "0 50px" }}>
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
        </Layout>
      </div>
    );
  }
}

const Home = () => (
  <div>
  </div>
);

export default App;
