"use strict"; //우리가 미친짓을 못하도록 미연에 방지

//Navbar

//이제 navbar의 height을 알아와야함. 검색어 javascript element size (html의 element니까)
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

//윈도우가 스크롤링 될때 navbar의 height만큼 스크롤링이 이루어지면 navbar의 배경색깔을 바꿔줄 것 -> 알아와야할 것 두가지 1. javascript scroll position
document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(`navbarHeight:$(navbarHeight)`);
  //원래는 그냥 navbarHeight이라고만 적었는데 그렇게 하니까 어느게 어느건지 헷갈려서 이렇게 이름을 따로 부여해준 것임. (문자열 안에 변수의 값을 출력할 수 있도록 작성하는것을 String Template 이라고 하는데, 일반 따옴표가 아닌 물결 모양 옆에 있는 ` 이 기호를 사용하셔야 해요 )
  //스크롤이 될때마다 나에게 우리가 {}안에 등록한 함수를 호출해줘. ()=>는 arrow function이라고 하는데 아무런 인자를 받지않고 우리가 원하는 블럭을 실행해주는 것

  //이제 두가지를 확인했으니 로직을 작성하면 됨.
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Scroll the section
const navbarMenu = document.querySelector(".navbar__menu"); //navbar에 있는menu요소를 navbarMenu라는 변수에 할당한 다음에
navbarMenu.addEventListener(
  //navbarMenu에 이벤트를 추가
  "click",
  (event) => {
    console.log(event.target);
  }
); //클릭이 되면 우리가 등록한 함수가 호출이 되도록
