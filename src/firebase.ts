// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase 설정 정보
const firebaseConfig = {
  apiKey: "dummy-key",
  authDomain: "dummy-app.firebaseapp.com",
  databaseURL: "https://dummy-app.firebaseio.com",
  projectId: "dummy-app",
  storageBucket: "dummy-app.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000000000",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
