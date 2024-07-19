$(function() {
    // 1. <ol id="note"></ol> => 생성해서 => <div id="footer"> 앞에 위치하도록 하자.
    $('<ol id="note"></ol>').insertBefore($("#footer"));
    
    // 2. <span class="footnote"> 앞에 <a id="">[1]</a>
    // 3. <ol> 태그 자식으로 <span> 이동
    $('span.footnote').each(function(index, item){
       $(this).before($('<a id="context-'+(index+1)+'">['+(index+1)+']</a>'));
       $(this).appendTo($("ol#note")).append($('$nbsp; <a href="#context-'+(index+1)+'">['+(index+1)+']</a>'))
       .wrap('<li></li>');
            });

})