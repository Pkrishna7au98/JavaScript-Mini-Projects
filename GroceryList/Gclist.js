var count = 0;

function myFunc(){
    var text = document.getElementById('inputtg');

    if (text.value == ""){
        alert('Please enter a valid item')
        return false;
    } else{
        document.getElementById('itemlist').innerHTML += "• "+ text.value + "<br />" ;
        text.value = "";
    }

}

document.querySelector("#inputtg").addEventListener("keydown", (event) => {
    if(event.key == "Enter")
      myFunc();
  });