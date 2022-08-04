import {
   Box,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Switch,
} from "@mui/material";
import {
   AccountBox,
   DarkMode,
   Group,
   Home,
   Pages,
   Person,
   Settings,
   Storefront,
} from "@mui/icons-material";
import React from "react";

export default function Sidebar({ setMode }) {
   return (
      <Box
         sx={{
            display: {
               xs: "none",
               sm: "block",
            },
            width: "100%",
         }}
         flex={1}
         p={2}
      >
         <Box position="fixed">
            <List>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#home">
                     <ListItemIcon>
                        <Home />
                     </ListItemIcon>
                     <ListItemText primary="Homepage" />
                  </ListItemButton>
               </ListItem>

               <ListItem disablePadding>
                  <ListItemButton component="a" href="#pages">
                     <ListItemIcon>
                        <Pages />
                     </ListItemIcon>
                     <ListItemText primary="Pages" />
                  </ListItemButton>
               </ListItem>

               <ListItem disablePadding>
                  <ListItemButton component="a" href="#groups">
                     <ListItemIcon>
                        <Group />
                     </ListItemIcon>
                     <ListItemText primary="Groups" />
                  </ListItemButton>
               </ListItem>

               <ListItem disablePadding>
                  <ListItemButton component="a" href="#marketplace">
                     <ListItemIcon>
                        <Storefront />
                     </ListItemIcon>
                     <ListItemText primary="Marketplace" />
                  </ListItemButton>
               </ListItem>

               <ListItem disablePadding>
                  <ListItemButton component="a" href="#friends">
                     <ListItemIcon>
                        <Person />
                     </ListItemIcon>
                     <ListItemText primary="Friends" />
                  </ListItemButton>
               </ListItem>

               <ListItem disablePadding>
                  <ListItemButton component="a" href="setting">
                     <ListItemIcon>
                        <Settings />
                     </ListItemIcon>
                     <ListItemText primary="Setting" />
                  </ListItemButton>
               </ListItem>

               <ListItem disablePadding>
                  <ListItemButton component="a" href="#profile">
                     <ListItemIcon>
                        <AccountBox />
                     </ListItemIcon>
                     <ListItemText primary="Profile" />
                  </ListItemButton>
               </ListItem>

               <ListItem disablePadding>
                  <ListItemButton component="a" href="#home">
                     <ListItemIcon>
                        <DarkMode />
                     </ListItemIcon>
                     <Switch
                        onChange={() =>
                           setMode((old) =>
                              old === "light" ? "dark" : "light"
                           )
                        }
                     />
                  </ListItemButton>
               </ListItem>
            </List>
         </Box>
      </Box>
   );
}
