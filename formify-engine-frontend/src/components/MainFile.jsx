import React, { useContext, useState } from "react";
import File from "./file";
import { DataContext } from "./store/Context";

const MainFile = () => {
  const [formData, setFormData] = useState({});
  const { items, removeItem } = useContext(DataContext);
  //   const [data, setData] = useState(items);
  console.log("all tthe item here", items);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update form data dynamically
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData); // Log form data
  };

  return (
    <div>
      {/* <File
        label="name"
        placeholder="Enter your name"
        required="true"
        type="text"
      /> */}
      <div>Show Section</div>
      <form onSubmit={handleSubmit}>
        {items &&
          items.map((field, index) => (
            <div key={index} style={{ marginBottom: "16px" }}>
              <div className="flex">
                <div>
                  <label
                    htmlFor={field.name}
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    id={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    style={{ padding: "8px", width: "100%" }}
                  />
                </div>
                <div>
                  <button onClick={removeItem(items.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        <button
          type="submit"
          style={{ padding: "10px 20px", background: "blue", color: "white" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MainFile;
