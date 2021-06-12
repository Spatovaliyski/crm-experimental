import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Customer.css";
import Button from 'antd/lib/button';

function Customer(props) {
  return (<div className="Customer">
      <span> <Button type="primary">{props.firstname}</Button> </span>
      <span>{props.firstname} {props.lastname} {props.mobile}</span>
    </div>
  );
}

Customer.propTypes = {
  firstname: PropTypes.string.isRequired
};

export default Customer;
