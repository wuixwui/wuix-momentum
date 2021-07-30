const title = document.querySelector(".hello h1")

// h1에 사용할 수 있는 event들을 console창에서 확인할 수 있다.
console.dir(title)

function handleTitleClick() {
    // toggle 은 class name이 있는지 확인하고 있다면 삭제, 없다면 추가의 기능을 해준다.
    // classList의 contains,remove,add를 한번에 해결할 수 있다.
    title.classList.toggle("clicked");
};

title.addEventListener("click", handleTitleClick);
