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
          finAnime();
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

function finAnime() {

particlesJS("particles-js", {"particles":{"number":{"value":101,"density":{"enable":true,"value_area":801.7060304327614}},"color":{"value":["#121212", "#f027cc"]},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":true,"speed":5,"size_min":8.120310520674316,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

}
