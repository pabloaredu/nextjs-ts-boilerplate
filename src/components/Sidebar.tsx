import React from "react";
import { useRouter } from "next/router";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";
import styles from "../pages/page.module.css";
import { Url } from "next/dist/shared/lib/router/router";

const drawerWidth = 240;

export default function Sidebar() {
  const router = useRouter();

  const handleNavigation = (url: Url) => {
    router.push(url);
  };

  const isActive = (path: string) => router.pathname === path;

  const menuItems = ["/", "/bookmarks", "/library"];

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
            backgroundColor: "#FAFAFA",
          },
        }}
        open
      >
        <List>
          {menuItems.map((path) => (
            <ListItem key={path} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(path)}
                className={isActive(path) ? styles.activeLink : styles.link}
              >
                <ListItemText
                  primary={
                    path === "/"
                      ? "Home"
                      : path.slice(1).charAt(0).toUpperCase() + path.slice(2)
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
