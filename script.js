const welcomePage = document.getElementById("welcomePage");

const birthdayPage = document.getElementById("birthdayPage");

const button = document.getElementById("openBtn");

const typingText = document.getElementById("typingText");

const message = `Dear Saumya ❤️

Yaha tum apna Hinglish birthday message likh sakte ho.

Happy Birthday once again!

May God bless you always.

Have an amazing year ahead.

😊❤️`;

let i = 0;

button.onclick = () => {

welcomePage.style.display = "none";

birthdayPage.style.display = "block";

typeWriter();

confetti();

};

function typeWriter(){

if(i < message.length){

typingText.innerHTML += message.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}

function confetti(){

for(let i=0;i<120;i++){

let c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.animationDuration=(Math.random()*3+2)+"s";

c.style.background=`hsl(${Math.random()*360},100%,60%)`;

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},5000);

}

}