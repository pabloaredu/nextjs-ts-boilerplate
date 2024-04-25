import { useState, useEffect } from "react";
import type { Quote } from "../types";

function useSearchQuote() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Quote[]>([]);

  useEffect(() => {
    // Check that it is executing on the client side (nextjs runs on both server and client) to safely use local storage and avoid any errors.
    const storedSearchTerm =
      typeof window !== "undefined" ? localStorage.getItem("searchTerm") : "";
    if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
    }

    const storedResults =
      typeof window !== "undefined"
        ? localStorage.getItem("searchResults")
        : "";
    if (storedResults) {
      setSearchResults(JSON.parse(storedResults));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("searchTerm", searchTerm);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("searchResults", JSON.stringify(searchResults));
    }
  }, [searchResults]);

  const handleSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }
    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(searchTerm)}`
      );
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      } else {
        console.error("Error fetching search results:", response.status);
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    if (!newSearchTerm.trim()) {
      setSearchResults([]);
    } else {
      handleSearch(newSearchTerm);
    }
  };

  return {
    searchTerm,
    searchResults,
    handleChange,
  };
}

export default useSearchQuote;
