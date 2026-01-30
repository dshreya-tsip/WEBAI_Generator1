export default function InsightsView({ insights }) {
  if (!insights) return null;

  return (
    <div className="card">
      <h3>AI Insights</h3>
      <ul>
        <li>Total Requirements: {insights.requirements}</li>
        <li>Estimated Test Cases: {insights.testCases}</li>
        <li>Complexity: {insights.complexity}</li>
        <li>Skill Level: {insights.skill}</li>
      </ul>
    </div>
  );
}

