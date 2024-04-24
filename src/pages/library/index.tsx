import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import styles from "../page.module.css";
import BasicCard from "@/components/Card";

type Quote = {
  id: number;
  text: string;
};

const Library = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    // Todo pa: add a loading state
    const fetchQuotes = async () => {
      try {
        const response = await fetch("/api/quotes");
        if (!response.ok) {
          throw new Error("Failed to fetch quotes");
        }
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <h2>Library</h2>
        <div className={styles.cardContainer}>
          {quotes.map((quote) => (
            <BasicCard
              key={quote.id}
              text={quote.text}
              showGoToButton={false}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Library;
