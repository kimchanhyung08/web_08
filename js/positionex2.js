
// 1. 선택자

const viewBtn = document.querySelector('button.viewBtn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('span.close');

// 2. 이벤트
viewBtn.addEventListener('click', viewBtnFn);

closeBtn.addEventListener('click', closeBtnFn);

// 3. 함수 호출
function viewBtnFn (){
  alert("viewBtnFn함수 호출");
  modal.style.display = "flex";
}

function closeBtnFn (){
  alert("modal창을 닫습니다~~")
  modal.style.display = "none";
}

