import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styles from "./page.module.css";
import Sidebar from "../components/Sidebar";
import BasicCard from "@/components/Card";

type Quote = {
  id: number;
  text: string;
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Quote[]>([]);

  const handleSearch = async (searchTerm: string) => {
    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(searchTerm)}`
      );
      if (response.ok) {
        const data = await response.json();
        const regex = new RegExp(searchTerm, "ig");
        const results = data.filter((q: Quote) => {
          const matches = q.text.match(regex);
          return matches !== null;
        });
        setSearchResults(results);
      } else {
        console.error("Error fetching search results:", response.status);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    if (searchTerm === "") {
      setSearchResults([]);
    } else {
      await handleSearch(searchTerm);
    }
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <Typography variant="body1" className={styles.paragraph}>
          Enter keywords related to topics, or specific phrases to discover
          relevant quotes.
        </Typography>
        <TextField
          id="standard-basic"
          label="Search"
          variant="filled"
          className={styles.textField}
          value={searchTerm}
          onChange={handleChange}
        />

        {searchResults.length > 0 && (
          <div className={styles.searchResults}>
            <div className={styles.cardContainer}>
              {searchResults.map((quote) => (
                <BasicCard
                  key={quote.id}
                  text={quote.text}
                  showGoToButton={false}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
