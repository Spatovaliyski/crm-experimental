import React, { Component, Image } from "react";
import update from "immutability-helper";
import ModalFormButton from "./components/customers/ModalFormButton";
import CustomersTable from "./components/customers/CustomersTable";
//import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Row, Col } from "antd";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import DefaultLayout from './components/layouts/default';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


// const displayAvatar = (avatar) => {
//   const baseUrl = "./src/assets/img/";
//   const imageName = require(baseUrl + avatar);

//   return <img src={imageName} />
// }

const columns = [
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    //render: displayAvatar
  },
  {
    title: "Customer ID",
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
  },
  {
    title: "Mobile Phone",
    dataIndex: "mobile",
    key: "mobile"
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Membership",
    dataIndex: "membership",
    key: "membership"
  },
];

class App extends Component {
  state = {
    customers: []
  };

  handleChildFunc(newCustomer) {
    newCustomer.then(respData => {
      const newCustomers = update(this.state.customers, { $push: respData });
      console.log(newCustomers);
      const newState = Object.assign({}, this.state, {
        customers: newCustomers
      });
      this.setState(newState);
    });
  }

  componentDidMount() {
    axios
      .get("/api/customers")
      .then(response => {
        const newCustomers = response.data;

        // create a new "State" object without mutating
        // the original State object.
        const newState = Object.assign({}, this.state, {
          customers: newCustomers
        });

        // store the new state object in the component's state
        console.log(newState);
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <Layout className="page-title-strip">
          <Content style={{ padding: "0 24px"}}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Customers</Breadcrumb.Item>
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
                      buttonText="Add New Customer"
                      title="Title"
                      myFunc={this.handleChildFunc.bind(this)}
                    />
                  </Row>

                  <Row>
                    <Col>
                      <CustomersTable
                        dataSource={this.state.customers}
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
