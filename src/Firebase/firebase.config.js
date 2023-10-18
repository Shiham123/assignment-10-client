import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA4x8T1Q5_eou2CYEc92ZoUDwmD7ptsHvY',
  authDomain: 'tech-project-4435d.firebaseapp.com',
  projectId: 'tech-project-4435d',
  storageBucket: 'tech-project-4435d.appspot.com',
  messagingSenderId: '553037094384',
  appId: '1:553037094384:web:1ba9507c38834e4f50d135',
};

const app = initializeApp(firebaseConfig);
const globalAuth = getAuth(app);
export default globalAuth;
