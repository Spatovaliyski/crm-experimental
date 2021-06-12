import React from "react";
import Customer from "./Customer";

function TicketList(props) {
  return (
    <div>
    {props.customers.map(l => <Customer key={l.id} firstname={l.firstname} lastname={l.lastname} mobile={l.mobile} />)}
    </div>
  );
}

export default TicketList;
