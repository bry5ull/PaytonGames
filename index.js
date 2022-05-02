// Version 0.1.1 NOT FOR PUBLICATION

window.onload = randomCardTop;

const cards1 = ["assets/image/1.jpeg", "assets/image/2.jpeg", "assets/image/3.jpeg", "assets/image/4.jpeg", "assets/image/5.jpeg"];
const cardsA = ["assets/image/one.jpeg", "assets/image/two.jpeg", "assets/image/three.jpeg", "assets/image/four.jpeg", "assets/image/five.jpeg"];

function randomCardTop() {
     let randomNumberTop = Math.floor(Math.random() * cards1.length);
     document.getElementById("randomcard").src = cards1[randomNumberTop];
}


// codeblock for multiple function onload

// function addLoadEvent(type) {
//     let preload = window.onload;
//     if (typeof window.onload != ‘function’) {
//       window.onload = type;
//     } else {
//       window.onload = function() {
//         if (preload) {
//           preload();
//         }
//         type();
//       }
//     }
//   }
//   addLoadEvent(randomCardTop);
//   addLoadEvent(function() {
//       //*******
//   });




































