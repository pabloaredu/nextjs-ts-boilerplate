import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { Box } from "@mui/material";
import styles from "../pages/page.module.css";

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Box component="nav">
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open
      >
        <List>
          <Link href="/" passHref>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Home" className={styles.link} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/bookmarks" passHref>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Bookmarks" className={styles.link} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/library" passHref>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Library" className={styles.link} />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
}
