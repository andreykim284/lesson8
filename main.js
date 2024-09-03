const body = document.body;
const q = document.querySelector(".q");
const w = document.querySelector(".w");
const e = document.querySelector(".e");
const r = document.querySelector(".r");
const t = document.querySelector(".t");
const itemClass = document.querySelector(".first__color");

q.addEventListener("click", () => {
  body.style.background = "red";
});

w.addEventListener("click", () => {
  body.style.background = "yellow";
});

e.addEventListener("click", () => {
  body.style.background = "skyblue";
});

r.addEventListener("click", () => {
  body.style.background = "black";
});

t.addEventListener("click", () => {
  body.style.background = "white";
});

const item = document.querySelectorAll(".item-brik");
const items = document.querySelectorAll(".second__color");

items.forEach((item) => {
  const attr = item.getAttribute("color");
  item.addEventListener("click", () => {
    changeColor(attr);
  });
});

function changeColor(attr) {
  item.forEach((key) => {
    key.style.background = attr;
  });
}
