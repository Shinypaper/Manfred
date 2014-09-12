$(document).ready(function(){
    
    new WOW().init();
        $('#contact_form').validate({ 
            rules: {
                full_name: {
                    required: true
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