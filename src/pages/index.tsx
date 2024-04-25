import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useSearchQuote from "../hooks/use-search-quote";
import Sidebar from "../components/Sidebar";
import BasicCard from "@/components/Card";
import useQuote from "@/hooks/use-quote";
import styles from "./page.module.css";

export default function Home() {
  const { searchTerm, searchResults, handleChange } = useSearchQuote();
  const { handleSaveQuote } = useQuote();

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
                  quote={quote}
                  showGoToButton={true}
                  onSave={() => handleSaveQuote(quote)}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
