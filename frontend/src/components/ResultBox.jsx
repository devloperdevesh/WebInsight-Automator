export default function ResultBox({ data }) {
    return (
      <div className="card">
        <h3>Extracted Data</h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
  