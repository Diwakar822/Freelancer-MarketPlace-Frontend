import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Search = () => {
    const navigate = useNavigate()
  const [searchType, setSearchType] = useState("freelancers"); // Default to freelancers
  const [filters, setFilters] = useState({
    skills: "",
    location: "",
    minRating: "",
    maxPrice: "",
    title: "",
    category: "",
    minBudget: "",
    maxBudget: "",
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");

    try {
      let endpoint = "";
      let params = {};

      if (searchType === "freelancers") {
        endpoint = "/api/search/freelancers";
        params = {
          skills: filters.skills,
          location: filters.location,
          minRating: filters.minRating,
          maxPrice: filters.maxPrice,
        };
      } else if (searchType === "jobs") {
        endpoint = "/api/search/jobs";
        params = {
          title: filters.title,
          category: filters.category,
          minBudget: filters.minBudget,
          maxBudget: filters.maxBudget,
        };
      }

      const response = await axios.get(`https://freelancer-marketplace-backend-1.onrender.com${endpoint}`, { params });
      setResults(response.data[searchType]);
    } catch (error) {
      setError("Failed to fetch results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Search</h1>

      {/* Search Type Toggle */}
      <div className="mb-4">
        <button
          onClick={() => setSearchType("freelancers")}
          className={`mr-4 p-2 ${searchType === "freelancers" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Freelancers
        </button>
        <button
          onClick={() => setSearchType("jobs")}
          className={`p-2 ${searchType === "jobs" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Jobs
        </button>
      </div>

      {/* Search Filters */}
      <div className="mb-4">
        {searchType === "freelancers" ? (
          <>
            <input
              type="text"
              placeholder="Skills (comma-separated)"
              value={filters.skills}
              onChange={(e) => setFilters({ ...filters, skills: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Location"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="number"
              placeholder="Minimum Rating"
              value={filters.minRating}
              onChange={(e) => setFilters({ ...filters, minRating: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="number"
              placeholder="Maximum Price"
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Job Title"
              value={filters.title}
              onChange={(e) => setFilters({ ...filters, title: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Category"
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="number"
              placeholder="Minimum Budget"
              value={filters.minBudget}
              onChange={(e) => setFilters({ ...filters, minBudget: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="number"
              placeholder="Maximum Budget"
              value={filters.maxBudget}
              onChange={(e) => setFilters({ ...filters, maxBudget: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
          </>
        )}
      </div>

      {/* Search Button */}
      <Link to={'/'}>
      <button
        onClick={handleSearch}
        disabled={loading}
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        {loading ? "Searching..." : "Search"}
      </button></Link>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Search Results */}
      <div className="mt-8">
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result._id} className="bg-white p-4 shadow-md rounded-lg mb-4">
              {searchType === "freelancers" ? (
                <>
                  <h3 className="text-xl font-semibold">{result.name}</h3>
                  <p className="text-gray-600">{result.profile.skills.join(", ")}</p>
                  <p className="text-gray-600">{result.profile.location}</p>
                  <Link
                    to={`/freelancer/${result._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View Profile
                  </Link>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold">{result.title}</h3>
                  <p className="text-gray-600">{result.description}</p>
                  <p className="text-gray-600">Budget: ${result.budget}</p>
                </>
              )}
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;