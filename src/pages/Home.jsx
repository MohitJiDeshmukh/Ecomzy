import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import ProductCard from "../components/ProductCard";

// Move static data outside the component to prevent recreation on every render
const CATEGORIES = [
  "all",
  "electronics",
  "men's clothing",
  "women's clothing",
  "jewelery",
];
const API_URL = "https://fakestoreapi.com/products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (err) {
      setError(err.message);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  // Handle Logic separately using useMemo for better performance and readability
  const visibleProducts = useMemo(() => {
    return products
      .filter((p) => (category === "all" ? true : p.category === category))
      .filter((p) =>
        searchText.trim() === ""
          ? true
          : p.title.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOrder === "lowToHigh") return a.price - b.price;
        if (sortOrder === "highToLow") return b.price - a.price;
        return 0;
      });
  }, [products, category, searchText, sortOrder]);

  const resetFilters = () => {
    setCategory("all");
    setSortOrder("none");
    setSearchText("");
  };

  if (error) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <p className="text-red-500 font-semibold">{error}</p>
      </div>
    );
  }

  if (loading) return <Spinner />;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {visibleProducts.length === 0 ? (
        <div className="flex flex-col items-center gap-4 mt-16 text-center">
          <p className="text-gray-500 text-lg">No products match your search</p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-md bg-green-600 text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  category === cat
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-2 rounded-md text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            >
              <option value="none">Sort by</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>

            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search products..."
              className="px-4 py-2 rounded-md text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />

            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-md text-sm font-medium bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 hover:bg-red-200 transition"
            >
              Clear Filters
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
