
var box = document.getElementById("notessect");
var note = document.getElementById("inputtxt")

var colors = ['red', 'green', 'blue','yellow','purple', 'orange', 'pink']
var incline = ['12deg', '6deg','-8deg','4deg','12deg','2deg','-8deg'] 
var i = 0

function postNote(){
    if (i == 7){
        i = 0
    }
    
    var postbox = document.createElement('div');
    var postcontent = document.createElement('p');

    postbox.className ="postbox";
    postcontent.className = "postcontent";

    postbox.style.transform ="rotate("+ incline[i] +")";
    postbox.style.backgroundColor = colors[i];
    i++
    postcontent.textContent = note.value;

    postbox.appendChild(postcontent);

    box.appendChild(postbox);

    note.value = "";
}

