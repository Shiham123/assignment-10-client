import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import globalAuth from '../Firebase/firebase.config.js';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);

  const createUserEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(globalAuth, email, password);
  };

  const loginEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(globalAuth, email, password);
  };

  const loginGoogle = () => {
    return signInWithPopup(globalAuth, googleProvider);
  };

  const logout = () => {
    return signOut(globalAuth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(globalAuth, (currentUser) => {
      setUser(currentUser);
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
  };

  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
