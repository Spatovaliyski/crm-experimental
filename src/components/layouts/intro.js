import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Nav from '../../Nav';

const { Header, Content, Footer, Sider } = Layout;

const IntroLayout = ({ children }) => {
    return(
    <Layout>
        <Content className="main-intro main-default">                
            {children}
        </Content>
    </Layout>
    );
}

export default IntroLayout;
