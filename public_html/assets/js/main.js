$(document).ready(function(){
    
    new WOW().init();


    $('#contact_form').validate({ 
        rules: {
            full_name: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            }
        },
        submitHandler: function (form) { 
            form_data = $('#contact_form').serialize();
            $.post('send_form_email.php', form_data, function(data, textStatus, xhr) {
                $('.contact_form').fadeOut('300');
                $('.success').delay(400).fadeIn('600');
                max = getMax();
            });
            return false;
        }
    });

});

jQuery(document).ready(function($) {

  $(function() {
    $('a[href*=#]:not([href=#], .accordion-toggle)').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
});

$('.bio').tooltip();
