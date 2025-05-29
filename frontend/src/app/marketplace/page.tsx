import React from "react";

export default function Marketplace() {
  return (
    <div className="min-h-screen p-8 sm:p-16 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Marketplace</h1>
        <p className="mb-8 text-lg text-zinc-700 dark:text-zinc-300">
          Browse chemical products and connect with trusted suppliers. Filter, search, and discover the best deals for your business needs.
        </p>
        {/* Placeholder for product/supplier cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Example card */}
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-6 flex flex-col gap-2 border border-zinc-200 dark:border-zinc-700">
            <h2 className="font-semibold text-xl mb-1">Acetic Acid</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">Supplier: ChemGlobal Inc.</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">Min. Order: 100kg</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Request Quote</button>
          </div>
          {/* Add more cards here or map from data */}
        </div>
      </div>
    </div>
  );
}
