"use client";
import styles from "./page.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Home() {
  return (
    <main className={styles.main}>
      <TextField id="standard-basic" label="Search" variant="standard" />
      <Button variant="contained">Contained</Button>
    </main>
  );
}
