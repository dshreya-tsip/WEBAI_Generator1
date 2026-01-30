export default function TestTypeSelector({ value, onChange }) {
  return (
    <div className="card">
      <h3>Select Test Type</h3>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">-- Select --</option>
        <option value="functional">Functional</option>
        <option value="integration">Integration</option>
        <option value="system">System</option>
        <option value="regression">Regression</option>
        <option value="security">Security</option>
      </select>
    </div>
  );
}

