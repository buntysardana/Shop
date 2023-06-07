import React from 'react'

const ShopListTable = () => {
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
                        <th scope="col">Shop name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Shop owner</th>
                        <th scope="col">TNo. of agent</th>
                        <th scope="col">SNo. of category</th>
                        <th scope="col">Total orders</th>
                        <th scope="col">Total sales</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "#E8E8E8", ...border }}>
                        <td>Rahul Sharmaxxx</td>
                        <td>Pune</td>
                        <td>Rahul Sharma</td>
                        <td>4</td>
                        <td>58</td>
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
                        <td>Rahul Sharmaxxx</td>
                        <td>Pune</td>
                        <td>Rahul Sharma</td>
                        <td>4</td>
                        <td>58</td>
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
                        <td>Rahul Sharmaxxx</td>
                        <td>Pune</td>
                        <td>Rahul Sharma</td>
                        <td>4</td>
                        <td>58</td>
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
                        <td>Rahul Sharmaxxx</td>
                        <td>Pune</td>
                        <td>Rahul Sharma</td>
                        <td>4</td>
                        <td>58</td>
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
                        <td>Rahul Sharmaxxx</td>
                        <td>Pune</td>
                        <td>Rahul Sharma</td>
                        <td>4</td>
                        <td>58</td>
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

export default ShopListTable