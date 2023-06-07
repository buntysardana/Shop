import React from "react";
import Card from "../../common/Card";
import Heading from "../../common/Heading";
import Button from "../../common/Button";
import { CustomLineChart } from "../../common/CustomLineChart";

const SalesGraph = () => {
  return (
    <div>
      <div className="d-flex pb-3">
        <Heading name="Orders vs Sales" />
        <div className="ps-4">
          <Button name="Weekly" width="fit-content" />
        </div>
      </div>
      <Card >
        <div className="px-3 py-3">
          <div className="row">
            <div className="col-9">
              <CustomLineChart/>
            </div>
            <div className="col-3">
              <p style={{fontWeight:"600" , fontSize:"18px"}}>Shop mart</p>
              <p style={{fontWeight:"600" , fontSize:"18px"}}>Shop mart</p>
              <p style={{fontWeight:"600" , fontSize:"18px"}}>Growth</p>
              <p style={{fontWeight:"600" , fontSize:"32px"}}>43%</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SalesGraph;
