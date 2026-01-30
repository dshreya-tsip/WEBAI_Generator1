export default function TemplateUpload({ onUpload }) {
  return (
    <div className="card">
      <h3>Upload Test Case Template</h3>
      <input type="file" accept=".xlsx,.docx" onChange={(e) => onUpload(e.target.files[0])} />
    </div>
  );
}

