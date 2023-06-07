import React from "react";
import Heading from "../../common/Heading";

const TopAgent = () => {
  return (
    <div>
      <div>
        <Heading fontSize="20px" fontWeight="600" name="Top agents" />
        <div className='table-responsive' style={{ overflowY: 'auto',maxHeight: "200px" }}>
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Shop</th>
                <th scope="col">Total Orders </th>
                <th scope="col">Total sales</th>{" "}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Rahul Sharma</th>
                <td scope="row">Tradersxx</td>
                <td scope="row">58</td>
                <td scope="row">72000</td>
              </tr>
              <tr>
                <th scope="row">Rahul Sharma</th>
                <td scope="row">Tradersxx</td>
                <td scope="row">58</td>
                <td scope="row">72000</td>
              </tr>
              <tr>
                <th scope="row">Rahul Sharma</th>
                <td scope="row">Tradersxx</td>
                <td scope="row">58</td>
                <td scope="row">72000</td>
              </tr>
              <tr>
                <th scope="row">Rahul Sharma</th>
                <td scope="row">Tradersxx</td>
                <td scope="row">58</td>
                <td scope="row">72000</td>
              </tr>
              <tr>
                <th scope="row">Rahul Sharma</th>
                <td scope="row">Tradersxx</td>
                <td scope="row">58</td>
                <td scope="row">72000</td>
              </tr>
              <tr>
                <th scope="row">Rahul Sharma</th>
                <td scope="row">Tradersxx</td>
                <td scope="row">58</td>
                <td scope="row">72000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopAgent;
