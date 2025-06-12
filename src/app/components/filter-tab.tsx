"use client";

import { useState } from "react";

const filters = ["All", "New", "Used", "Refurbished", "Hot deals"];

export function FilterTab() {
  const [activeFilter, setActiveFilter] = useState(0);
  return (
    <div className="mx-auto mt-6 mb-4 flex max-w-7xl items-center gap-2 px-6">
      {filters.map((filter, i) => {
        const isSelected = i === activeFilter;
        return (
          <FilterPill
            key={filter}
            label={filter}
            isSelected={isSelected}
            handleSelect={() => setActiveFilter(i)}
          />
        );
      })}
    </div>
  );
}

function FilterPill({
  label,
  isSelected,
  handleSelect,
}: {
  label: string;
  handleSelect: () => void;
  isSelected: boolean;
}) {
  return (
    <span
      onClick={handleSelect}
      className={`cursor-pointer rounded-sm px-2.5 py-0.75 text-sm capitalize transition-colors duration-300 ease-in-out ${isSelected ? "border border-transparent bg-black text-white" : "border border-neutral-100 bg-transparent text-black"}`}
    >
      {label}
    </span>
  );
}
