// components/ui/products/FilterSearch.tsx

import { useState } from "react";

interface FilterSearchProps {
  onSearch: (searchTerm: string) => void;
  onCategoryChange: (category: string) => void;
  onSymptomChange: (symptom: string) => void;
}

const FilterSearch = ({
  onSearch,
  onCategoryChange,
  onSymptomChange,
}: FilterSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [symptom, setSymptom] = useState("");

  // Handle changes in search, category, and symptom filters
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass search term to parent
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
    onCategoryChange(e.target.value); // Pass category filter to parent
  };

  const handleSymptomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSymptom(e.target.value);
    onSymptomChange(e.target.value); // Pass symptom filter to parent
  };

  return (
    <div className="mb-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by Category"
          value={category}
          onChange={handleCategoryChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by Symptoms"
          value={symptom}
          onChange={handleSymptomChange}
          className="border p-2 rounded-md w-full"
        />
      </div>
    </div>
  );
};

export default FilterSearch;
