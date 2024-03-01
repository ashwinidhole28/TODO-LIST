const input = document.getElementById("text1");
const ul = document.getElementById("ul");

const Storage = "listTask";
let arr = getListTask();

function press(event) {
  let space = input.value.trim();
  if (space === "") {
    input.value = "";
    return;
  }

  if (event.keyCode === 13) {
    console.log(event);
    arr.unshift(input.value);
    console.log(arr);
    input.value = "";
    DISPLAY();
  }
}

function DISPLAY() {
  ul.innerHTML = "";
  arr.forEach((Element, index) => {
    // console.log(index+ " " + Element);
    // ashwini
    // ul.append("<h1>hello</h1>")
    let newEL = CREATELIST_ITEM(Element, index);
    ul.append(newEL);
    storememory();
  });
}
function CREATELIST_ITEM(Element, index) {
  const LI = document.createElement("li");
  const span = document.createElement("span");
  LI.innerText = Element;
  span.innerHTML = `&times`;
  LI.append(span);
  span.style.cursor = "pointer";
  span.onclick = remove.bind(null, index);
  return LI;
}
function remove(index) {
  arr.splice(index, 1);
  console.log(arr);
  DISPLAY();
}

function storememory() {
  localStorage.setItem(Storage, arr);
}
function getListTask() {
  const StoreValue = localStorage.getItem(Storage);
  if (StoreValue) {
    return StoreValue.split(",");
  } else {
    return [];
  }
}
DISPLAY();
