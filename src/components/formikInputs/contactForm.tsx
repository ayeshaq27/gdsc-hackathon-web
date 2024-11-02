import React, { useState, useEffect } from 'react';
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { database, auth } from './firebaseConfig';
import { ref, set } from "firebase/database";
import { onAuthStateChanged, User } from "firebase/auth";
import Login from './Login'; // Import the Login component

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('yes');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [openLogin, setOpenLogin] = useState(false); // State to manage the login modal

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setOpenLogin(false); // Close login modal if user is authenticated
      }
    });
    return unsubscribe;
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!user) {
      setOpenLogin(true); // Open login modal if user is not authenticated
      return;
    }

    setIsSubmitting(true);
    const formData = {
      name,
      email,
      contact,
      submittedAt: new Date().toISOString(),
      userId: user.uid,
    };

    try {
      await set(ref(database, `contacts/${Date.now()}`), formData);
      alert('Form submitted successfully!');
      setName('');
      setEmail('');
      setContact('yes');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseLogin = () => {
    setOpenLogin(false); // Function to close the login modal
  };

  return (
    <Container sx={{ marginTop: '5vh', padding: '5vw', borderRadius: '30px', backgroundColor: '#f5f5dc' }}>
      <Typography variant="h2" color="secondary.contrastText" sx={{ marginBottom: '2vh' }}>
        Interest Form
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ 
            backgroundColor: '#fff', 
            borderRadius: '30px', 
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
            }
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ 
            backgroundColor: '#fff', 
            borderRadius: '30px', 
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
            }
          }}
        />
        <FormControl component="fieldset" sx={{ display: 'flex', alignItems: 'center', marginTop: '5vh' }}>
          <FormLabel component="legend" sx={{ color: '#333' }}>I agree to be contacted when the official SolutionHacks application has opened.</FormLabel>
          <RadioGroup row aria-label="contact" name="contact" value={contact} onChange={(e) => setContact(e.target.value)}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            {/* <FormControlLabel value="no" control={<Radio />} label="No" /> */}
          </RadioGroup>
        </FormControl>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: '1vh' }}>
          This form is not an application for SolutionHacks; it is an initial form to help us gauge interest. We will contact you again when applications have officially opened.
        </Typography>
        <Button 
          type="submit" 
          variant="contained" 
          color="success" 
          sx={{ borderRadius: '40px', color: "#fff" }} 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </Box>

      {/* Login Popup */}
      <Dialog open={openLogin} onClose={handleCloseLogin}>
        <DialogTitle>Login to Submit the Form</DialogTitle>
        <DialogContent>
          <Login /> {/* Display the Login component in the popup */}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ContactForm;
