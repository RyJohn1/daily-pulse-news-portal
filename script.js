function toggle() {
    const body = document.body;
    const icon = document.getElementById("theme-icon");
    
    body.classList.toggle("light-mode");
    
    if (body.classList.contains("light-mode")) {
        icon.className = "fas fa-moon";
    } else {
        icon.className = "fas fa-sun";
    }
}