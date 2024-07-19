$(function() {
    $('div.label').click(function() {
        // outerWidth는 패딩/마진값을 포함한 크기 : 바깥쪽 크기
        const pWidth = $('div.speech p').outerWidth();
        const divWidth = $('#switcher').outerWidth();

        console.log(pWidth + " : " + divWidth);

        const num = parseInt(pWidth) - parseInt(divWidth);

        $('#switcher').fadeTo('fast', 0.5).animate({
            marginLeft : num
        }, 'slow').slideUp('slow', function() {
            $(this).css('background', 'red')
        }).slideDown('slow');

    })
})

// read more => 클릭 => read less
// read less => 클릭 => read more
// text(값) : 텍스트 값을 변경, text() : 텍스트 값을 추출
$(function() {
    // 2번째 p 태그를 화면에서 숨김 : hide()
    $("div.speech p").eq(1).hide();
    // <a> read more</a> => 클릭 : 사라진 p태그 화면 보임
    $("a.more").click(function() {
        // slidUp() + sildeDown() => slideToggle()
        $("div.speech p").eq(1).slideToggle('slow');
        // jQuery 객체임을 명시해주기 위해 변수명 앞에 $표시 붙여줌
        const $link = $(this);

        if ($link.text() == 'read more') {
            $link.text("read less");
        } else {
            $link.text("read more");
        }
    });

})

// large => 기존 폰트 크기 1.2배 커지도록
// small => 기존 폰트 크기 1.2배 작아지도록
// default => 처음 글자 크기
// css('fontSize'), css('fontSize', 12px);

$(function() {
    const $speechText = $("div.speech");
    const defaultFontSize = parseInt($speechText.css("fontSize"));

    $("#switcher button").click(function() {
        let num = parseInt($speechText.css("fontSize"));
        switch (this.id) {
        case "switcher-large":
            num *= 1.2;
            break;
        case "switcher-small":
            num /= 1.2;
            break;
        case "switcher-default":
            num = defaultFontSize;
            break;

        default:
            break;
        }

        $speechText.fadeTo('fast').animate({
            'fontSize' : num + 'px'
        }, 'slow');
    })

})