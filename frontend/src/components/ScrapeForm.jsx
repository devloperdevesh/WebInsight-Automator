import { useState } from "react";

export default function ScrapeForm({ onResult }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);

    const res = await fetch("http://127.0.0.1:8000/scrape", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "webinsight-secret-key"
      },
      body: JSON.stringify({ url })
    });

    const data = await res.json();
    onResult(data.data);
    setLoading(false);
  }

  return (
    <div className="card">
      <input
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Scraping..." : "Start Scraping"}
      </button>
    </div>
  );
}
