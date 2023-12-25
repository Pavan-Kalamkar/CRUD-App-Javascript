let addbtn = document.getElementById('add-btn')
addbtn.addEventListener('click', addNote)

let parrentli = document.getElementById('parrent-list');


// Function to add notes in the list 
function addNote(e) {

  if (parrentli.children[0].className == "empty") {
    parrentli.children[0].remove()
  }

  let currentbtn = e.currentTarget;
  let currentInput = currentbtn.previousElementSibling;
  let InputValue = currentInput.value;

  if (InputValue != "") {
    let newli = document.createElement('li');
    newli.classList.add("list-group-item", "d-flex", "justify-content-between");
    newli.innerHTML = `<h5 class="flex-grow-1">${InputValue}</h5>
       <button class="btn btn-outline-primary mx-2" type="button" id="button-addon2" onclick ="EditNote(this)">Update</button> 
       <button class="btn btn-outline-danger" type="button" id="button-addon2" onclick="removeNote(this)">Delete</button>`;
    parrentli.appendChild(newli);
  }
  else {
    alert("Create First");
    if (parrentli.children.length <= 0) {
      let newmsg = document.createElement("div");
      newmsg.classList.add("empty")
      newmsg.innerHTML = `<div class="alert alert-primary" role="alert">
          Not Added !
         </div>`
      parrentli.appendChild(newmsg);
    }

  }
}



//Function to remove notes in the list 
function removeNote(CureentEle) {
  CureentEle.parentElement.remove();
  let parrentli = document.getElementById('parrent-list');

  if (parrentli.children.length <= 0) {
    let newmsg = document.createElement("div");
    newmsg.classList.add("empty")
    newmsg.innerHTML = `<div class="alert alert-primary" role="alert">
     Not Added !
    </div>`
    parrentli.appendChild(newmsg);
  }
}


//Function to Edit notes in the list
function EditNote(CureentElement) {

  if (CureentElement.textContent == "Done") {
    CureentElement.textContent = "Update"
    let currentNoteName = CureentElement.previousElementSibling.value;
    let currentHeading = document.createElement('h5')
    currentHeading.className = "flex-grow-1"
    currentHeading.textContent = currentNoteName;
    CureentElement.parentElement.replaceChild(currentHeading, CureentElement.previousElementSibling);

  }
  else {
    CureentElement.textContent = "Done"
    let currentNoteName = CureentElement.previousElementSibling.textContent
    let currentInput = document.createElement("input");
    currentInput.type = "text"
    currentInput.className = "form-control"
    currentInput.placeholder = "write here"
    currentInput.value = currentNoteName;
    CureentElement.parentElement.replaceChild(currentInput, CureentElement.previousElementSibling);
  }

}


