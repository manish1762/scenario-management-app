// pages/AgentDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import ScenarioList from "../components/ScenarioList";

function AgentDetail() {
  const { agentId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Agent Details
            </h2>
            <p className="text-gray-500 text-sm">
              Agent ID: <span className="font-medium">{agentId}</span>
            </p>
          </div>

          <button
            onClick={() => navigate(`/agent/${agentId}/create`)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            + Create Scenario
          </button>
        </div>

        {/* Scenario List */}
        <ScenarioList agentId={agentId} />

      </div>
    </div>
  );
}

export default AgentDetail;
