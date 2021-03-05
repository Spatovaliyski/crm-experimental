import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Ticket.css";
import Button from 'antd/lib/button';

function Ticket(props) {
  return (<div className="ticket">
    <span>{props.firstname} {props.id}</span>
      <span> <Button type="primary">{props.firstname}</Button> </span>
      <span>{props.firstname} {props.lastname}</span>
    </div>
  );
}

Ticket.propTypes = {
  firstname: PropTypes.string.isRequired
};

export default Ticket;
