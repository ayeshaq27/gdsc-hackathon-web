// Login.tsx

import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login and signup
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Handle user sign-up with email and password
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully! You are now logged in.');
    } catch (error) {
      console.error('Sign up error:', error);
      alert('Failed to create an account. Please check your details.');
    }
  };

  // Handle user login with email and password
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully!');
    } catch (error) {
      console.error('Login error:', error);
      alert('Failed to log in. Please check your credentials.');
    }
  };

  // Handle Google Sign-In with Popup
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Logged in with Google successfully!');
    } catch (error) {
      console.error('Google Sign-In error:', error);
      alert('Failed to log in with Google. Please try again.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', padding: '2rem' }}>
      <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Login'}</Typography>

      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />

      {isSignUp ? (
        <Button variant="contained" color="primary" onClick={handleSignUp} fullWidth>
          Sign Up
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
          Login
        </Button>
      )}

      <Button 
        variant="outlined" 
        onClick={handleGoogleSignIn} 
        fullWidth 
        sx={{ marginTop: '1rem' }}
      >
        Sign In with Google
      </Button>

      <Button
        variant="text"
        onClick={() => setIsSignUp(!isSignUp)}
        fullWidth
      >
        {isSignUp ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
      </Button>
    </Box>
  );
};

export default Login;
