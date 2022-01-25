// Javascript for the modal window to input question and answer

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var clsbtn = document.getElementById("close");

btn.onclick = function() {
  modal.style.display = "block";
}

clsbtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Now the code for the flashcards to be shown on the screen

var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// addFlash = (text) =>{

// const cardbox = document.createElement('div');
// const qcard = document.createElement('h2');
// const acard = document.createElement('h2');

// cardbox.className = "cardbox";
// qcard.className = "qcard";
// qcard.id = "quecard";
// acard.className = "acard";
// acard.id = "anscard";

// qcard.textContent = text.my_question;
// acard.textContent = text.my_answer;

// cardbox.appendChild(qcard);
// cardbox.appendChild(acard);

// cardbox.addEventListener("click" , () =>{

//   if ( ans.style.display == "none"){
//     ans.style.display = "block"; 
//   }else{
//     ans.style.display = "none";
//   }
// });

// document.querySelector("#content").appendChild(cardbox);
// }

// contentArray.forEach(addFlash);

// document.querySelector('#postfc').addEventListener("click", () => {
//   var qstn = document.querySelector('#qstn'); 
//   var ans = document.querySelector('#ans');

//   let flashcard_info = {
//     'my_question' : qstn,
//     'my_answer'  : ans
//     }
//   contentArray.push(flashcard_info)
//   localStorage.setItem('items', JSON.stringify(contentArray));
//   addFlash(contentArray[contentArray.length - 1]);
//   qstn.value = "";
//   ans.value = "";
// });


document.querySelector("#clrbtn").addEventListener("click" , () =>{
  document.querySelector("#content").textContent = " ";
  contentArray = [];
});


flashcardMaker = (text) => {
  const flashcard = document.createElement("div");
  const question = document.createElement('h2');
  const answer = document.createElement('h2');

  flashcard.className = 'cardbox';
  question.className ="qcard";
  answer.className = "acard"


 
  question.textContent = text.my_question;
  answer.textContent = text.my_answer;

  flashcard.appendChild(question);
  flashcard.appendChild(answer);

  flashcard.addEventListener("click", () => {
    if(answer.style.display == "none")
      answer.style.display = "block";
    else
      answer.style.display = "none";
  })

  document.querySelector("#content").appendChild(flashcard);
}

contentArray.forEach(flashcardMaker);

document.querySelector('#postfc').addEventListener("click", () => {
  const question = document.querySelector("#qstn");
  const answer = document.querySelector("#ans");

  let flashcard_info = {
    'my_question' : question.value,
    'my_answer'  : answer.value
  }

  contentArray.push(flashcard_info);
  localStorage.setItem('items', JSON.stringify(contentArray));
  flashcardMaker(contentArray[contentArray.length - 1]);
  question.value = "";
  answer.value = "";

});