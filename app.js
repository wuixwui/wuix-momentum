const title = document.querySelector(".hello h1")

console.dir(title)

function handleTitleClick() {
    title.textContent = "CLICK!";
}

function hadleMouseEnter() {
    title.textContent = "WELCOME";
}

function hadleMouseLeave() {
    title.innerText = "BYE";
}

function handelWindowResize() {
    document.body.style.backgroundColor = "#e7e7e7";
}

function handleWindowCopy() {
    alert("YOU COPY SOMETHING?");
}

function handleWindowOffline() {
    alert("SEE YOU SOON");
}

function handleWindowOnline() {
    alert("NICE TO MEET YOU!")
}

function random(number) {
    return Math.floor(Math.random() * number);
}

function handleRightClick() {
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

// 다른 이벤트 방식 title.onclick = handleTitleClick
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", hadleMouseEnter);
title.addEventListener("mouseleave", hadleMouseLeave);

window.addEventListener("resize", handelWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
window.addEventListener("auxclick", handleRightClick);
