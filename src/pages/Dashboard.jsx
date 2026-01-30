import { useState } from "react";
import SRSUpload from "../components/SRSUpload";
import TestTypeSelector from "../components/TestTypeSelector";
import TemplateUpload from "../components/TemplateUpload";
import InsightsView from "../components/InsightsView";
import DownloadPanel from "../components/DownloadPanel";
import { generateTestCases } from "../services/api";

export default function Dashboard() {
  const [srs, setSrs] = useState(null);
  const [template, setTemplate] = useState(null);
  const [testType, setTestType] = useState("");
  const [insights, setInsights] = useState(null);
  const [jobId, setJobId] = useState(null);

  const handleGenerate = async () => {
    const payload = {
      testType,
      srsFile: srs?.name,
      template: template?.name,
    };

    // TEMP MOCK RESPONSE
    const mockResponse = {
      data: {
        jobId: "JOB123",
        insights: {
          requirements: 42,
          testCases: 180,
          complexity: "Medium",
          skill: "2–3 years QA",
        },
      },
    };

    setJobId(mockResponse.data.jobId);
    setInsights(mockResponse.data.insights);
  };

  return (
    <div className="container">
      <h1>AI Test Case Generator</h1>

      <SRSUpload onUpload={setSrs} />
      <TestTypeSelector value={testType} onChange={setTestType} />
      <TemplateUpload onUpload={setTemplate} />

      <button onClick={handleGenerate} disabled={!srs || !testType}>
        Generate Test Cases
      </button>

      <InsightsView insights={insights} />

      {jobId && <DownloadPanel onDownload={() => alert("Downloading...")} />}
    </div>
  );
}

