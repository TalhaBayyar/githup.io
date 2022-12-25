const menuToggle= document.querySelector(".menu-bars");
const nav = document.querySelector("nav ul");


menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
  
  });




  let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}