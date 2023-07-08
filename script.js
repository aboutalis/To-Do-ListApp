const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("mylist");

function addTask(){
    if(inputBox.value === ""){
        alert("You must write something!");
    }else{
        //Creating the list at myList
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    //Empty the input every time i press add 
    inputBox.value = "";
    saveData();
}

//Add new notes using Enter
document.addEventListener('keypress', function(event) {
    // Check if the Enter key was pressed (key code 13)
    if (event.keyCode === 13 || event.which === 13) {
      // Execute the addTask() function
      addTask();
    }
  });

//Checking if i press li or span
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function displayList(){
    listContainer.innerHTML = localStorage.getItem("data");
}

displayList();

