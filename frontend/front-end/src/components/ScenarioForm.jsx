// components/ScenarioForm.jsx
import { useState } from "react";
import api from "../services/api";

function ScenarioForm({ agentId, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    userMessage: "",
    complexity: "",
    category: ""
  });

  const isValid =
    form.name &&
    form.description &&
    form.userMessage &&
    form.complexity &&
    form.category;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/scenarios", {
      ...form,
      agentId
    });

    alert("Scenario created successfully");

    setForm({
      name: "",
      description: "",
      userMessage: "",
      complexity: "",
      category: ""
    });

    onSuccess();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-xl shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Scenario
        </h2>

        {/* Scenario Name */}
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Scenario Name"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Description */}
        <textarea
          name="description"
          value={form.description}
          placeholder="Description"
          rows="3"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* User Message */}
        <textarea
          name="userMessage"
          value={form.userMessage}
          placeholder="User Message"
          rows="3"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Complexity */}
        <select
          name="complexity"
          value={form.complexity}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Complexity</option>
          <option value="simple">Simple</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>

        {/* Category */}
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Category</option>
          <option value="happy_path">Happy Path</option>
          <option value="edge_case">Edge Case</option>
          <option value="adversarial">Adversarial</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-2 rounded-lg font-semibold text-white transition
            ${
              isValid
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
        >
          Create Scenario
        </button>
      </form>
    </div>
  );
}

export default ScenarioForm;
