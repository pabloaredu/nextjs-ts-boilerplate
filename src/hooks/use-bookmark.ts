import { useEffect, useState } from "react";
import type { Quote } from "../types";

export default function useBookmark() {
  const [bookmarks, setBookmarks] = useState<Quote[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await fetch("/api/bookmarks");
        if (!response.ok) {
          throw new Error("Failed to fetch quotes");
        }
        const data = await response.json();
        setBookmarks(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchBookmarks();
  }, []);

  return {
    bookmarks,
    error,
  };
}
