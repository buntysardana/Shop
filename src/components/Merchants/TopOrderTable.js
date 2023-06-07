import React from "react";
import Heading from "../../common/Heading";

const TopOrderTable = () => {
    const border = {
        borderColor: "#D9D9D9",
        borderStyle: "solid",
        borderWidth: "12px",
      };
  return (
    <div>
      <div>
      <Heading name="Top orders"/>
        <div className="table-responsive pt-2"  style={{ overflowX: "auto" }}>
          <table className="table">
            <thead>
              <tr
                style={{
                  ...border,
                  backgroundColor: "#F0F0F0",
                  borderRadius: "12px",
                }}
              >
                <th scope="col">Product name</th>
                <th scope="col">Product id</th>
                <th scope="col">Date added</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#E8E8E8", ...border }}>
                <td>Rahul Sharma</td>
                <td>1124</td>
                <td>10/12/2022</td>
                <td>4200</td>
                <td>6</td>
                <td>25850</td>
              </tr>
              <tr style={{ backgroundColor: "#E8E8E8", ...border }}>
                <td>Rahul Sharma</td>
                <td>1124</td>
                <td>10/12/2022</td>
                <td>4200</td>
                <td>6</td>
                <td>25850</td>
              </tr>
              <tr style={{ backgroundColor: "#E8E8E8", ...border }}>
                <td>Rahul Sharma</td>
                <td>1124</td>
                <td>10/12/2022</td>
                <td>4200</td>
                <td>6</td>
                <td>25850</td>
              </tr>
              <tr style={{ backgroundColor: "#E8E8E8", ...border }}>
                <td>Rahul Sharma</td>
                <td>1124</td>
                <td>10/12/2022</td>
                <td>4200</td>
                <td>6</td>
                <td>25850</td>
              </tr>
              <tr style={{ backgroundColor: "#E8E8E8", ...border }}>
                <td>Rahul Sharma</td>
                <td>1124</td>
                <td>10/12/2022</td>
                <td>4200</td>
                <td>6</td>
                <td>25850</td>
              </tr>
              <tr style={{ backgroundColor: "#E8E8E8", ...border }}>
                <td>Rahul Sharma</td>
                <td>1124</td>
                <td>10/12/2022</td>
                <td>4200</td>
                <td>6</td>
                <td>25850</td>
              </tr>
              <tr style={{ backgroundColor: "#E8E8E8", ...border }}>
                <td>Rahul Sharma</td>
                <td>1124</td>
                <td>10/12/2022</td>
                <td>4200</td>
                <td>6</td>
                <td>25850</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopOrderTable;
