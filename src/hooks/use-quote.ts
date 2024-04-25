import { useState, useEffect } from "react";
import type { Quote } from "../types";

export default function useQuote() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("/api/quotes");
        if (!response.ok) {
          throw new Error("Failed to fetch quotes");
        }
        const data = await response.json();
        setQuotes(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchQuotes();
  }, []);

  const handleSaveQuote = async (quote: Quote) => {
    try {
      const response = await fetch("/api/save-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quote),
      });
      if (!response.ok) {
        throw new Error("Failed to save quote");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return {
    quotes,
    handleSaveQuote,
    error,
  };
}
