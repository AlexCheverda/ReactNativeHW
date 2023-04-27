import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const fireConfig = {};

const dataBase = initializeApp(fireConfig);
const auth = getAuth(dataBase);

export { auth };