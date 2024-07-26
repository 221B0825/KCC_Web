$(function() {
    $(window).on('load', function() {
        $.ajax({
            url: 'server.jsp',
            type: 'get',
            dataType: 'json',
            success: function(data) {
                if (data && Array.isArray(data)) {
                    data.forEach(function(comment) {
                        const commentHtml = `
                        <div class="blog">
                            <div class="title"> title: ${comment.title} writer: ${comment.writer}</div> <br/>
                            <div class="contents">${comment.contents}</div>
                            <input type="button" class="delete-button" value="delete" />
                            </div>
                        `;
                        $('#list').append(commentHtml);
                    });
                }
            }
        });
    });
});

$(function() {
    $('form').submit(function(event) {
        event.preventDefault(); 

        const title = $('input[name="title"]').val();
        const writer = $('input[name="writer"]').val();
        const contents = $('input[name="contents"]').val();

        $.ajax({
            url: 'server.jsp',
            type: 'post',
            data: {
                title: title,
                writer: writer,
                contents: contents
            },
            dataType: 'json',
            success: function(data) {
                console.log("data"+data);
                const newComment = `
                    <div class="blog">
                        <div class="title"> title: ${title} writer: ${writer}</div> <br/>
                        <div class="contents">${contents}</div>
                        <input type="button" class="delete-button" value="delete" />
                    </div>
                `;
                $('#list').append(newComment);
         
            }
        });
    });
});

$(function(){
    $('#list').on('click', '.delete-button', function() {
        $(this).closest('.blog').remove();
    });
})
