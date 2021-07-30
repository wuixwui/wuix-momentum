const title = document.querySelector(".hello h1")

// h1에 사용할 수 있는 event들을 console창에서 확인할 수 있다.
console.dir(title)

function handleTitleClick() {
    // 변수 선언은 코드를 깔끔하게 해주고 오타로 인해 생기는 오류를 줄여 줄 수 있다.
    const clickedClass = "clicked"
    if (title.className === clickedClass){
        title.className = "";
        //h1 에 class가 존재할 경우 해당 클래스를 무시 및 삭제 -> 지정한 클래스를 넣어버린다.
    } else {
        title.className = clickedClass;
    }
};

title.addEventListener("click", handleTitleClick);
