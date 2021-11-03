$(function () {
    $('.preloader').hide();

    // Home Slider
    $(".home-slider").owlCarousel({
        loop: true,
        nav: true,
        center: true,
        items: 1,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000
    });

});
$(function(){
    $('.selectpicker').selectpicker();
});
$(document).on("scroll", function(){

    if ($(document).scrollTop() > 80){
      $("header").addClass("shrink");
    } else {
      $("header").removeClass("shrink");
    }

  });

$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {


        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                beforeSend: function () {
                    $("#spinner").removeClass("d-none").show();
                },
                complete: function () {
                    $("#spinner").addClass("d-none").hide();
                },
                success: function (data) {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        if(data.type == 'success'){
                            $('#contact-form')[0].reset();
                        }

                    }
                }
            });
            return false;
        }
    })

});


$(function() {
    $('#change_lang').on('change', function() {
        window.location.href = window.location.pathname+"?"+$.param({'lang': $(this).val()})
    });
});
