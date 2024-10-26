// Access DOM Elements
let addNote = document.getElementById("notebtn");
let deleteIcon = document.querySelector(".icon");
let addBtn = document.querySelector(".save-btn");
let notesContainer = document.querySelector(".newNotes");

// Show the Add Note form
addNote.addEventListener("click", function () {
  document.querySelector(".Addform").style.display = "block";
});

// Delete the Add Note form
deleteIcon.addEventListener("click", function () {
  document.querySelector(".Addform").style.display = "none";
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
});

// Save the note and display it in the notes section
function GetValues() {
  const titlevalue = document.getElementById("title").value;
  const descriptionValue = document.getElementById("description").value;

  // Check if both boxes are empty
  if (titlevalue === "" || descriptionValue === "") {
    alert("Please fill both the title and description");
    return; // Stop further execution if fields are empty
  }

  // Create a new Note
  let div = document.createElement("div");
  div.classList.add("myNote");
  div.innerHTML = `
        <h2>${titlevalue}</h2>
        <p>${descriptionValue}</p>
        <button>Delete</button>
    `;

  // Append the new note to the container
  notesContainer.appendChild(div);

  // Add delete functionality to the note
  div.querySelector("button").addEventListener("click", function () {
    div.remove();
  });

  // Clear the input fields and close the form
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.querySelector(".Addform").style.display = "none";
}

addBtn.addEventListener("click", GetValues);