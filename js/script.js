// $(document).ready(function () {
// 	common_load(); // 문서로드
// 	Swiper_event(); // 슬라이드 이벤트
// 	selectBox(); // 셀렉트 박스 이벤트
// 	// aside_event () // 사이드바 이벤트
// 	tab_event(); // 탭 메뉴 이벤트
// 	btnClick_event(); // 클릭 이벤트
// });

$(document).ready(function () {
	$('.footer').load('footer.html', function () {
		console.log('들어옴');
	});
	$('.header').load('header.html', function () {});
});
