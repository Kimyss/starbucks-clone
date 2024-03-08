// 검색 영역(.search) 클릭 시 input에 강제 포커스 및 제어
// 검색 영역(div와 input찾기)
const searchEl = document.querySelector('.search');
console.log(searchEl);

// const searchInputEl = document.querySelector('.search input');
// 문서 전체에서 찾지 말고 아래와 같이 최적화
const searchInputEl = searchEl.querySelector('input')
console.log(searchInputEl);

// 검색 영역을 클릭하면 input 요소를 포커스하도록 실행
searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});


// input 요소에 포커스(focus) 되면 placeholder 추가
// 힌트 : setAttribute()

searchInputEl.addEventListener('focus', function () {
  searchInputEl.setAttribute('placeholder', '통합검색');
  searchEl.classList.add('focused')
});

// input 요소에 포커스가 해제 (blur) 되면 placeholder 초기화
// 힌트 : setArritube()

searchInputEl.addEventListener('blur', function () {
  // searchInputEl.setAttribute('placeholder', '');
  searchInputEl.removeAttribute('placeholder');
  searchEl.classList.remove('focused');
});

// 스크롤 시 전역배치(고정 배너) 숨기기
const badgeEl =  document.querySelector('header .badges');

// 페이지에 스크롤 이벤트 감지를 추가!
// window: 브라우저 창 객채
window.addEventListener('scroll', function(){
  // console.log(window.scrollY);      
  //(y축으로 얼마나 스크롤 했는지) 페이지 스크롤위치

  // Quiz:
  // 페이지 스크롤 위치가 500px을 넘으면 배치 요소를 숨기고,
  // 페이지 스크롤 위치가 500px을 넘지 않으면 요소를 보이기
  // style.backgroundColor = 'red';

  if (window.scrollY > 500) {
    // badgeEl.style.display = 'none';
    // badgeEl.style.opacity = 0;
    // badgeEl.style.visibility = 'hidden';
    // gsap.to(애니메이션처리요소, 지속시간, 옵션:{}) 메소드: css속성을 통해 애니메이션 처리
    gsap.to(badgeEl, 0.6, {
      opacity:0,
      display:'none'
    });

  } else {
    // badgeEl.style.display ='block';
    // badgeEl.style.opacity = 1;
    // badgeEl.style.visibility = 'visible';
    gsap.to(badgeEl, 0.6, {
      opacity:1,
      display:'block'
    });

  }
});

// 순차적으로 VISUAL 섹션 내 요소 보이기
// 나타날 요소(.fade in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
console.log(fadeEls);
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션:{});
  gsap.to(fadeEl,1,{
    opacity:1,
    delay: (index + 1) * 0.7 //0.7s, 1.4s, 2.1, 2.8s
  });
});


// 공지사항 수직 슬라이드 기능
// new 키워드로 Swiper 객체를 생성 => 슬라이드 기능을 생성
// new Swiper(요소, 옵션:{})
// 첫번째 인수: 슬라이드 기능을 적용할 요소의 선택자
// 두번째 인수: 다양한 옵션을 객체 데이터로 전달 (API 홈페이지참조)
new Swiper('.notice .swiper', {
  // Optional parameters
  direction: 'vertical', // 수직슬라이드
  loop: true,            // 반복 재생 여부, 1-> 2 ->3 ->4 -> 다시 1
  autoplay:true          // 자동재생여부
});



// 프로모션 수평 슬라이드기능
new Swiper('.promotion .swiper', {
  // Optional parameters
  direction: 'horizontal', // 수평슬라이드 (기본값)
  loop: true,           // 반복 재생 여부, 1-> 2 ->3 ->4 -> 다시 1
  autoplay:{
    delay: 5000         // 5초마다 슬라이드 바뀜(기본값:3000)
  },
  slidesPerView:3,      // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween:10,      // 슬라이드 사이 여백(간격)
  centeredSlides: true,  // 1번 슬라이드가 가운데 보이기
  pagination: {         // 페이지네이션 번호사용
    el: '.promotion .swiper-pagination',  // 페이지 번호 욧 선택자
    clickable: true
  },
  navigation: {         // 슬라이드 이전/다음 버튼 사용
    nextEl: '.promotion .swiper-button-next',
    prevEl: '.promotion .swiper-button-prev',
  },
});

// 프로모션 섹션 토글 기능
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const promotionToggleIcon = promotionToggleBtn.querySelector('.material-icons');

// Quiz
// 토글 버튼을 클릭했을 때 아래 기능을 실행
// 프로모션 요소에 'hide'라는 클래스 값이 있으면 보임 처리!('hide' 클래스를 제거하고 아이콘 모양을 'upload'로 설정)
// 그렇지 않으면 숨김 처리!('hide' 클래스를 추가하고 아이콘 모양을 'download'로 설정)

promotionToggleBtn.addEventListener('click',function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
    promotionToggleIcon.textContent = 'upload';
  } else {
    promotionEl.classList.add('hide');
    promotionToggleIcon.textContent = 'download';
  }

});

//유튜브 섹션 위에 부유 요소 애니메이션 처리
// gsap.to(요소, 지속시간, 옵션:{})
// 옵션 참고:
gsap.to('.floating1', 1.5,{
  delay:1, // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정
  y: 15,   //수직으로 얼마나 움직일지 설정, transform: translateY(수치)
  repeat: -1,
  yoyo: true,  //한번 재생된 애니메이션을 다시 뒤로 재생
  ease:Power1.easeInOut //타이밍 함수 적용, 느리게- 빠르게- 느리게
});

// 지속시간, delay, y를 자유롭게 변경하여 계산하기
gsap.to('.floating2', 1.5,{
  delay:1.4, 
  y: 20,   
  repeat: -1,
  yoyo: true,  
  ease:Power1.easeInOut 
});

gsap.to('.floating3', 2.5,{
  delay:1.4, 
  y: 30,   
  repeat: -1,
  yoyo: true,  
  ease:Power1.easeInOut 
});