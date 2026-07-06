// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('nav a').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({

behavior:'smooth'

});

});

});


// =========================
// Active Navbar
// =========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


// =========================
// Navbar Background
// =========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="#0d1117";

header.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";

}

else{

header.style.background="rgba(13,17,23,.95)";

header.style.boxShadow="none";

}

});


// =========================
// Typing Effect
// =========================

const words=[

"Data Scientist",

"Machine Learning Engineer",

"Python Developer",

"AI Enthusiast"

];

let wordIndex=0;

let charIndex=0;

let isDeleting=false;

const typing=document.querySelector(".hero-content h2");

function type(){

const currentWord=words[wordIndex];

if(isDeleting){

typing.textContent=currentWord.substring(0,charIndex--);

}

else{

typing.textContent=currentWord.substring(0,charIndex++);

}

let speed=isDeleting?60:120;

if(!isDeleting && charIndex===currentWord.length+1){

speed=1500;

isDeleting=true;

}

if(isDeleting && charIndex===0){

isDeleting=false;

wordIndex=(wordIndex+1)%words.length;

}

setTimeout(type,speed);

}

type();


// =========================
// Reveal Animation
// =========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},

{

threshold:0.2

});

document.querySelectorAll(

'.project-card,.skill-card,.timeline-box,.certificate-card,.achievement-card,.contact-card,.experience-card,.about'

).forEach(el=>{

observer.observe(el);

});


// =========================
// Project Hover
// =========================

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});


// =========================
// Skill Card Hover
// =========================

document.querySelectorAll(".skill-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.background="#00bcd4";

card.style.color="#fff";

});

card.addEventListener("mouseleave",()=>{

card.style.background="#161b22";

card.style.color="#fff";

});

});


// =========================
// Counter Animation
// =========================

const counters=document.querySelectorAll(".counter");

const speed=200;

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,15);

}

else{

counter.innerText=target;

}

};

update();

});


// =========================
// Footer Year
// =========================

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}


// =========================
// Scroll To Top Button
// =========================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#00bcd4";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});