import React from "react";
import Ticket from "./Ticket";

function TicketList(props) {
  return (
    <div>
    {props.tickets.map(l => <Ticket key={l.id} firstname={l.firstname} lastname={l.lastname} mobile={l.mobile} />)}
    </div>
  );
}

export default TicketList;
