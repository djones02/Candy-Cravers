import React, { useState } from "react";

function NewCandyForm() {
  const template = {
    name: "",
    image: "",
    back_image: "",
    price: 0,
    nuts: false,
    chocolate: false,
    occasian: "",
  };
  const [form, setForm] = useState(template);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  console.log(form);

  function handleSubmit() {}
  return (
    <div className="form-container">
      <h2>Got a Suggestion? Drop it in the From</h2>
      <p>And our candy team will work on ordering it for you!</p>
      <form className="form">
        <label htmlFor="name">Candy Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={(e) => handleChange(e)}
          placeholder="Enter candy name here..."
        ></input>
        <label htmlFor="image">Front Image:</label>
        <input
          id="image"
          name="image"
          type="text"
          value={form.image}
          onChange={(e) => handleChange(e)}
          placeholder="Enter candy image here..."
        ></input>
        <label htmlFor="image">Back Image:</label>
        <input
          id="back_image"
          name="back_image"
          value={form.back_image}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Enter candy image here..."
        ></input>
        <label htmlFor="nuts">Contains nuts?</label>
        <select name="nuts" onChange={(e) => handleChange(e)}>
          <option>Select</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label htmlFor="chocolate">Contains Chocolate?</label>
        <select name="chocolate" onChange={(e) => handleChange(e)}>
          <option>Select</option>
          <option value="true">Yes</option>
          <option value={false}>No</option>
        </select>
        <label htmlFor="occasion">Candy Occasion:</label>
        <select name="occasion" onChange={(e) => handleChange(e)}>
          <option value="all">All Occasions</option>
          <option value="easter">Easter</option>
          <option value="halloween">Halloween</option>
        </select>
        <label htmlFor="image">Suggested Price:</label>
        <div className="price-container">
          <span>$</span>
          <input
            id="price"
            name="price"
            type="text"
            value={form.price}
            onChange={(e) => handleChange(e)}
            placeholder="Enter price here..."
          ></input>
        </div>
        <input className="form-submit" type="submit"></input>
      </form>
    </div>
  );
}

export default NewCandyForm;
