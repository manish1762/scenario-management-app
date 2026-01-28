// pages/CreateScenario.jsx
import { useParams, useNavigate } from "react-router-dom";
import ScenarioForm from "../components/ScenarioForm";

function CreateScenario() {
  const { agentId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-blue-600 hover:text-blue-800 font-medium transition"
        >
          ← Back
        </button>

        {/* Page Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Create Scenario
        </h2>

        {/* Scenario Form */}
        <ScenarioForm
          agentId={agentId}
          onSuccess={() => navigate(`/agent/${agentId}`)}
        />
      </div>
    </div>
  );
}

export default CreateScenario;
