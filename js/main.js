
// loacal storage score and day
// levels
// +3 sec on first click
const words = [
    "Hello",
    "Programming",
    "Code",
    "JavaScript",
    "Town",
    "Islam",
    "Amin",
    "Amgad",
    "Ramadan",
    "Country",
    "Facebook",
    "Githup",
    "Testing",
    "Scala",
    "InterNet",
    "Eyad",
    "Mohammed",
    "Styling",
    "Python",
    "Sass",
    "Documnation",
    "Funny",
    "Coding",
    "Working",
    "Dependencies"
];

const lvls = {
    "Easy" : 5,
    "Normal" : 3,
    "Hard" : 2,
};

let defaultLevelName = "Normal";
let hardLevelName = "Hard";
let easyLevelName = "Easy";
let defaultLevelSeconds = lvls[defaultLevelName]; 
let easyLevelSeconds = lvls[easyLevelName]; 
let hardLevelSeconds = lvls[hardLevelName]; 

let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lv1");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upComingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");
let Hard1 = document.querySelector(".time .Hard");
let Normal1 = document.querySelector(".time .Normal");
let Easy1 = document.querySelector(".time .Easy");
let hard = document.querySelector(".hard");
let normal = document.querySelector(".normal");
let easy = document.querySelector(".easy");
let newGame = document.querySelector(".newGame");//newGame()

//Easy1.innerHTML=easyLevelSeconds;
//Hard1.innerHTML=hardLevelSeconds;
//Normal1.innerHTML=defaultLevelSeconds;
function NewGame(){
    return location.reload();
}


function Easy() {
lvlNameSpan.innerHTML = easyLevelName;
secondsSpan.innerHTML = easyLevelSeconds;
timeLeftSpan.innerHTML= easyLevelSeconds;
scoreTotal.innerHTML =words.length;
easy.style.backgroundColor = "#2196f3";
hard.style.backgroundColor = "";
normal.style.backgroundColor = "";
timeLeftSpan.className="Easy";
}
function Hard() {
    lvlNameSpan.innerHTML = hardLevelName;
secondsSpan.innerHTML = hardLevelSeconds;
timeLeftSpan.innerHTML= hardLevelSeconds;
scoreTotal.innerHTML =words.length;
hard.style.backgroundColor = "#2196f3";
easy.style.backgroundColor = "";
normal.style.backgroundColor = "";
timeLeftSpan.className="Hard";
}
function Normal() {
    lvlNameSpan.innerHTML = defaultLevelName;
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML= defaultLevelSeconds;
    scoreTotal.innerHTML =words.length;
    normal.style.backgroundColor = "#2196f3";
    hard.style.backgroundColor = "";
    easy.style.backgroundColor = "";
    timeLeftSpan.className="Normal";
    }
    lvlNameSpan.innerHTML = easyLevelName;
    secondsSpan.innerHTML = easyLevelSeconds;
    timeLeftSpan.innerHTML= easyLevelSeconds;
    scoreTotal.innerHTML =words.length;
    easy.style.backgroundColor = "#2196f3";
    hard.style.backgroundColor = "";
    normal.style.backgroundColor = "";
    timeLeftSpan.className="Easy";
    




input.onpaste = function(){
    return false;
}

startButton.onclick = function(){
    this.remove();
    input.focus();
    genWords();
}

function genWords() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    let wordIndex = words.indexOf(randomWord);
    words.splice(wordIndex,1);
    theWord.innerHTML =randomWord;
    upComingWords.innerHTML='';
    for (let i = 0; i < words.length; i++) {
        let div =document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);  
        upComingWords.appendChild(div);   
    }
    startPlay();
};
function startPlay(){

     //   if (timeLeftSpan.className="Easy") {
     //   document.querySelector(".time .Easy").innerHTML =
     //   easyLevelSeconds;   
    // //   }
     //   else if (timeLeftSpan.className="Hard"){
     //       document.querySelector(".time .Hard").innerHTML =
     //       hardLevelSeconds;        
     //   }
     //   else{
     //       document.querySelector(".time .Normal").innerHTML =
     //       defaultLevelSeconds;       
     //   }
        
//
       // document.querySelector(".time .Normal").innerHTML =
      //   defaultLevelSeconds;
    //  do {
    //    Easy();
     // } while (document.querySelector('.hard').onclick());
//      if (timeLeftSpan.className= "easy") {
//             timeLeftSpan.innerHTML=20;
//      }else if (timeLeftSpan.className= "hard") {
//        timeLeftSpan.innerHTML=200;
// }
timeLeftSpan.innerHTML=easyLevelSeconds;
     let start = setInterval(() => {
         timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === "0"){
            clearInterval(start);
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
                input.value ='';
                scoreGot.innerHTML++;
                if (words.length > 0) {
                    genWords();
                } else{
                    let span = document.createElement("span");
                    span.className ='good';
                    let spanText = document.createTextNode("Great");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    upComingWords.remove();
                }
            }
            else {
                let span = document.createElement("span");
                span.className='bad';
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
                setInterval(() => {
                  //  document.querySelector(".name").innerHTML+="." ;

                   // location.reload();
                    
                }, 2000);
            }
        }
    }, 1000);
}
