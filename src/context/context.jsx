import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

import globalAuth from '../Firebase/firebase.config.js';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUserEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(globalAuth, email, password);
  };

  const loginEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(globalAuth, email, password);
  };

  const loginGoogle = () => {
    setLoading(true);
    return signInWithPopup(globalAuth, googleProvider);
  };

  const showProfile = (displayName, photoURL) => {
    setLoading(true);

    return updateProfile(globalAuth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  const logout = () => {
    return signOut(globalAuth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(globalAuth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const info = {
    createUserEmailPassword,
    loginEmailPassword,
    logout,
    user,
    loginGoogle,
    showProfile,
    loading,
  };

  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
