import React, { Component, Image } from "react";
import update from "immutability-helper";
import ModalFormButton from "./components/orders/ModalFormButton";
import OrdersTable from "./components/orders/OrdersTable";
//import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Row, Col } from "antd";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import DefaultLayout from './components/layouts/default';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const amountData = (amount) => {
  return <p>${amount}</p>
}

const orderQuantity = (products) => {
    return <p>{products.length}</p>
}

const customerName = (customerId) => {
    return <p>{customerId}</p>
}

const columns = [
  {
    title: "Order Reference",
    dataIndex: "reference",
    key: "reference",
    //render: displayAvatar
  },
  {
    title: "Quantity",
    dataIndex: "products",
    key: "products",
    render: orderQuantity
  },
  {
    title: "Amount (p/pc)",
    dataIndex: "amount",
    key: "amount",
    render: amountData
  },
  {
    title: "Customer",
    dataIndex: "customerId",
    key: "customerId",
    render: customerName
  },
  {
    title: "Order date",
    dataIndex: "orderDate",
    key: "orderDate"
  },
  {
    title: "Processed",
    dataIndex: "shippedDate",
    key: "shippedDate"
  }
];

class App extends Component {
  state = {
    orders: []
  };

  handleChildFunc(newOrder) {
    newOrder.then(respData => {
      const newOrders = update(this.state.orders, { $push: respData });
      console.log(newOrders);
      const newState = Object.assign({}, this.state, {
        orders: newOrders
      });
      this.setState(newState);
    });
  }

  componentDidMount() {
    axios
      .get("/api/orders")
      .then(response => {
        const newOrders = response.data;

        // create a new "State" object without mutating
        // the original State object.
        const newState = Object.assign({}, this.state, {
          orders: newOrders
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
                  <Breadcrumb.Item>Orders</Breadcrumb.Item>
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
                      buttonText="Create New Order"
                      title="Title"
                      myFunc={this.handleChildFunc.bind(this)}
                    />
                  </Row>

                  <Row>
                    <Col>
                      <OrdersTable
                        dataSource={this.state.orders}
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
