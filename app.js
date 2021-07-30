const title = document.querySelector(".hello h1")

// h1에 사용할 수 있는 event들을 console창에서 확인할 수 있다.
console.dir(title)

function handleTitleClick() {
    // 현재의 html <h1>의 컬러를 변수에 저장합니다.
    const currentColor = title.style.color;
    // 바꿀 수 있는 컬러의 값을 담을 변수 newColor를 선언합니다.
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    }else {
        newColor = "blue";
    }
    // 조건문을 돌고 newColor를 h1에 넣어줍니다.
    title.style.color = newColor;
};

title.addEventListener("click", handleTitleClick);
