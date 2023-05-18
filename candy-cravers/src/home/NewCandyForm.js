import React, { useState } from "react";

function NewCandyForm() {
  const template = {
    name: "",
    image: "",
    back_image: "",
    price: 0,
    nuts: false,
    chocolate: false,
    occasion: "",
    description: "",
  };
  const [form, setForm] = useState(template);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:4000/candies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        nuts: form.nuts === "true" ? true : false,
        chocolate: form.chocolate === "true" ? true : false,
        price: parseInt(form.price),
      }),
    })
      .then((resp) => resp.json())
      .then(setForm(template));
  }

  return (
    <div
      className="container form-container"
      style={{ margin: "50px auto", maxWidth: "650px" }}
    >
      <h2>Got a Suggestion? Drop it in the From</h2>
      <p>And our candy team will work on ordering it for you!</p>
      <form style={{ marginTop: "30px" }} onSubmit={(e) => handleSubmit(e)}>
        <div className="form-floating">
          <input
            id="name"
            className="form-control"
            name="name"
            type="text"
            value={form.name}
            onChange={(e) => handleChange(e)}
            placeholder="Enter candy name here..."
          ></input>
          <label htmlFor="name">Candy Name:</label>
        </div>
        <div className="form-floating">
          <input
            id="image"
            name="image"
            className="form-control"
            type="text"
            value={form.image}
            onChange={(e) => handleChange(e)}
            placeholder="Enter candy image here..."
          ></input>
          <label htmlFor="image">Front Image:</label>
        </div>
        <div className="form-floating">
          <input
            id="back_image"
            name="back_image"
            className="form-control "
            value={form.back_image}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Enter candy image here..."
          ></input>
          <label htmlFor="image">Back Image:</label>
        </div>

        <label className="form-label" htmlFor="nuts">
          Contains nuts?
        </label>
        <select
          className="form-select"
          name="nuts"
          onChange={(e) => handleChange(e)}
        >
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <label className="form-label" htmlFor="chocolate">
          Contains Chocolate?
        </label>
        <select
          className="form-select"
          name="chocolate"
          onChange={(e) => handleChange(e)}
        >
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <label className="form-label" htmlFor="occasion">
          Candy Occasion:
        </label>
        <select
          className="form-select"
          name="occasion"
          onChange={(e) => handleChange(e)}
        >
          <option>All Occasions</option>
          <option value="easter">Easter</option>
          <option value="halloween">Halloween</option>
        </select>

        <label className="form-label" htmlFor="price">
          Suggested Price:
        </label>
        <div className="input-group">
          <div className="input-group-text">$</div>
          <input
            id="price"
            name="price"
            type="number"
            className="form-control"
            value={form.price}
            onChange={(e) => handleChange(e)}
            placeholder="Enter price here..."
          ></input>
          <div className="input-group-text">.00</div>
        </div>

        <button className="btn btn-primary btn-block" style={{ width: "100%" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewCandyForm;
