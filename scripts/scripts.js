function hamburger() {
    var x = document.getElementById("hamNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    }
    else {
        x.className = "navbar";
    }
}