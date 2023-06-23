import React, { useState } from "react";
import { TextField, Button, Grid } from '@mui/material'
// import './contact.css'




function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Form Submitted')
        console.log('Name: ', name)
        console.log(`Email ${email}`)
        console.log(`Message ${message}`)

        // reset form
        setName('');
        setEmail('');
        setMessage('');
    }


    return (
        <form
            style={{ marginTop: '50px' }}
            onSubmit={handleSubmit}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        label="Your Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        label="Your Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
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

export default ContactForm;
