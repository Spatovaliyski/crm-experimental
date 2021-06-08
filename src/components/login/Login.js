import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from "antd";
import DefaultLayout from '../../components/layouts/default';
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import './login.css';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
   

export default function Login({ setToken }) {
const [username, setUserName] = useState();
const [password, setPassword] = useState();

const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <form className="auth-form" onSubmit={handleSubmit}>
    <div className="auth-field">
        <label for="username">Username</label>
        <input type="text" name="username" onChange={e => setUserName(e.target.value)} />
    </div>
    <div className="auth-field">
        <label for="password">Password</label>
        <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
    </div>
    <div className="auth-field">
        <button className="button button-primary button-login" type="submit">Log in</button>
    </div>
    </form>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }