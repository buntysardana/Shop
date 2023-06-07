import React from "react";
import BackIcon from "../../Assets/backicon.png";
import Button from "../../common/Button";
const NewCategoryForm = () => {
  return (
    <div>
      <div className="container-fluid pt-4">
        <img src={BackIcon} />
        <div className="row pt-4">
          <div className="col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Category name</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2"
              type="text"
            />
          </div>
          <div className="col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Cover photo</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-5"
              type="file"
            />
          </div>
          <div className="col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Subcategory 1</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2"
              type="text"
            />
            <div className="text-end pt-3">
                <Button name="Add products" width="fit-content" borderRadius="12px"/>
            </div>
          </div>
          <div className="col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Subcategory 1</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2"
              type="text"
            />
            <div className="text-end pt-3">
                <Button name="Add products" width="fit-content" borderRadius="12px"/>
            </div>
          </div>
        </div>
        <div>
            <Button name="Add more subcategories" width="fit-content" borderRadius="12px"/>
        </div>
        <div className="pt-5 text-center">
            <Button name="Submit" width="fit-content" borderRadius="12px"/>
        </div>
      </div>
    </div>
  );
};

export default NewCategoryForm;
