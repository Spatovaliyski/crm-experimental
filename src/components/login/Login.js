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
  }).then(data => data.json())
}

const authList = require('../../auth.json')
const loginList = JSON.parse(JSON.stringify(authList));

{Object.keys(loginList['token'][0]['user']['password']).map((key, i) => (
  console.log(loginList['token'][0]['user']['password'][key])
))}

export default function Login({ setToken }) {
const [username, setUserName] = useState();
const [password, setPassword] = useState();

const handleSubmit = async e => {
  for(let i = 0; i < loginList['token'][0]['user'].length; i++){
    if (username == loginList['token'][i]['user']['email'] && password == loginList['token'][i]['user']['password']) {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });
      
      setToken(token);
    } else {
      const element = document.getElementByClassName("wrong-credentials");
      element.classList.add("is-visible");
      alert("TEST");
    }
  }
}

  return(
    <div className="login-box">
      <div className="login-half">
        <div className="login-container">
          <h1 className="login-title">Martin's CRM</h1>
          <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
              <label for="username">Email</label>
              <input type="text" name="username" value="admin2@test.com" onChange={e => setUserName(e.target.value)} />
          </div>
          <div className="auth-field">
              <label for="password">Password</label>
              <input type="password" name="password" value="admin" onChange={e => setPassword(e.target.value)} />
              <div className="wrong-credentials">Wrong credentials! Please try again.</div>
          </div>
          <div className="auth-field">
              <button className="button button-primary button-login" type="submit">Log in</button>
          </div>
          </form>
        </div>
      </div>
      <div className="login-half"></div>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }