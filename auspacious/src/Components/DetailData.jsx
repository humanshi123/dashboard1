import React from "react";

const DetailData = ({ order }) => {
  return (
    <div class="open-order">
      <div class="row">
        <div class="col-sm-6">
          <div class="order-view-detail">
            <div class="row">
              <div class="col-sm-5">
                <div class="order-number">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Etsy_icon.svg/1200px-Etsy_icon.svg.png" alt="" style={{height:"20px", width:"20px"}} />#{order.id}</div>
                <div class="date-order">{order.orderDate}, {order.orderTime}</div>
              </div>
              <div class="col-sm-6">
                <div class="open-detail">Open</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3" style={{ marginLeft: "-440px" }}>
          <span>{order.products}</span>
        </div>
        <div class="col-sm-3">
          <span class="order-sync">Order Syncing</span>
          <img
            style={{ height: "25px", width: "25px" }}
            src="https://cdn-icons-png.flaticon.com/512/536/536473.png"
            alt="logo"
          />
          <span class="smal-order-num">{order.status}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailData;
