//STEP1 html 
$(function() {
    $("#letter-a a").click(function() {
        $("#dictionary").hide().load("a.html", function() {
            $(this).fadeIn();
        });

        return false;
    });
});
// load 는 선택자의 자식으로 받아온 html을 붙인다.

// STEP2-1
// getJson => ajax 사용
$(function() {
    $("#letter-b a").click(
            function() {
                $.ajax({
                    url : "b.json",
                    type : 'get',
                    dataType : "json",
                    success : function(data) {
                        $("#dictionary").empty();

                        // 내림차순 정렬
                        data.sort(function(a, b) {
                            if (a.term < b.term) {
                                return 1;
                            } else if (a.term > b.term) {
                                return -1;
                            } else {
                                return 0;
                            }
                        });

                        // 결과값 배열 => [{}, {}, {}] => html
                        $.each(data,
                                function(index, item) {
                                    let html = '<div class="entry">';
                                    html += '<h3 class="term">' + item.term
                                            + '</h3>';
                                    html += '<div class="part">' + item.part
                                            + '</div>';
                                    html += '<div class="definition">'
                                            + item.definition + '</div>';
                                    html += '</div>';

                                    $('#dictionary').append(html);
                                });
                    }
                });

                return false;
            });
});

// STEP2 json
// $(function() {
// $("#letter-b a").click(function() {
// $.getJSON("b.json", function(data) {
// $("#dictionary").empty();
// // 결과값 배열 => [{}, {}, {}] => html
// $.each(data, function(index, item) {
// let html = '<div class="entry">';
// html += '<h3 class="term">' + item.term + '</h3>';
// html += '<div class="part">' + item.part;
// +'</div>';
// html += '<div class"definition">' + item.definition + '</div>';
// html += '</div>';
//
// $('#dictionary').append(html);
// });
// });
//
// return false;
// });
// });

// STEP3 js
$(function() {
    $('#letter-c a').click(function() {
        $.getScript('c.js'); // 스크립트 소스코드 읽기

        return false;
    });
});

// STEP4 XML
$(function() {
    $('#letter-d a').click(
            function() {
                // xml => html 변환
                $.get('d.xml', function(data) {
                    $("#dictionary").empty(); // 내부에 내용 지우기

                    // jQuery 객체로 변환, find로 entry 태그 가져오기, entry들 순회하기 each
                    $(data).find('entry').each(
                            function(index) {
                                $entry = $(this);
                                let html = '<div class="entry">';
                                html += '<h3 class="term">'
                                        + $entry.attr('term') + '</h3>';
                                html += '<div class="part">'
                                        + $entry.attr('part') + '</div>';
                                html += '<div class="defnition">'
                                        + $entry.find('definition').text()
                                        + '</div>';
                                $('#dictionary').append(html);

                            });
                });
                return false;

            });
});

// STEP5 데이터값을 서버로 보내기 key Value값으로 보낸다.
$(function() {
    $('#letter-e a').click(function() {
        $.get('server3.jsp', {
            'term' : $(this).text()
        }, function(data) {
            $('#dictionary').text(data);
        }); // 스크립트 소스코드 읽기

        return false;
    });
});

// STEP6
$(function() {
    $('#letter-f form').submit(function() {
        $.ajax({
            url : 'server3.jsp',
            type : 'post',
            data : $(this).serialize(),
            dataType : 'text',
            success : function(data) {
                $('#dictionary').text(data);
            }
        })
        return false;
    });
});
