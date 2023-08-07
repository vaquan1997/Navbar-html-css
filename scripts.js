function ClickIcon() {
    var subMenu = document.getElementById("menu");
    if (subMenu) {
        if (subMenu.style.display === "block") {
            subMenu.style.display = "none";
        }
        else {
            subMenu.style.display = "block";
        }
    }
}
function MenuOnClick(index) {
    var cusMenu = document.getElementById("CusMenu" + index);
    if (cusMenu) {
        cusMenu.style.display = (cusMenu.style.display === "block") ? "none" : "block";
    }
}
