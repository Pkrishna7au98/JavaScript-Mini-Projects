var dispwindow = document.getElementById('dispwindow');

var butdiv = document.getElementById('divison');
var butmult = document.getElementById('multiply');
var butadd = document.getElementById('add');
var butsub = document.getElementById('subtract');
var butdot = document.getElementById('dot')
var but1 = document.getElementById('1');
var but0 = document.getElementById('0');
var but2 = document.getElementById('2');
var but3 = document.getElementById('3');
var but4 = document.getElementById('4');
var but5 = document.getElementById('5');
var but6 = document.getElementById('6');
var but7 = document.getElementById('7');
var but8 = document.getElementById('8');
var but9 = document.getElementById('9');

var clrwindow = document.getElementById('clear');
var fnlotpt = document.getElementById('output')

var expression = "";

but9.onclick = function(){
    expression += String(but9.textContent);
    dispwindow.textContent = expression;
}
but8.onclick = function(){
    expression += but8.textContent;
    dispwindow.textContent = expression;
}
but7.onclick = function(){
    expression += but7.textContent;
    dispwindow.textContent = expression;
}
but6.onclick = function(){
    expression += String(but6.textContent);
    dispwindow.textContent = expression;
}
but5.onclick = function(){
    expression += but5.textContent;
    dispwindow.textContent = expression;
}
but4.onclick = function(){
    expression += but4.textContent;
    dispwindow.textContent = expression;
}
but3.onclick = function(){
    expression += String(but3.textContent);
    dispwindow.textContent = expression;
}
but2.onclick = function(){
    expression += but2.textContent;
    dispwindow.textContent = expression;
}
but1.onclick = function(){
    expression += but1.textContent;
    dispwindow.textContent = expression;
}
but0.onclick = function(){
    expression += but0.textContent;
    dispwindow.textContent = expression;
}
butdot.onclick = function(){
    expression += butdot.textContent;
    dispwindow.textContent = expression;
}
butmult.onclick = function(){
    expression += "*";
    dispwindow.textContent = expression;
}
butdiv.onclick = function(){
    expression += String(butdiv.textContent);
    dispwindow.textContent = expression;
}
butadd.onclick = function(){
    expression += String(butadd.textContent);
    dispwindow.textContent = expression;
}
butsub.onclick = function(){
    expression += String(butsub.textContent);
    dispwindow.textContent = expression;
}

clrwindow.onclick = function(){
    expression = " ";
    dispwindow.textContent = expression;
}

fnlotpt.onclick = function(){
    let result = eval(expression);
    dispwindow.textContent = result;
}
