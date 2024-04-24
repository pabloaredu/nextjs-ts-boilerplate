import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styles from "./page.module.css";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <TextField
          id="standard-basic"
          label="Search"
          variant="filled"
          className={styles.textField}
        />
        <Typography variant="body1" className={styles.paragraph}>
          Enter keywords related to topics, or specific phrases to discover
          relevant quotes.
        </Typography>
      </main>
    </div>
  );
}
