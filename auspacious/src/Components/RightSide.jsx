import React, { useState } from "react";
import DetailData from "./DetailData";

const RightSideContent = ({ orders }) => {
  const [showAllOrders, setShowAllOrders] = useState(false);

  const visibleOrders = showAllOrders ? orders : orders.slice(0, 5);

  const stylee = {
    border: "solid black",
    borderWidth: "0 2px 2px 0",
    display: "inline-block",
    padding: "4px",
    color: "blue",
    transform: "rotate(-45deg)",
    webkitTransform: "rotate(-45deg)",
  };

  return (
    <div>
      <div class="logo-bottom-side">
        <div class="etsy-content">
          <div class="enebla-order">
            <div class="row">
              <div class="col-sm-8">
                <span><b>Orders</b></span> &nbsp;
                <span class="btn-radus-type">Order Sync Enabled</span>
              </div>
              <div class="col-sm-4">
                <div class="view-order">
                  <p
                    style={{ color: "blue" }}
                    onClick={() => setShowAllOrders(!showAllOrders)}
                  >
                    {showAllOrders ? "Show Top 5 Orders" : "View All Orders"}<i style={stylee}></i>
                  </p>
                </div>
              </div>
            </div>

            <div class="showing-order">
              <div class="open-order">
                <div class="show">Showing 5 of 11 orders</div>
              </div>
            </div>

            {visibleOrders.map((order) => (
              <DetailData key={order.id} order={order} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideContent;
