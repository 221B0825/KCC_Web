// step1
/**
 * $(function(){ $('#switcher-large').on("click", function(){
 * $('body').addClass("large"); }) });
 */

// step2 => Large Print => large, Narrow Column => narrow, Default => 처음
// addCalss('클래스명'), removeClass('클래스명')
$(function() {

	// step3 : 클릭한 버튼만 selected 스타일 적용
	// step4 : 중복 코드 최적화
	// $('#switcher-default').on("click", function() {
	// $('body').removeClass();
	// });
	//
	// $('#switcher-large').on("click", function() {
	// $('body').removeClass().addClass("large");
	// });
	//
	// $("#switcher-narrow").on("click", function() {
	// $('body').removeClass().addClass("narrow");
	// });
	//	
	//	
	// $('#switcher .button').on("click", function(){
	// $(".button").removeClass("selected");
	// $(this).addClass("selected");
	// })

	// step5 : 전체적으로 최적화
	// $('#switcher .button').on("click", function() {
	// $(".button").removeClass("selected");
	// $(this).addClass("selected");
	// $('body').removeClass();
	//
	// if (this.id == 'switcher-large') {
	// $('body').addClass('large');
	// } else if (this.id == 'switcher-narrow') {
	// $('body').addClass("narrow");
	// }
	// })

	// step7
	$('.button').hover(function() {
		$(this).addClass('hover') // 마우스를 올렸을 때 색상
	}, function() {
		$(this).removeClass('hover'); // 마우스를 뗐을 때 색상
	});

	// step6 : 이벤트 통합 함수 사용 => 개별 이벤트 함수

	// step8 : <h3>스타일 변환기</h3> 클릭했을 때 버튼을 사라지게 해 보기
	// $('#switcher h3').click(function(){

	/**
	 * step9 : 이벤트 버블링 방지
	 * 
	 * $('#switcher').click(function(){ $("#switcher
	 * .button").toggleClass('hidden'); })
	 * 
	 * $('#switcher .button').click(function(event) {
	 * $(".button").removeClass("selected"); $(this).addClass("selected");
	 * $('body').removeClass();
	 * 
	 * if (this.id == 'switcher-large') { $('body').addClass('large'); } else if
	 * (this.id == 'switcher-narrow') { $('body').addClass("narrow"); } // ->
	 * 이벤트 버블링 방지 event.stopPropagation(); })
	 */

	// step10: 통합 on 함수 변경 => off('click');
	// large, narrow 버튼을 클릭 후 "버튼이 사라지게 하는 이벤트" 해제
	$('#switcher').on('click.hidden', function() {
		$("#switcher .button").toggleClass('hidden');
	})

	$('#switcher .button').click(function(event) {
		$(".button").removeClass("selected");
		$(this).addClass("selected");
		$('body').removeClass();

		if (this.id == 'switcher-large') {
			$('body').addClass('large');
		} else if (this.id == 'switcher-narrow') {
			$('body').addClass("narrow");
		}
		// -> 이벤트 버블링 방지
		event.stopPropagation();
	})
	
	$('#switcher').on('click.alert', function(){
		alert('다른 이벤트 발생');
	})

	$('#switcher-large, #switcher-narrow').click(function() {
		$('#switcher').off('click.hidden');
	})
	
	$('#switcher').trigger('click.hidden');
})
