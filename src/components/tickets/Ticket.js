import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Ticket.css";
import Button from 'antd/lib/button';

function Ticket(props) {
  return (<div className="ticket">
      <span> <Button type="primary">{props.firstname}</Button> </span>
      <span>{props.firstname} {props.lastname} {props.mobile}</span>
    </div>
  );
}

Ticket.propTypes = {
  firstname: PropTypes.string.isRequired
};

export default Ticket;
