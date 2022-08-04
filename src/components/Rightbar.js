import {
   Avatar,
   AvatarGroup,
   Box,
   Divider,
   ImageList,
   ImageListItem,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
   Typography,
} from "@mui/material";
import React from "react";

export default function Rightbar() {
   return (
      <Box
         sx={{
            display: {
               xs: "none",
               sm: "block",
            },
         }}
         flex={2}
         p={2}
      >
         <Box position="" width={300}>
            <Typography variant="h6" fontWeight={200}>
               Online Friends
            </Typography>
            <AvatarGroup max={6}>
               <Avatar
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               />
               <Avatar
                  alt="Travis Howard"
                  src="https://media.istockphoto.com/photos/indian-man-headshot-picture-id1138008134?k=20&m=1138008134&s=170667a&w=0&h=sjL29jSAK9HW7kcKsiWqU3kRHxWuXoMzPIY5Zl2bSG0="
               />
               <Avatar
                  alt="Cindy Baker"
                  src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2017/11/17/639329-indian-men.jpg"
               />
               <Avatar
                  alt="Agnes Walker"
                  src="https://i.pinimg.com/236x/66/69/ee/6669ee9060c32ec09a76a1a2f8534c14.jpg"
               />
               <Avatar
                  alt="Trevor Henderson"
                  src="https://www.kindpng.com/picc/m/187-1874123_best-pictures-for-profile-hd-png-download.png"
               />
               <Avatar
                  alt="Trevor Henderson"
                  src="https://www.kindpng.com/picc/m/187-1874123_best-pictures-for-profile-hd-png-download.png"
               />
               <Avatar
                  alt="Trevor Henderson"
                  src="https://www.kindpng.com/picc/m/187-1874123_best-pictures-for-profile-hd-png-download.png"
               />
            </AvatarGroup>
            <Typography variant="h6" fontWeight={200} marginTop={5}>
               Latest Photos
            </Typography>

            <ImageList cols={3}>
               <ImageListItem>
                  <img src="https://picsum.photos/500" alt="img" />
               </ImageListItem>

               <ImageListItem>
                  <img src="https://picsum.photos/600" alt="img" />
               </ImageListItem>

               <ImageListItem>
                  <img src="https://picsum.photos/400" alt="img" />
               </ImageListItem>

               <ImageListItem>
                  <img src="https://picsum.photos/700" alt="img" />
               </ImageListItem>

               <ImageListItem>
                  <img src="https://picsum.photos/501" alt="img" />
               </ImageListItem>
            </ImageList>

            <Typography variant="h6" fontWeight={200} marginTop={5}>
               Latest Conversations
            </Typography>

            <List
               sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
               }}
            >
               <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                     <Avatar
                        alt="Remy Sharp"
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                     />
                  </ListItemAvatar>
                  <ListItemText
                     primary="Brunch this weekend?"
                     secondary={
                        <React.Fragment>
                           <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                           >
                              Ali Connors
                           </Typography>
                           {
                              " — I'll be in your neighborhood doing errands this…"
                           }
                        </React.Fragment>
                     }
                  />
               </ListItem>
               <Divider variant="inset" component="li" />
               <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                     <Avatar
                        alt="Travis Howard"
                        src="https://media.istockphoto.com/photos/indian-man-headshot-picture-id1138008134?k=20&m=1138008134&s=170667a&w=0&h=sjL29jSAK9HW7kcKsiWqU3kRHxWuXoMzPIY5Zl2bSG0="
                     />
                  </ListItemAvatar>
                  <ListItemText
                     primary="Summer BBQ"
                     secondary={
                        <React.Fragment>
                           <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                           >
                              to Scott, Alex, Jennifer
                           </Typography>
                           {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                     }
                  />
               </ListItem>
               <Divider variant="inset" component="li" />
               <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                     <Avatar
                        alt="Cindy Baker"
                        src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2017/11/17/639329-indian-men.jpg"
                     />
                  </ListItemAvatar>
                  <ListItemText
                     primary="Oui Oui"
                     secondary={
                        <React.Fragment>
                           <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                           >
                              Sandra Adams
                           </Typography>
                           {
                              " — Do you have Paris recommendations? Have you ever…"
                           }
                        </React.Fragment>
                     }
                  />
               </ListItem>
            </List>
         </Box>
      </Box>
   );
}
