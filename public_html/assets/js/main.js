$(document).ready(function(){
    
    var getMax = function(){
        return $(document).height() - $(window).height();
    }
    
    var getValue = function(){
        return $(window).scrollTop();
    }
    
    if('max' in document.createElement('progress')){
        // Browser supports progress element
        var progressBar = $('progress');
        
        // Set the Max attr for the first time
        progressBar.attr({ max: getMax() });

        $(document).on('scroll', function(){
            // On scroll only Value attr needs to be calculated
            progressBar.attr({ value: getValue() });
        });
      
        $(window).resize(function(){
            // On resize, both Max/Value attr needs to be calculated
            progressBar.attr({ max: getMax(), value: getValue() });
        });   
    }
    else {
        var progressBar = $('.progress-bar'), 
            max = getMax(), 
            value, width;
        
        var getWidth = function(){
            // Calculate width in percentage
            value = getValue();            
            width = (value/max) * 100;
            width = width + '%';
            return width;
        }
        
        var setWidth = function(){
            progressBar.css({ width: getWidth() });
        }
        
        $(document).on('scroll', setWidth);
        $(window).on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        });
    }
    new WOW().init();


    $('#contact_form').validate({ // initialize the plugin
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
        submitHandler: function (form) { // for demo
            form_data = $('#contact_form').serialize();
            $.post('send_form_email.php', form_data, function(data, textStatus, xhr) {
                $('.contact_form').fadeOut('300');
                $('.success').delay(400).fadeIn('600');
                max = getMax();
            });
            return false; // for demo
        }
    });

});