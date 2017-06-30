$(document).ready(function(){
    var form = $('#ajaxform');

    var formMessages = $('#form-messages');


    $(form).submit(function(event) {
        var formData = $(form).serialize();
        event.preventDefault();
        $("#submit").addClass("loading");
        $.ajax({
            type: 'GET',
            url: $(form).attr('action'),
            data: formData
        }).done(function(response) {
            $("#submit").removeClass("loading");
            $(".emptystate").fadeOut();

            $(formMessages).html(response);

        }).fail(function(data) {
            $("#submit").removeClass("loading");
            $(".emptystate").fadeOut();

            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });

    });

    $("#loc").geocomplete({
        location: 'Dublin',
        details:"form"
    });

});
