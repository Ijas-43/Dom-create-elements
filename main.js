let inputnote = document.getElementById("input-notes");
let inputBtn = document.getElementById("input-btn");
let notesContainer = document.getElementById("notes-container");

inputBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  const text = document.createTextNode(inputnote.value);

  const comment = document.createComment("Creating a li");

  // Assigning className
  li.className = "notes-item";

  // append
  li.append(text);
  li.append(comment);

  notesContainer.append(li);
});
