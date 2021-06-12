import React from "react";
import Order from "./Order";

function OrderList(props) {
  return (
    <div>
    {props.orders.map(l => <Order key={l.id} firstname={l.firstname} lastname={l.lastname} mobile={l.mobile} />)}
    </div>
  );
}

export default OrderList;
