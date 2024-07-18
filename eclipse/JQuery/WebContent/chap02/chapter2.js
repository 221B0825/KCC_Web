$(function() {
	$("#selected-plays>li").addClass('horizontal');

	$("li:not(.horizontal)").addClass('sub-level');

	// ^ 시작
	$("a[href ^='mailto']").addClass("mailto");
	// $ 끝
	$("a[href $='pdf']").addClass("pdflink");

	// * 포함
	$("a[href *='henry']:not(.mailto)").addClass("henrylink");

	// not은 not 함수도 존재함 => select 함수에서 반환된 2개의 a태그 중 not을 통해 1개로 변경
	$("a[href *='henry']").not('.mailto').addClass("henrylink");
	
	// 홀수번인데, 눈으로 볼 땐 짝수임. 왜냐하면 0부터 시작해서
//	$("table tr:odd").css("alt");
	
	// 얘도 홀수번, 눈으로 볼 땐 짝수번호로 보임
//	$('tr').filter(':odd').addClass('alt');
	
	// 그러나 nth-child를 사용하면 눈으로 보는 기준이기 때문에 홀수번호로 보임
	$('tr:nth-child(odd)').addClass("alt");
	
	// Henry "text"값을 포함하는 td들
//	$("td:contains('Henry')").addClass('highlight');
	
	// ~ : 형제들
//	$("td:contains('Henry') ~ td").addClass('highlight');
	
	// 이 다음 요소들: nextAll()
//	$("td:contains('Henry')").nextAll().addClass('highlight');
	
	// andSelf() : 집합을 옮기기 이전의 요소도 다 함께 하는 것.
//	$("td:contains('Henry')").nextAll().andSelf().addClass('highlight');
	
	// => 같은 결과로, 부모 요소로 가서 부모 기준 모든 자식 요소를 선택하면 됨
//	$("td:contains('Henry')").parent().find('td').addClass('highlight');
	
	// => 사극, 부모에게 가서 첫 번째 셀과 두 번째 셀에 적용
	$("td:contains('Henry')").parent().find('td:first').addClass('highlight')
	.end().find('td:eq(1)').addClass('highlight');
	
	
	// each() => 배열을 받아서 각각의 작업을 수행, item에는 배열의 각 요소
	// 1) $.each(배열, function(index, item){ 배열의 각 요소의 작업 수행})
	// 선택자의 각 요소가 item에 하나씩 들어감
	// 2) $('선택자').each(function(index, item) {각 요소들의 작업 수행})
	
})