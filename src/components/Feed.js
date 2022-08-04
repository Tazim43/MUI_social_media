import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

export default function Feed() {
   return (
      <Box flex={4} p={2}>
         <Post
            title="John Smith"
            date="September 14, 2016"
            img="https://picsum.photos/600"
            content={`This impressive paella is a perfect party dish and a fun meal to
               cook together with your guests. Add 1 cup of frozen peas along
               with the mussels, if you like.`}
         />
         <Post
            title="John Smith"
            date="September 14, 2016"
            img="https://picsum.photos/500"
            content={`This impressive paella is a perfect party dish and a fun meal to
               cook together with your guests. Add 1 cup of frozen peas along
               with the mussels, if you like.`}
         />
         <Post
            title="John Smith"
            date="September 14, 2016"
            img="https://picsum.photos/602"
            content={`This impressive paella is a perfect party dish and a fun meal to
               cook together with your guests. Add 1 cup of frozen peas along
               with the mussels, if you like.`}
         />
         <Post
            title="John Smith"
            date="September 14, 2016"
            img="https://picsum.photos/603"
            content={`This impressive paella is a perfect party dish and a fun meal to
               cook together with your guests. Add 1 cup of frozen peas along
               with the mussels, if you like.`}
         />
      </Box>
   );
}
