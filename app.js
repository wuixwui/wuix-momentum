const title = document.querySelector(".hello h1")

// h1에 사용할 수 있는 event들을 console창에서 확인할 수 있다.
console.dir(title)

function handleTitleClick() {
    // 변수 선언은 코드를 깔끔하게 해주고 오타로 인해 생기는 오류를 줄여 줄 수 있다.
    const clickedClass = "clicked"
    //classList 함수를 사용하면 모든 class들이 변경되는 것을 방지할 수 있다.
        // class 중에 ()안에 들어간 class가 있는 지 확인한다.
    if (title.classList.contains(clickedClass)) {
        // 해당 class 삭제
        title.classList.remove(clickedClass);
    } else {
        // 해당 class 추가
        title.classList.add(clickedClass);
    }
};

title.addEventListener("click", handleTitleClick);
