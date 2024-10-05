// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { auth, googleProvider, githubProvider, facebookProvider } from '../firebase'; // Make sure to import the providers
import { onAuthStateChanged, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const login = async (provider, email, password) => {
    try {
      if (email && password) {
        // Sign in with email and password
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Logged in with Email and Password');
      } else {
        // Sign in with provider
        let selectedProvider;
        if (provider === 'google') {
          selectedProvider = googleProvider;
        } else if (provider === 'github') {
          selectedProvider = githubProvider;
        } else if (provider === 'facebook') {
          selectedProvider = facebookProvider;
        }
  
        if (selectedProvider) {
          await signInWithPopup(auth, selectedProvider);
          console.log(`Logged in with ${provider} provider`);
        } else {
          console.error('No provider or email/password provided');
        }
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  }

  const authInfo = {
    signup,
    user, 
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};
