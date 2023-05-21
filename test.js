const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

document.querySelector("#enter").addEventListener("click", () => {
  const item = document.querySelector("#item");
  createItem(item);
})

document.querySelector("#item").addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    const item = document.querySelector("#item");
    createItem(item);
  }
})

function displayDate(){
  let date = new Date();
  date = date.toString().split(" ");
  date = date[1] + " " + date[2] + " " + date[3]; 
  document.querySelector("#date").innerHTML = date; 
}

function activateDeleteListeners(){
  let deleteBtn = document.querySelectorAll(".deleteBtn");
  deleteBtn.forEach((db, i) => {
    db.addEventListener("click", () => { deleteItem(i) });
  })
}

function activateEditListeners(){
  const editBtn = document.querySelectorAll(".editBtn");
  const updateController = document.querySelectorAll(".update-controller");
  const inputs = document.querySelectorAll(".input-controller textarea");
  editBtn.forEach((eb, i) => {
    eb.addEventListener("click", () => { 
      updateController[i].style.display = "block" 
      inputs[i].disabled = false });
  })
}

function createItem(item){
  itemsArray.push(item.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  location.reload();
}

function deleteItem(i){
  itemsArray.splice(i,1);
  localStorage.setItem('items', JSON.stringify(itemsArray)); 
  location.reload();
}
