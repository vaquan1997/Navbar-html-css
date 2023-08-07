function ClickIcon(): void {
    const subMenu: HTMLElement | null = document.getElementById("menu");
    if (subMenu) {
        if (subMenu.style.display === "block") {
            subMenu.style.display = "none";
        } else {
            subMenu.style.display = "block";
        }
    }
}


function MenuOnClick(index: number): void {
    const cusMenu = document.getElementById("CusMenu" + index) as HTMLElement;
    if (cusMenu) {
        cusMenu.style.display = (cusMenu.style.display === "block") ? "none" : "block";
    }
}
