import React, { useState } from "react";
import { TextField, Button, Grid } from '@mui/material'
// import './contact.css'




function Contact() {
  return (
    <form
      // onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Your Name"
          // value={name}
          // onChange={(event) => setName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Your Email"
          // value={email}
          // onChange={(event) => event.target.value}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Message"
            multiline
            rows={4}
          // value={message}
          // onChange={(event) => event.target.value}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Contact;
