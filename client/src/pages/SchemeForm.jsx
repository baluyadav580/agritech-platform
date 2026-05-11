import React, { useState } from "react";

const SchemeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    land: "",
    crop: "",
    income: "",
    location: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let schemes = [];

    if (formData.land <= 2) {
      schemes.push("PM-KISAN Scheme");
    }

    if (formData.crop.toLowerCase().includes("rice")) {
      schemes.push("Rice Crop Insurance Scheme");
    }

    if (formData.income < 200000) {
      schemes.push("Farmer Financial Support Scheme");
    }

    if (formData.location.toLowerCase().includes("village")) {
      schemes.push("Rural Agriculture Development Scheme");
    }

    setResult(schemes.join(", "));
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>AI Government Scheme Recommendation</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Farmer Name"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="land"
          placeholder="Land in Acres"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="crop"
          placeholder="Crop Type"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="income"
          placeholder="Annual Income"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Find Schemes</button>
      </form>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Recommended Schemes:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default SchemeForm;