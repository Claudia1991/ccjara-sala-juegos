import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})

export class LogServiceService {

  public  firebaseConfig = {
    apiKey: "AIzaSyBbgfi6gSLkjpOHj9MOxlBbq8JLPBXxPVA",
    authDomain: "ccjara-lab-iv.firebaseapp.com",
    databaseURL: "https://ccjara-lab-iv-default-rtdb.firebaseio.com",
    projectId: "ccjara-lab-iv",
    storageBucket: "ccjara-lab-iv.appspot.com",
    messagingSenderId: "542848571081",
    appId: "1:542848571081:web:4b370f884c91f35cfc1f18"
  };

  public app = initializeApp(this.firebaseConfig);
  public database = getFirestore();

  constructor() { }

  async RegistrarIngresoUsuario(emailUsuario: any, fechaIngreso: any): Promise<string>{
    let docRef = null;
    try {
      docRef = await addDoc(collection(this.database, "log-ingreso-usuarios"), {
        emailUsuario: emailUsuario,
        fechaIngreso: fechaIngreso
      });
      console.log("Document written with ID: ", docRef.id);
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }finally{
      return docRef ? docRef.id : '';
    }
  }
}
