
import React from "react";

export default function SRSUpload({ onUpload }) {
  const handleFileChange = (e) => {
    onUpload(e.target.files[0]);
  };

  return (
    <div className="card">
      <h3>Upload SRS Document</h3>
      <input type="file" accept=".pdf,.docx,.txt" onChange={handleFileChange} />
    </div>
  );
}
