import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from './App';

const { Header, Content, Footer, Sider } = Layout;

function Nav() {
    return (
    
        <Header className="header">
            <div className="logo">Martin's CRM</div>
        

                <nav>
                    <ul className="nav-links">
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/Tickets'><li>Tickets</li></Link>
                        <Link to='/Contact'><li>Contact</li></Link>
                        <Link to='/Statistics'><li>Statistics</li></Link>
                    </ul>
                </nav>
                
                {/* <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    style={{ lineHeight: "64px" }}
                    >
                    <Menu.Item key="1">Home<Link to="/" exact /></Menu.Item>
                    <Menu.Item key="2">Contacts<Link to="/Contact" /></Menu.Item>
                    <Menu.Item key="3">Tickets<Link to="/Tickets" /></Menu.Item>
                </Menu> */}
        </Header>

    )
}

export default Nav;