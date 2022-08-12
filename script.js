'use strict';


var words = ['hello', 'pink', 'cherry', 'sun', 'music'];
var j = 0;
var picked = words[j];
var timerId;


// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }


var box = document.getElementById('box');
var title = document.getElementById('title');
var group = document.getElementById('group');

title.textContent = picked;


document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  var cnt = group.childElementCount; 


    for(let i = 0; i < picked.length; i++ ) {
      if (cnt == i) {
        const keyPressed = `${keyName}`;

        const lastLetter = () => {
          startTimer();          
          j < words.length-1 ? j++ : fin();
          title.textContent = words[j];
          picked = words[j];
        }
        const letterOneBefore = () => {
          var fli = document.createElement('div');
          fli.className = 'letter';
          fli.innerText = keyPressed;
          group.appendChild(fli);
        }
        const fin = () => {
          box.innerHTML = "";
          var fin = document.createElement('div');
          fin.innerText = "fin!";
          box.appendChild(fin);
        }
        const startTimer = () => {
          letterOneBefore();
          timerId = setTimeout(abortTimer, 90);
        }
        const abortTimer = () => {
          group.innerHTML = "";
          clearTimeout(timerId);
        }

        switch(keyPressed) {
          case picked.charAt(picked.length-1):
            lastLetter();
            break;
          case picked.charAt(i):
            letterOneBefore();
            break;
          default:
            console.log("default");
        }
      }
    }



}, false);


