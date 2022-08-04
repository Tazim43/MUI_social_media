import {
   Avatar,
   Box,
   Button,
   ButtonGroup,
   Fab,
   Modal,
   Stack,
   styled,
   TextField,
   Tooltip,
   Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
   Add as AddIcon,
   EmojiEmotions,
   Image,
   Videocam,
   PersonAdd,
   DateRange,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
});

const UserBox = styled(Box)({
   display: "flex",
   alignItems: "center",
   gap: "20px",
   marginBottom: "20px",
});

export default function Add() {
   const [open, setOpen] = useState(false);

   return (
      <>
         <Tooltip
            onClick={() => setOpen(true)}
            title="Add Post"
            sx={{
               position: "fixed",
               bottom: 20,
               left: {
                  xs: "47%",
                  sm: 30,
               },
            }}
         >
            <Fab color="primary" aria-label="add">
               <AddIcon />
            </Fab>
         </Tooltip>

         <StyledModal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box
               width={400}
               // height={280}
               padding={3}
               borderRadius={5}
               backgroundColor="background.default"
               color="text.primary"
            >
               <Typography variant="h6" color="gray" textAlign="center">
                  Create Post
               </Typography>
               <UserBox>
                  <Avatar
                     alt="Cindy Baker"
                     src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2017/11/17/639329-indian-men.jpg"
                  />
                  <Typography variant="span" fontWeight={500}>
                     John Smith
                  </Typography>
               </UserBox>
               <TextField
                  id="standard-multiline-static"
                  multiline
                  rows={3}
                  placeholder="Write something.."
                  variant="standard"
                  fullWidth
               />
               <Stack direction="row" gap={1} mt={2}>
                  <EmojiEmotions color="primary" />
                  <Image color="secondary" />
                  <Videocam color="success" />
                  <PersonAdd color="error" />
               </Stack>
               <ButtonGroup
                  fullWidth
                  variant="contained"
                  aria-label="outlined primary button group"
                  sx={{ marginTop: 3 }}
               >
                  <Button>Post</Button>
                  <Button sx={{ width: "100px" }}>
                     <DateRange />
                  </Button>
               </ButtonGroup>
            </Box>
         </StyledModal>
      </>
   );
}
