import React from "react";
import LeftSideContent from "./Components/LeftSide";
import RightSideContent from "./Components/RightSide";
import {orders} from './Data/data'
import "./App.css";
import Header from "./Components/Header";

const App = () => {

  return (
    <div className="main-content">
      <Header />
      <br/>
      <div className="dashboard-content">
        <div className="row">
          <div class="col-sm-5 left">
            <LeftSideContent />
          </div>
          <div class="col-sm-6 right">
            <RightSideContent orders={orders} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
