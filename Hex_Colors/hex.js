var myButton = document.querySelector('button');

let colors = ['ffeeff', 'cccccc', '333333', '666666', '999999'];

var i = 0;
function myFunction(){
   var newColor = "#" + colors[i] ;
   document.body.style.backgroundColor = newColor;
   document.querySelector("#hexcode1").textContent = newColor;
  i++
  if (i == 4){
    i = 0;
  }
}