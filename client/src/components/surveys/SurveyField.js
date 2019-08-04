import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label style={{ fontWeight: "bold", fontSize: "1rem" }}>{label}</label>
      <input style={{ marginBottom: "5px", fontSize: "1.4rem" }} {...input} />
      <div className='red-text' style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
