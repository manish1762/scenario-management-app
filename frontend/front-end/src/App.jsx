import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AgentDetail from "./pages/AgentDetail";
import CreateScenario from "./pages/CreateScenario";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 font-sans">
        {/* Optional Header */}
        <header className="bg-white shadow-md py-4 mb-6">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Scenario Management App
            </h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4">
          <Routes>
            {/* default route */}
            <Route
              path="/"
              element={
                <Navigate to="/agent/66d9c4b1a0a4e2c9f1234567" />
              }
            />

            <Route path="/agent/:agentId" element={<AgentDetail />} />
            <Route
              path="/agent/:agentId/create"
              element={<CreateScenario />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
