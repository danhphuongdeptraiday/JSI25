// function hello() {
//   console.log("Hello");
// }

const hello = (x, y, z) => "Return " + x + " " + y + " " + z;

// function hello(x) {
//     return "Return "+ x
// }

// hello() <=> gia tri o return
let container = document.querySelector(".container");
console.log(hello("Ha", "Bi", "Ham"));

let input = document.querySelector("input");
let check_btn = document.getElementById("check_btn");

check_btn.addEventListener("click", () => {
  let list_box = document.getElementsByClassName("box");
  console.log(list_box);

  if (input.value == "1") {
    list_box[0].style.borderColor = "red";
  }

  if (input.value == "2") {
    list_box[1].style.borderColor = "red";
  }
});

fetch("https://jsonplaceholder.typicode.com/photos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let s = "";
    for (let i = 0; i < 5; i++) {
      s += `<div class="box">
             <img src='${data[i].thumbnailUrl}' alt="" />
             <h1>${data[i].title.substring(0, 5)}</h1>
            </div>`;
    }
    container.innerHTML = s;
  });

// container.innerHTML = "<h1>Nguyeenx Dnah Phuong</h1>";



