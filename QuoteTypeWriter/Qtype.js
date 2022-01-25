
var flag = true;
var index = 0;
var quoteArray = []
var textPosition = 0;
var author = "";

loadQuotes = () =>{

    const url = 'https://api.quotable.io/random';
    fetch(url)

    .then(response => {
        if (!response.ok) throw Error (response.statusText);
        return response.json()
    })
    .then(data =>{
        quoteArray[index] = data.content;
        author = data.author;
        console.log(quoteArray[0])
    })
    .catch(error => console.log(error));
}

typewriter = () => {
    if(flag){
      loadQuotes();
      quoteArray[index] += ' '; 
      flag = false;
    }

    document.querySelector("#quote").innerHTML = quoteArray[index].substring(0, textPosition) + '<span>\u25AE</span>' +"<br/>"+"-"+author; 

    if (textPosition++ != quoteArray[index].length){
        setTimeout("typewriter()", 100)
    }else{
        quoteArray[index] = " ";
        setTimeout("typewriter()", 4000)
        textPosition = 0;
        flag = true;
    }
}

window.addEventListener('load', typewriter);
