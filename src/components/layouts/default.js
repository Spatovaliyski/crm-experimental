import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Nav from '../../Nav';

const { Header, Content, Footer, Sider } = Layout;

const DefaultLayout = ({ children }) => {
    return(
    <Layout>

        <Content>
            {children}
        </Content>

        <Footer style={{ textAlign: "center" }}>
        </Footer>
    </Layout>
    );
}

export default DefaultLayout;
