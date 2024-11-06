import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const popularCategories = ['Technology', 'Healthcare', 'Manufacturing'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}${selectedCategory ? ` in ${selectedCategory}` : ''}`);
  };

  const handleCategoryClick = (category: string) => {
    setSearchQuery(category);
    setSelectedCategory(category);
  };

  return (
    <div className="w-full max-w-3xl">
      <form onSubmit={handleSearch}>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for procurement resources..."
            className="w-full px-6 py-4 text-lg rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-14"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </div>
      </form>
      <div className="mt-4 flex justify-center space-x-4 text-sm text-white">
        <span>Popular: </span>
        {popularCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`hover:underline ${
              selectedCategory === category ? 'text-blue-200' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;