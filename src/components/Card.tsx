import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../pages/page.module.css";

interface Props {
  text: string;
  showSaveButton?: boolean;
}

export default function BasicCard({ text, showSaveButton = true }: Props) {
  return (
    <Card className={styles.card} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Quote
        </Typography>

        <Typography variant="body2">{text}</Typography>
      </CardContent>
      <CardActions className={styles.cardActions}>
        {showSaveButton && (
          <Button size="small" className={styles.leftButton}>
            Save quote
          </Button>
        )}
        <Button size="small" className={styles.rightButton}>
          Go to quote
        </Button>
      </CardActions>
    </Card>
  );
}
