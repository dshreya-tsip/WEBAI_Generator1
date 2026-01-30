export default function DownloadPanel({ onDownload }) {
  return (
    <div className="card">
      <button onClick={onDownload}>Download Test Cases</button>
    </div>
  );
}

