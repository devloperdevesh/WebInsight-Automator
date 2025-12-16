import Header from "./components/Header";
import ScrapeForm from "./components/ScrapeForm";
import ResultBox from "./components/ResultBox";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="container">
      <Header />
      <ScrapeForm onResult={setResult} />
      {result && <ResultBox data={result} />}
    </div>
  );
}
