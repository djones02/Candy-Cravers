import React, { useState } from "react";

function NewCandyForm() {
  const template = {
    name: "",
    image: "",
    back_image: "",
    price: "1",
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
    <section className="form-page-container" style={{paddingTop:"80px"}}>
      <div
        className="container "
        style={{
          paddingTop: "50px",
          maxWidth: "650px",
          background: "#ec4899",
          borderRadius: "30px",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <h2
        className="form-content"
          style={{
            color: "white",
            fontWeight: "600",
            textShadow: "6px 6px 12px #500724",
          }}
        >
          Got a Suggestion? Drop it in the From
        </h2>
        <p className="form-content" style={{ color: "white" }}>
          And our candy team will work on ordering it for you!
        </p>

        <form style={{ marginTop: "30px" }} onSubmit={(e) => handleSubmit(e)}>
          <div className="form-floating " style={{ marginBottom: "20px" }}>
            <input
              id="name"
              className="form-control "
              style={{ height: "50px" }}
              name="name"
              type="text"
              value={form.name}
              onChange={(e) => handleChange(e)}
              placeholder="Enter candy name here..."
            ></input>
            <label htmlFor="name">Candy Name:</label>
          </div>
          <div className="form-floating" style={{ marginBottom: "20px" }}>
            <input
              id="image"
              style={{ height: "50px" }}
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
              className="form-control"
              style={{ height: "50px" }}
              value={form.back_image}
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Enter candy image here..."
            ></input>
            <label htmlFor="image">Back Image:</label>
          </div>

          <label
            className="form-label"
            style={{ color: "#fdf2f8" }}
            htmlFor="nuts"
          >
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

          <label
            className="form-label"
            style={{ color: "#fdf2f8" }}
            htmlFor="chocolate"
          >
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

          <label
            className="form-label"
            htmlFor="occasion"
            style={{ color: "#fdf2f8" }}
          >
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
            <option value="valentines">Valentines</option>
          </select>

          <label
            className="form-label"
            style={{ color: "#fdf2f8" }}
            htmlFor="price"
          >
            Suggested Price:
          </label>
          <div className="form-floating" style={{ marginBottom: "20px" }}>
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
              min={"1"}
              ></input>
          </div>
          </div>

          <button
            className="btn btn-info btn-block form-button"
            style={{
              width: "100%",
              borderRadius: "100px",
              marginTop: "18px",
              marginBottom: "10px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewCandyForm;
