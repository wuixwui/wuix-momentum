const title = document.querySelector(".hello h1")

console.dir(title)

function handleTitleClick() {
    title.textContent = "CLICK!";
}

title.addEventListener("click", handleTitleClick);
