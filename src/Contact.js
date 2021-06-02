import React, { Component } from "react";
import "./App.css";
import DefaultLayout from './components/layouts/default';
import { Layout, Menu, Breadcrumb, Icon } from "antd";

function Contact() {
    return (
        <div>
            <DefaultLayout>
                <Layout>
                    <h3>Hello</h3>
                </Layout>
            </DefaultLayout>
        </div>
    );
}

export default Contact;
