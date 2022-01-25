var i = 0;
var btn_next = document.getElementById("btn-r");
var btn_prev = document.getElementById("btn-p");
var imgid = document.getElementById("imageid");

imgid.src = "/JS_Small_Projects/Image Carousel/images/img1.jpg";

function RightMove(){
    i++
    imgid.src = "/JS_Small_Projects/Image Carousel/images/img" + i + ".jpg";
    
    if (i == 3){
        i = 0;
    }
}

function PrevMove(){    
    if (i == 1 || i ==0){
        i = 3;
    } else{
        i--;
    }
    imgid.src = "/JS_Small_Projects/Image Carousel/images/img" + i + ".jpg";
}


