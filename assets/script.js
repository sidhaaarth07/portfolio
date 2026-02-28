// Typing Effect
const text = "Hi, I'm Sidharth Kumar";
let i = 0;

function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 70);
  }
}
typing();

// Floating Menu Toggle
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".floating-menu");

menuIcon.addEventListener("click", ()=>{
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});