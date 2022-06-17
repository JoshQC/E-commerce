import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  Firestore,
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const provider = new GoogleAuthProvider();
const providerTwitter = new TwitterAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

// api key twitter: hI4Ta9FwKuTYd5B6Mt3wJQgpJ
// api key secret: HqzNtQYcjsbf4rLy6UD3K0srVVUeDQS9gk405dAzyxEsAWHR1L
// Bearer Token: AAAAAAAAAAAAAAAAAAAAAKchdAEAAAAAGPCAIhZ%2FHLIjI%2BswpAT3X8vFdAs%3DLqKyQmCV5uMoz86qQobDjwZk0BTGuGnkCRXIXJFjBZhgvnYtMn

const firebaseConfig = {
  apiKey: "AIzaSyBWx2YYtZcKTDGXWbxR6CHUba-fqZB484c",
  authDomain: "e-commerce-prueba-d35f2.firebaseapp.com",
  projectId: "e-commerce-prueba-d35f2",
  storageBucket: "e-commerce-prueba-d35f2.appspot.com",
  messagingSenderId: "565738259723",
  appId: "1:565738259723:web:100b0dbc71f23124964e0e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const signInWithTwitterPopup = () => {
  return signInWithPopup(auth, providerTwitter);
};

const db = getFirestore();

export const crearDocumentoUsuarios = async (usuario, infAdicional) => {
  if (!usuario) return;

  const usuarioDocRef = doc(db, "usuarios", usuario.uid);
  const usuarioSnapshot = await getDoc(usuarioDocRef);

  if (!usuarioSnapshot.exists()) {
    const { displayName: nombre, email } = usuario;
    const fechaCreacion = new Date();

    try {
      setDoc(usuarioDocRef, {
        nombre,
        email,
        fechaCreacion,
        ...infAdicional,
      });
    } catch (err) {
      console.err(err);
    }
    return usuarioDocRef;
  }
};

export const createUserWithEmailPasswordForFirestore = async (
  email,
  password
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmailPasswordForFirestore = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUsuario = async () => await signOut(auth);

export const onAuthStateChangedListener = async (callback) =>
  await onAuthStateChanged(auth, callback);
