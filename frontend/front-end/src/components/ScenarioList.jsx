import { useEffect, useState } from "react";
import api from "../services/api";

function ScenarioList({ agentId }) {
  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    api.get(`/scenarios/${agentId}`).then((res) => {
      setScenarios(res.data);
    });
  }, [agentId]);

  const deleteScenario = async (id) => {
    if (window.confirm("Are you sure you want to delete this scenario?")) {
      await api.delete(`/scenarios/${id}`);
      setScenarios(scenarios.filter((s) => s._id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Scenario List
        </h2>

        {scenarios.length === 0 ? (
          <p className="text-gray-500 text-center py-6">
            No scenarios found
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700 text-left">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3">Complexity</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {scenarios.map((s, index) => (
                  <tr
                    key={s._id}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {s.name}
                    </td>

                    <td className="px-4 py-3 text-gray-600">
                      {s.description.length > 30
                        ? s.description.slice(0, 30) + "..."
                        : s.description}
                    </td>

                    <td className="px-4 py-3 capitalize">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold
                          ${
                            s.complexity === "simple"
                              ? "bg-green-100 text-green-700"
                              : s.complexity === "moderate"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                      >
                        {s.complexity}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-gray-600">
                      {new Date(s.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => deleteScenario(s._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScenarioList;
