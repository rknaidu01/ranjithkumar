// ================= TYPING EFFECT =================
const text = ["Full Stack Developer","UI Designer","Backend Specialist"];
let count = 0;
let index = 0;

(function type(){
  if(count === text.length) count = 0;

  let currentText = text[count];
  let letter = currentText.slice(0, ++index);

  const typingEl = document.querySelector(".typing");
  if(typingEl) typingEl.textContent = letter;

  if(letter.length === currentText.length){
    count++;
    index = 0;
  }

  setTimeout(type,150);
})();


// ================= LINEAR SKILLS =================
const skillObserver = new IntersectionObserver(entries=>{
entries.forEach(entry=>{

let progress = entry.target.querySelector(".progress");
let percentText = entry.target.querySelector(".percent");
let width = progress.getAttribute("data-width");

if(entry.isIntersecting){

entry.target.classList.add("active");

progress.style.width = width + "%";

let count = 0;
let interval = setInterval(()=>{
if(count >= width){
clearInterval(interval);
}else{
count++;
percentText.innerText = count + "%";
}
},15);

}else{

// RESET WHEN LEAVING
entry.target.classList.remove("active");
progress.style.width = "0%";
percentText.innerText = "0%";

}

});
},{threshold:0.6});

document.querySelectorAll(".skill").forEach(skill=>{
skillObserver.observe(skill);
});

// ================= CIRCULAR SKILLS & LANGUAGES =================
const circleObserver = new IntersectionObserver(entries=>{
entries.forEach(entry=>{

let circle = entry.target;
let percent = circle.getAttribute("data-percent");
let progressCircle = circle.querySelector(".progress-circle");
let circlePercent = circle.querySelector(".circle-percent");

if(entry.isIntersecting){

circle.classList.add("active");

let offset = 314 - (314 * percent) / 100;
progressCircle.style.strokeDashoffset = offset;

let count = 0;
let interval = setInterval(()=>{
if(count >= percent){
clearInterval(interval);
}else{
count++;
circlePercent.innerText = count + "%";
}
},15);

}else{

// RESET WHEN LEAVING
circle.classList.remove("active");
progressCircle.style.strokeDashoffset = 314;
circlePercent.innerText = "0%";

}

});
},{threshold:0.6});

document.querySelectorAll(".circle").forEach(circle=>{
circleObserver.observe(circle);
});

// ================= EDUCATION & PROJECTS ANIMATION =================
const resumeSection = document.querySelector("#resume");

if (resumeSection) {

  const resumeCards = resumeSection.querySelectorAll(".resume-card");

  const resumeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {

        resumeCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 250);
        });

        observer.unobserve(entry.target);
      }

    });
  }, { threshold: 0.3 });

  resumeObserver.observe(resumeSection);
}


// ================= REVEAL SECTIONS =================
const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:0.2});

document.querySelectorAll(".reveal").forEach(section=>{
  revealObserver.observe(section);
});


// ================= ACTIVE NAVIGATION =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", ()=>{
  let current = "";

  sections.forEach(section=>{
    const sectionTop = section.offsetTop;
    if(pageYOffset >= sectionTop - 200){
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });
});


// ================= SIDEBAR TOGGLE =================
const toggleBtn = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

if(toggleBtn){
  toggleBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("active");
  });
}