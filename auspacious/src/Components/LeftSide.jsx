import React, { useState } from "react";
import DropdownContent from "./DropDown";

const LeftSideContent = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isCardVisible, setCardVisible] = useState(true);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleCardVisibility = () => {
    setCardVisible(!isCardVisible);
  };
  return (
    <div style={{ position: "relative" }}>
      <h2>
        Dashboard{" "}
        <span
          style={{ fontSize: "30px", marginBottom: "0" }}
          onClick={toggleDropdown}
        >
          &#11163;
        </span>
      </h2>
      <DropdownContent isOpen={isDropdownOpen} />
      <div class="etsy-content">
        <div class="enebla-order">
          <div class="row">
            <div class="col-sm-8">
              <span class="btn-radus-type">
                Connected to <span style={{color:"blue"}}><u>DuncanStewart Shor</u></span>
              </span>
            </div>
            <div class="col-sm-4">
              <div class="etsy-logo">
                <img
                  style={{ height: "20px", width: "20px" }} onClick={toggleCardVisibility}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Etsy_icon.svg/1200px-Etsy_icon.svg.png"
                  alt="logo"
                />
                &nbsp;
                <b style={{ fontSize: "20px", cursor: "pointer" }} onClick={toggleCardVisibility}>Etsy </b>
                <span style={{ fontSize: "30px", marginBottom: "0" }} onClick={toggleCardVisibility}>
                  &#11163;
                </span>
              </div>
            </div>
          </div>
          {isCardVisible && (
            <div>
              <div class="order">ORDERS</div>
              <div class="open-order">
                <div class="row">
                  <div class="col-sm-6">
                    <span>11 Open Orders</span>
                  </div>
                  <div class="col-sm-6">
                    <span>Last updated 4 minutes ago</span>
                  </div>
                </div>
              </div>

              <div class="order">ORDER SYNCING</div>
              <div class="order">
                Order syncing is <b>enabled.</b> Etsy orders will be loaded toShopify.
              </div>
            </div>
          )}
        </div>
      </div>

      <div class="second-cumn">
        <div class="etsy-content">
          <div class="enebla-order">
            <div class="row">
              <div class="col-sm-8">
                <span class="btn-radus-type">
                  Connected to <span style={{color:"blue"}}><u>DuncanStewart Shor</u></span>
                </span>
              </div>
              <div class="col-sm-4">
                <div class="etsy-logo">
                  <img
                    style={{ height: "20px", width: "20px" }} alt="logo"
                    src="https://cdn-icons-png.flaticon.com/512/536/536473.png"
                  />
                  &nbsp;
                  <b style={{ fontSize: "20px", cursor: "pointer" }}>Shopify</b>
                    <span style={{ fontSize: "30px", marginBottom: "0" }}>
                      &#11163;
                    </span>
                </div>
              </div>
            </div>
            <div class="order">DATA HEALTH</div>
            <div class="open-order">
              <div class="row">
                <div class="col-sm-4">
                  <span>775 Products</span>
                </div>
                <div class="col-sm-4">
                  <span>6.297 Variants</span>
                </div>
                <div class="col-sm-4">
                  <span>1 Missing SKUs</span>
                </div>
              </div>
            </div>

            <div class="order">
              You are missing SKUs on a number of variants. Order syncing will
              work but Shopify line items will not be linked to products.
            </div>
            <div class="order">
              <span style={{color:"blue"}}><u>Learn more</u></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideContent;
