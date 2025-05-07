const userInput = document.querySelector("#yourIdea");
const clearData = document.querySelector("#clearData");
const addData = document.querySelector("#addData");
const outPut = document.querySelector(".output");

clearData.addEventListener("click", function(e) {
    outPut.innerHTML = "";
});

addData.addEventListener('click', function(e){
  e.preventDefault();
  const vikas = userInput.value;
  userInput.value = "";
//   const hello = vikas.split(/ /);
  const hello = vikas.split(/-/);
  console.log(hello)
  if(hello.length !== 2){
    alert("No bro Enter two input with ' - ' sign")
    return ;
  }

  const parentDiv = document.createElement("div");
  parentDiv.className = "userData";
  const childDiv = document.createElement("div");
  childDiv.className = "showData";
  const table = document.createElement("table");
  parentDiv.appendChild(childDiv);
  childDiv.appendChild(table);
  const tr = document.createElement("tr");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  th1.innerHTML = "name";
  th2.innerHTML = "role";
  const removeBtn = document.createElement("button");
  removeBtn.className = "btn-all"
  removeBtn.innerHTML = "Delete";
  
  removeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    removeBtn.parentElement.remove(parentDiv);
  });

  const editBtn = document.createElement("button");
  editBtn.className = "btn-all"
  editBtn.innerHTML = "edit";

  table.appendChild(tr);
  tr.appendChild(th1);
  tr.appendChild(th2);
  childDiv.appendChild(editBtn);
  childDiv.appendChild(removeBtn);

  const tr2 = document.createElement("tr");
  tr2.className = "tr2";
  const td1 = document.createElement("td");
  td1.innerHTML = hello[0];
  const td2 = document.createElement("td");
  td2.innerHTML = hello[1];

  table.appendChild(tr2);
  tr2.appendChild(td1);
  tr2.appendChild(td2);
  outPut.appendChild(parentDiv);

  editBtn.addEventListener("click", function(e) {
    e.preventDefault()
    userInput.value = `${td1.textContent} - ${td2.textContent}`;
    parentDiv.remove();
    userInput.focus();
});

// Clear input field
// userInput.value = "";

})



// deleteBtn.addEventListener("click", function (e) {
//     inputSlot.innerHTML = "";
// });

// submit.addEventListener("click", function (e) {
//     e.preventDefault();
//     const vikas = userInput.value;
//     displayInput(vikas);
//     edit();
//     cutBtn()
// });

// function displayInput(vikas) {
//     userInput.value = "";
//     inputSlot.innerHTML += `${vikas}`;
//     numIdea++;
// }

// function edit(vikas) {
//     userInput.value = "";
//     p.classList.add("newRemove");
//     p.innerHTML = `<button id="cutBtn" type="submit" onclick="cutBtn()">Delete UserInput<button>`;
//     addBtn.appendChild(p);
// }

// function cutBtn(vikas) {
// const newRemoveBtn = document.querySelector("#cutBtn");
// addBtn.addEventListener("click", function (e) {
//     userInput.value = "";
//     // addBtn.removeChild()
//     inputSlot.innerHTML = ""
//     cutBtn.remove()
//     });
// }
