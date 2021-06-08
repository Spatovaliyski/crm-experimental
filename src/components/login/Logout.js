import React, { useState } from 'react';

import { Row, Col } from "antd";
import DefaultLayout from '../../components/layouts/default';
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import './login.css';

function Logout() {
    sessionStorage.removeItem("token");
    window.location.href = '/';
}

export default Logout;
