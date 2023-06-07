import React from 'react'

const MerchantListTable = () => {
    const border = {
        borderColor: "#D9D9D9",
        borderStyle: "solid",
        borderWidth: "12px",
      };
  return (
    <div>
     <div className="table-responsive" style={{ overflowX: "auto" }}>
                  <table className="table">
                    <thead>
                      <tr
                        style={{
                          ...border,
                          backgroundColor: "#F0F0F0",
                          borderRadius: "12px",
                        }}
                      >
                        <th scope="col">Log id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Shop</th>
                        <th scope="col">SContact</th>
                        <th scope="col">Total orders</th>
                        <th scope="col">Total sales</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "#E8E8E8", ...border }}>
                        <td >1123556</td>
                        <td>Rahul Sharma</td>
                        <td>rahul@gmail.com</td>
                        <td>Traderxxx</td>
                        <td>9992321133</td>
                        <td>58</td>
                        <td>98000</td>
                        <td>
                          <div>Edit</div>
                        </td>
                        <td>
                          <div>View</div>
                        </td>
                        <td>
                          <div>Delete</div>
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "#E8E8E8", ...border }}>
                        <td>1123556</td>
                        <td>Rahul Sharma</td>
                        <td>rahul@gmail.com</td>
                        <td>Traderxxx</td>
                        <td>9992321133</td>
                        <td>58</td>
                        <td>98000</td>
                        <td>
                          <div>Edit</div>
                        </td>
                        <td>
                          <div>View</div>
                        </td>
                        <td>
                          <div>Delete</div>
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "#E8E8E8", ...border }}>
                        <td>1123556</td>
                        <td>Rahul Sharma</td>
                        <td>rahul@gmail.com</td>
                        <td>Traderxxx</td>
                        <td>9992321133</td>
                        <td>58</td>
                        <td>98000</td>
                        <td>
                          <div>Edit</div>
                        </td>
                        <td>
                          <div>View</div>
                        </td>
                        <td>
                          <div>Delete</div>
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "#E8E8E8", ...border }}>
                        <td>1123556</td>
                        <td>Rahul Sharma</td>
                        <td>rahul@gmail.com</td>
                        <td>Traderxxx</td>
                        <td>9992321133</td>
                        <td>58</td>
                        <td>98000</td>
                        <td>
                          <div>Edit</div>
                        </td>
                        <td>
                          <div>View</div>
                        </td>
                        <td>
                          <div>Delete</div>
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "#E8E8E8", ...border }}>
                        <td>1123556</td>
                        <td>Rahul Sharma</td>
                        <td>rahul@gmail.com</td>
                        <td>Traderxxx</td>
                        <td>9992321133</td>
                        <td>58</td>
                        <td>98000</td>
                        <td>
                          <div>Edit</div>
                        </td>
                        <td>
                          <div>View</div>
                        </td>
                        <td>
                          <div>Delete</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div></div>
  )
}

export default MerchantListTable