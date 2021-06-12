import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Order.css";
import Button from 'antd/lib/button';

function Order(props) {
  return (<div className="order">
      <span> <Button type="primary">{props.firstname}</Button> </span>
      <span>{props.firstname} {props.lastname} {props.mobile}</span>
    </div>
  );
}

Order.propTypes = {
  firstname: PropTypes.string.isRequired
};

export default Order;
