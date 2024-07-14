let addButton = document.getElementById("add-btn")
let kitchenItemList = document.getElementById("kitchen-items-list")
let kitchenInput = document.getElementById("kitchen-input")

let kitchenInputData;
let kitchenItemArray = [];


function setLocalStorage(){
  localStorage.setItem("kitchenInput",  JSON.stringify(kitchenItemArray));
}

function getLocalStorage(){
  if(localStorage.getItem("kitchenInput")){
  kitchenItemArray = JSON.parse(localStorage.getItem("kitchenInput"));
  
   buildUI();
  
  }
}

function buildUI(){
  kitchenItemList.textContent = "";
   kitchenItemArray.forEach((item) => {
    
    //create DOM Elements 
  let li =document.createElement('li');

  li.textContent = item;
  kitchenItemList.appendChild(li)
  li.style.cssText = 'animation-name: slideIn'
  kitchenInput.value=""
  kitchenInput.focus();
  console.log(li)

  //create Trash Button
  let trashBtn = document.createElement('i');
  trashBtn.classList.add('fas','fa-trash');
  li.appendChild(trashBtn)
  console.log(trashBtn);

  //create Edit Button
  let editBtn = document.createElement('i');
  editBtn.classList.add('fas','fa-edit');
  li.appendChild(editBtn);

   })

  

}


//Step 2
// Add kitchen items
function addKitchenItems(){
      kitchenInputData = kitchenInput.value;
      
      kitchenItemArray.push(kitchenInputData);
      console.log(kitchenItemArray)
    
    //Set to local storage
    setLocalStorage();

    //Get item from Local storage
    getLocalStorage();

   

    
    
}
//Delete item from Kitchen List
function deleteKitchenItem(event){
  console.log(event.target.classList[0])
    if(event.target.classList[1] === "fa-trash"){
    let item = event.target.parentElement;
    console.log(item)
    item.classList.add("slideOut");
    item.addEventListener("transitionend" , function(){
      item.remove();
    });
    
    }

}

//Edit Kitchen item List
function editKitchenItemList(event){
  if(event.target.classList[1] === "fa-edit" ){
  
  let editedValue = prompt("Please add new text");
  let item =event.target.parentElement.firstChild.textContent = editedValue;
  }
}

//Step 3
//Add items to the list when enter key is pressed    
kitchenInput.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("add-btn").click();
    }
  })

  
//Step 1
//Add an event listener to the button
addButton.addEventListener('click', addKitchenItems);
kitchenItemList.addEventListener('click',deleteKitchenItem);
kitchenItemList.addEventListener('click',editKitchenItemList);

getLocalStorage();


















 //Step 4
    //add user entered items to an arrary
    //var kitchenItem = [];
    //kitchenItem.push(kitchenInputData);
    //console.log(kitchenItem)