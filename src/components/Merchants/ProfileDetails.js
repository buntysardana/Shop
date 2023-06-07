import React from "react";
import Card from "../../common/Card";
import Button from "../../common/Button";
const ProfileDetails = () => {
  return (
    <div>
      <Card bgColor="#F0F0F0" >
        <div className="px-3 py-3">
          <div className=" row">
            <div className="col-12">
              <p>Log id</p>
              <p>1324343</p>
            </div>
            <div className=" col-6">
              <p>Name</p>
              <p>Rahul Sharma</p>
            </div>
            <div className=" col-6">
              <p>Contact</p>
              <p>Rahul Sharma</p>
            </div>
            <div className=" col-6">
              <p>Email id</p>
              <p>Rahul Sharma</p>
            </div>
            <div className=" col-6">
              <p>Identification doc.</p>
              <p>Rahul Sharma</p>
            </div>
            <div className=" col-12">
              <p>Shop allotted</p>
              <p>Rahul Sharmaxxxxxxxx</p>
            </div>
            <div className=" col-12">
              <p>Category allotted</p>
              <p>Rahul Sharmaxxxxxxxx</p>
            </div>
            <div className=" col-12">
              <p>Experience</p>
              <p>2 years</p>
            </div>
          </div>
          <div className="text-center">
           <Button name="Edit" width="fit-content"/>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileDetails;
