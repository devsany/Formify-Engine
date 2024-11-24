import React, { useContext, useState } from "react";
import { DataContext } from "./store/Context";

const MainFile = () => {
  const [formData, setFormData] = useState({});
  const { items, removeItem } = useContext(DataContext);

  console.log("All the items here", items);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Dynamically update only the field corresponding to the 'name' of the input
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Ensures that only the corresponding field is updated
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData); // Log the form data on submit
  };

  return (
    <div>
      <div>Show Section</div>
      <form onSubmit={handleSubmit}>
        {items &&
          items.map((field) => (
            <div key={field.id} style={{ marginBottom: "16px" }}>
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
                    // Make sure each field uses its specific name to pull value from `formData`
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    style={{ padding: "8px", width: "100%" }}
                  />
                </div>
                <div>
                  {/* Button to delete the form input */}
                  <button
                    type="button"
                    onClick={() => removeItem(field.id)} // Correctly using field id to remove item
                    style={{
                      padding: "5px 10px",
                      background: "red",
                      color: "white",
                    }}
                  >
                    Delete
                  </button>
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

export default React.memo(MainFile); // Memoize the component to prevent unnecessary re-renders
