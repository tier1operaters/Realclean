"use client";
import { useState } from "react";

export default function EstimateForm() {
  const [panes, setPanes] = useState(0);
  const price = panes * 8;

  const submitEstimate = async () => {
    await fetch("/api/estimate", {
      method: "POST",
      body: JSON.stringify({ panes, price }),
    });
    alert("Estimate sent!");
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold mb-4">Instant Estimate</h2>
      <label className="block mb-2">Number of Window Panes</label>
      <input
        type="number"
        value={panes}
        onChange={(e) => setPanes(Number(e.target.value))}
        className="w-full border rounded p-3"
      />
      <div className="mt-4 text-xl font-semibold">Estimated Price: ${price}</div>
      <button
        onClick={submitEstimate}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        Send Estimate
      </button>
    </div>
  );
}