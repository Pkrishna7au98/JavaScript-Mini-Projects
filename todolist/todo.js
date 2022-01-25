// var addbtn = document.getElementById('addbtn');

// addbtn.onclick =  function(){
//     var task = document.getElementById('inputtg');
//     var output = document.getElementById('cntbx');
    
//     output.innerHTML += task.value + "<br />";
//     task.value = "";
// }
addItem = (input) =>{
  const item = document.createElement("div");
  const div = document.createElement("div");
  const checkIcon = document.createElement("i");
  const trashIcon = document.createElement("i");
  const text = document.createElement("p");

  item.className = "item";
  text.textContent = input;

  checkIcon.className = "fas fa-check-square chkbx";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", () => {
    checkIcon.style.color = "orange";
  })
  div.appendChild(checkIcon);

  trashIcon.className = "fas fa-trash trshbx";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", () => {
    item.remove();
  })
  div.appendChild(trashIcon);

  item.appendChild(text);
  item.appendChild(div);

  document.querySelector("#to_do_list").appendChild(item);
  document.querySelector("#input").value = "";
}


document.querySelector("#add_item").addEventListener("click", () => {
    const input = document.querySelector("#input");
    addItem(input.value);
  });

