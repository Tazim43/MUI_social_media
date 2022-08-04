import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
   Avatar,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   CardMedia,
   Checkbox,
   IconButton,
   Typography,
} from "@mui/material";
import React from "react";

export default function Post({ title, date, img, content }) {
   return (
      <Card sx={{ margin: "0 0 10px 0" }}>
         <CardHeader
            avatar={
               <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  J
               </Avatar>
            }
            action={
               <IconButton aria-label="settings">
                  <MoreVert />
               </IconButton>
            }
            title={title}
            subheader={date}
         />
         <CardMedia
            component="img"
            height="20%"
            image={img}
            alt="Paella dish"
         />
         <CardContent>
            <Typography variant="body2" color="text.secondary">
               {content}
            </Typography>
         </CardContent>
         <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
               <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "#e91e63" }} />}
               />
            </IconButton>
            <IconButton aria-label="share">
               <Share />
            </IconButton>
         </CardActions>
      </Card>
   );
}
