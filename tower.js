let menu = document.getElementById("menu");
let links = menu.getElementsByTagName("a");

document.getElementById("Location-button").addEventListener("click", () => {
    window.location.href = "Location.html";
});
document.getElementById("Hubs-button").addEventListener("click", () => {
    window.location.href = "Hubs.html";
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    e.preventDefault(); 
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    window.location.href = e.target.href;
  });
}