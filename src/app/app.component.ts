import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase,ref, child, get,set } from "firebase/database";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbgfi6gSLkjpOHj9MOxlBbq8JLPBXxPVA",
  authDomain: "ccjara-lab-iv.firebaseapp.com",
  databaseURL: "https://ccjara-lab-iv-default-rtdb.firebaseio.com",
  projectId: "ccjara-lab-iv",
  storageBucket: "ccjara-lab-iv.appspot.com",
  messagingSenderId: "542848571081",
  appId: "1:542848571081:web:4b370f884c91f35cfc1f18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ccjara-sala-juegos';
  /**
   *
   */
  constructor() {
    //TODO: OPERACIONES
    //https://firebase.google.com/docs/database/web/read-and-write?hl=es-419#web-v9_3
    const dbRef = ref(getDatabase());
    get(child(dbRef, `usuarios/`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    // set(ref(database, 'usuarios/' + 1), {
    //   username: 'prueba',
    //   email: 'prueba'
    // });
  }

  
}


// function writeNewPost(uid, username, picture, title, body) {
//   const db = getDatabase();

//   // A post entry.
//   const postData = {
//     author: username,
//     uid: uid,
//     body: body,
//     title: title,
//     starCount: 0,
//     authorPic: picture
//   };

//   // Get a key for a new Post.
//   const newPostKey = push(child(ref(db), 'posts')).key;

//   // Write the new post's data simultaneously in the posts list and the user's post list.
//   const updates = {};
//   updates['/posts/' + newPostKey] = postData;
//   updates['/user-posts/' + uid + '/' + newPostKey] = postData;

//   return update(ref(db), updates);
// }