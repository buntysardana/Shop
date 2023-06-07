import React from "react";
import Card from "../../common/Card";
import Heading from "../../common/Heading";
import Button from "../../common/Button";
const TotalCatagries = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <Heading name="Total categories" />
        <div className="d-flex">
          <Button name="Add"  width="fit-content"/>
          <Button name="Edit" width="fit-content" />
        </div>
      </div>
      <Card>
        <div className="px-3">
          <div className="row">
            <div className="col-2">view</div>
            <div className="col-8">Lehenga</div>
            <div className="col-2">view</div>
            <hr />
            <div className="col-2">view</div>
            <div className="col-8">Lehenga</div>
            <div className="col-2">view</div>
            <hr />
            <div className="col-2">view</div>
            <div className="col-8">Lehenga</div>
            <div className="col-2">view</div>
            <hr />
            <div className="col-2">view</div>
            <div className="col-8">Lehenga</div>
            <div className="col-2">view</div>
            <hr />
            <div className="col-2">view</div>
            <div className="col-8">Lehenga</div>
            <div className="col-2">view</div>
            <hr />
            <div className="col-2">view</div>
            <div className="col-8">Lehenga</div>
            <div className="col-2">view</div>
            <hr />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TotalCatagries;
