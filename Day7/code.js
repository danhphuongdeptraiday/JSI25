// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {
  get,
  getDatabase,
  set,
  ref,
  onValue,
  update,
  remove,
  push,
  child,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCqXvhHpdWxJnkZJqUjOpnGwrHjP5p_OU",
  authDomain: "jsi25-6b91d.firebaseapp.com",
  databaseURL: "https://jsi25-6b91d-default-rtdb.firebaseio.com",
  projectId: "jsi25-6b91d",
  storageBucket: "jsi25-6b91d.appspot.com",
  messagingSenderId: "41996956704",
  appId: "1:41996956704:web:6ca0e07568e07e47693845",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);
const database = getDatabase(app);
const auth = getAuth();

// Dùng DOM
let username_register = document.querySelector("#fullName");
let password_register = document.querySelector("#eMail");
let website_register = document.querySelector("#website");
let phone_register = document.querySelector("#phone");
let street_register = document.querySelector("#Street");
let city_register = document.querySelector("#ciTy");
let state_register = document.querySelector("#sTate");
let zip_register = document.querySelector("#zIp");
let register_btn = document.querySelector("#submit");

let user_name = document.querySelector(".user-name");
let user_email = document.querySelector(".user-email");
// LocalStorage
user_email.innerHTML = localStorage.getItem("username_login");

// event thay đổi username
let s = "";
username_register.addEventListener("keyup", function (event) {
  var isWordCharacter = event.key.length === 1;
  console.log(event.keyCode);

  console.log(event.key.match(/[a-z]/i));
  if ((isWordCharacter && event.key.match(/[a-z]/i)) || event.keyCode === 32) {
    // console.log(event.key);
    // console.log("Phím chữ cái");
    s = s + event.key;
    console.log(s);
    user_name.innerText = s;
  } else {
    // console.log(event.key);
    // console.log("phím ko phải chữ cái");
  }
});

// events create
register_btn.addEventListener("click", function () {
  let username = username_register.value;
  let password = password_register.value;
  let website = website_register.value;
  let phone = phone_register.value;
  let street = street_register.value;
  let city = city_register.value;
  let state = state_register.value;
  let zip = zip_register.value;

  if (
    password == "" ||
    website == "" ||
    phone == "" ||
    street == "" ||
    city == "" ||
    state == "" ||
    zip == ""
  ) {
    alert("Bạn đang thiếu 1 vài giá trị input");
  } else {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${username}`)).then((snapshot) => {
      if (snapshot.exists() == false) {
        set(ref(database, "users/" + username), {
          username: username,
          password: password,
          website: website,
          phone: phone,
          street: street,
          city: city,
          state: state,
          zip: zip,
        });

        alert("Tạo tài khoản thành công");
      } else {
        alert("Tên này đã được sử dụng, vui lòng nhập tên khác");
      }
    });
  }
});
