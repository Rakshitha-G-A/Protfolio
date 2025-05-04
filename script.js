window.addEventListener("scroll", function () {
    let name = document.getElementById("Name");
    if (window.scrollY > 100) {
        name.style.fontSize = "2rem";
        name.style.position = "fixed";
        name.style.top = "10px";
        name.style.left = "20px";
    } else {
        name.style.fontSize = "5rem";
        name.style.position = "static";
    }
});
