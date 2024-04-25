import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useState } from "react";
import styles from "../pages/page.module.css";
import type { Quote } from "../types";

interface Props {
  quote: Quote;
  showSaveButton?: boolean;
  showGoToButton?: boolean;
  onSave?: (quote: Quote) => Promise<void>;
}

export default function BasicCard({
  quote,
  showSaveButton = true,
  showGoToButton = true,
  onSave,
}: Props) {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSaveQuote = async () => {
    if (onSave && quote) {
      await onSave(quote);
      setOpenSnackbar(true);
    }
  };

  return (
    <Card className={styles.card} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Quote
        </Typography>

        <Typography variant="body2">{quote.text}</Typography>
      </CardContent>
      <CardActions className={styles.cardActions}>
        {showSaveButton && (
          <Button
            size="small"
            className={styles.leftButton}
            onClick={handleSaveQuote}
          >
            Save quote
          </Button>
        )}
        {showGoToButton && (
          <Link href={`/quotes/${quote.id}`} passHref>
            <Button size="small" className={styles.rightButton}>
              Go to quote
            </Button>
          </Link>
        )}
      </CardActions>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Quote saved successfully!
        </Alert>
      </Snackbar>
    </Card>
  );
}
