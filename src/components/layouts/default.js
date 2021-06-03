import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Nav from '../../Nav';

const { Header, Content, Footer, Sider } = Layout;

const DefaultLayout = ({ children }) => {
    return(
    <Layout>
        <Header>

        </Header>

        <Layout>
            <Sider className="site-layout-background">

            </Sider>
            
            <Content>
                {children}

                <Footer>
                    <div><span>Copyright &copy; 2021 - Martin's CRM</span></div>
                </Footer>
            </Content>
            
        </Layout>
    </Layout>
    );
}

export default DefaultLayout;
