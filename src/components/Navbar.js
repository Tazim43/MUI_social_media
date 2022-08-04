import {
   AppBar,
   Avatar,
   Badge,
   Box,
   InputBase,
   Menu,
   MenuItem,
   styled,
   Toolbar,
   Typography,
} from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
   display: "flex",
   justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
   backgroundColor: "white",
   padding: "0 10px",
   borderRadius: theme.shape.borderRadius,
   width: "40%",
}));

const Icons = styled(Box)((theme) => ({
   display: "none",
   gap: "20px",
   alignItems: "center",
}));

const UserBox = styled(Box)(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   gap: "10px",
}));

export default function Navbar() {
   const [open, setOpen] = useState(false);
   return (
      <AppBar position="sticky">
         <StyledToolbar>
            <Typography
               variant="h6"
               sx={{
                  display: {
                     xs: "none",
                     sm: "block",
                  },
               }}
            >
               MyZone
            </Typography>
            <ConnectWithoutContactIcon
               sx={{
                  display: {
                     xs: "block",
                     sm: "none",
                  },
               }}
            />

            <Search>
               <InputBase placeholder="search..." sx={{ width: "100%" }} />
            </Search>
            <Icons
               sx={{
                  display: {
                     xs: "none",
                     sm: "flex",
                  },
               }}
               onClick={() => setOpen((old) => (old ? false : true))}
            >
               <Badge badgeContent={10} color="secondary">
                  <Mail />
               </Badge>
               <Badge badgeContent={100} color="secondary">
                  <Notifications />
               </Badge>

               <Avatar
                  alt="Andy sharp"
                  src="https://www.whatsappimages.in/wp-content/uploads/2020/12/Stylish-Boy-Whatsapp-Dp-15.jpg"
                  sx={{
                     width: 30,
                     height: 30,
                  }}
               />
            </Icons>
            <UserBox
               sx={{
                  display: {
                     xs: "flex",
                     sm: "none",
                  },
               }}
               onClick={() => setOpen((old) => (old ? false : true))}
            >
               <Avatar
                  alt="Andy sharp"
                  src="https://www.whatsappimages.in/wp-content/uploads/2020/12/Stylish-Boy-Whatsapp-Dp-15.jpg"
                  sx={{
                     width: 30,
                     height: 30,
                  }}
               />
               <Typography variant="p">Tazim</Typography>
               <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  open={open}
                  anchorOrigin={{
                     vertical: "top",
                     horizontal: "right",
                  }}
                  transformOrigin={{
                     vertical: "top",
                     horizontal: "left",
                  }}
               >
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>My account</MenuItem>
                  <MenuItem>Logout</MenuItem>
               </Menu>
            </UserBox>
         </StyledToolbar>
      </AppBar>
   );
}
