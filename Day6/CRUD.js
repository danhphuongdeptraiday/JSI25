// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

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

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCqXvhHpdWxJnkZJqUjOpnGwrHjP5p_OU",
  authDomain: "jsi25-6b91d.firebaseapp.com",
  projectId: "jsi25-6b91d",
  storageBucket: "jsi25-6b91d.appspot.com",
  messagingSenderId: "41996956704",
  appId: "1:41996956704:web:6ca0e07568e07e47693845",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

let userUID_login = document.getElementById("user_uid");
let user_age_input = document.getElementById("user_age");
let user_favor_input = document.getElementById("user_favor");
let add_user_btn = document.getElementById("create_user");
let read_data = document.getElementById("read_data");
let update_btn = document.getElementById("update");
let delete_btn = document.getElementById("delete");

///////////////////////////////////////////// Create
add_user_btn.addEventListener("click", function () {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${userUID_login.value}`)).then((snapshot) => {
    // nếu tên người dùng bạn nhập trùng với tên có rồi trong firebase thì snap.exists() == true
    // => Lúc này mình thể add 1 user có tên như vậy nữa
    // nếu tên người dùng bạn nhập trùng ko với tên có rồi trong firebase thì snap.exists() == false
    // => Cho phép user đó đc add vào trong firebase
    if (snapshot.exists() == false) {
      set(ref(database, "users/" + userUID_login.value), {
        userage: user_age_input.value,
      });

      alert("Tạo tài khoản thành công");
    } else {
      alert("Tên này đã được sử dụng, vui lòng nhập tên khác");
    }
  });
});

///////////////////////////////////////////////////// Read
read_data.addEventListener("click", function () {
  onValue(ref(database, `users`), (snap) => {
    let data = snap.val();
    console.log(data);
  });
});

/////////////////////////////////////////////////// Update
update_btn.addEventListener("click", function () {
  //   if (imageURL != false) {
  update(ref(database, "users/" + userUID_login.value), {
    user_score: user_favor_input.value,
    //   user_avatar: imageURL,
  });
  //   } else {
  //     alert("Lỗi link ảnh");
  //   }
});

/////////////////////////////////////////////////////// Delete
delete_btn.addEventListener("click", function () {
  remove(ref(database, "users/" + userUID_login.value));
});
