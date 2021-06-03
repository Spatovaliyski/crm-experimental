import React, { Component } from "react";
import "./App.css";
import { Row, Col } from "antd";
import DefaultLayout from './components/layouts/default';
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function Contact() {
    return (
        <div>
            <DefaultLayout>
                <Layout>
                    <Content style={{ padding: "0 50px" }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Contact</Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout style={{ padding: "24px 0", background: "#fff" }}>
                        <Content style={{ padding: "0 24px", minHeight: 525 }}>
                            <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
                            <Row type="flex" justify="end" style={{ marginBottom: 10 }}>
                                
                            </Row>

                            <Row>
                                <Col>
                                
                                </Col>
                            </Row>
                            </div>
                        </Content>
                        </Layout>
                    </Content>
                </Layout>
            </DefaultLayout>
        </div>
    );
}

export default Contact;
