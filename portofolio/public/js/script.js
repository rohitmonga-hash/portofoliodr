let firstText = "Hey, I am Dr. Ganesh Arora";
let secondText = "PHD in Sociology";

let i = 0;

function typeFirstText(){

   if(i < firstText.length){

      document.getElementById("typing").innerHTML += firstText.charAt(i);

      i++;

      setTimeout(typeFirstText, 100);
   }

   else{

      setTimeout(typeSecondText, 500);
   }
}

let j = 0;

function typeSecondText(){

   if(j < secondText.length){

      document.getElementById("reading").innerHTML += secondText.charAt(j);

      j++;

      setTimeout(typeSecondText, 100);
   }
}

window.onload = typeFirstText;