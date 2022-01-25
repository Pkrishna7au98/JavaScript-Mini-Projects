
const signs = {"add":"+", "sub":"-","mul":"x" , "divd":"/"}

var audio = new Audio("/JS_Small_Projects/Math4Kids/beep-03.mp3")

function Calc(theId){
    var answer = 0;
    var answers = [];
    var val_1 = Math.floor(Math.random() * 10);
    var val_2 = Math.floor(Math.random() * 10 + 1);

    if (theId == "add"){
    answer = eval(val_1 + val_2);
    dans1 = eval(val_1 +val_2 + Math.floor(Math.random() * 10));
    dans2 = eval(val_1 +val_2 - Math.floor(Math.random() * 10));
    } else if (theId == 'sub'){
    answer = eval(val_1 - val_2);
    dans1 = eval(val_1 - val_2 + Math.floor(Math.random() * 10));
    dans2 = eval(val_1 - val_2 - Math.floor(Math.random() * 10));
    } else if(theId == 'mul'){
    answer = eval(val_1 * val_2);
    dans1 = eval(val_1 * val_2 + Math.floor(Math.random() * 10));
    dans2 = eval(val_1 * val_2 - Math.floor(Math.random() * 10)); 
    } else{
    answer = eval(val_1 / val_2) * 100;
    dans1 = eval((val_1 / val_2 + Math.floor(Math.random() * 10))*100);
    dans2 = eval((val_1 / val_2 - Math.floor(Math.random() * 10))*100);
    answer = Math.round(answer)/100
    dans1 = Math.round(dans1) /100
    dans2 = Math.round(dans2) /100
    }
    document.querySelector("#expression").textContent = " "+ val_1 +" " + signs[theId] + " " + val_2;

    answers.push(answer,dans1,dans2)
    var ind = getRndInt();

    if (ind ==0){
        ind1 = 1
        ind2 = 2
        comp = 1;
    } else if(ind == 1){
        ind1 = 2
        ind2 = 0
        comp = 2;
    } else{
        ind1 = 1
        ind2 = 0
        comp = 3;
    }

    myId = theId;

    document.querySelector("#opt1").textContent = answers[ind];
    document.querySelector("#opt2").textContent = answers[ind1];
    document.querySelector("#opt3").textContent = answers[ind2];


}

function getId(btn){
    var eleId = btn.id;
    Calc(eleId);
}

function getRndInt() {
    return Math.floor(Math.random() * 3);
}

function correct(div){
    var divid = div.id;

    if (divid == "opt"+comp){
        Calc(myId)
    }
    else{
        audio.play()
    }
}