import { useState } from "react";

export default function ScrapeForm({ onResult }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleScrape() {
    setLoading(true);

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/scrape`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "webinsight-secret-key"
        },
        body: JSON.stringify({ url })
      }
    );

    const data = await res.json();
    setLoading(false);
    onResult(data);
  }

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleScrape} disabled={loading}>
        {loading ? "Scraping..." : "Scrape"}
      </button>
    </div>
  );
}
