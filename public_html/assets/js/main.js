$(document).ready(function(){

    if ($(window).width() > 767) {
        new WOW().init();
    }; 
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
            });
            return false;
        }
    });

// disable :hover on touch devices
// based on http://retrogamecrunch.com/tmp/hover-fix
// via https://gist.github.com/4404503
// + https://twitter.com/javan/status/284873379062890496
// + https://twitter.com/pennig/status/285790598642946048
// re http://retrogamecrunch.com/tmp/hover
if ('createTouch' in document) {
    try {
        var pattern = /:hover\b/,
        sheet, rule, selectors, newSelector,
        selectorAdded, newRule, i, j, k;
 
        for (i=0; i<document.styleSheets.length; i++) {
            sheet = document.styleSheets[i];
 
            for (j=sheet.cssRules.length-1; j>=0; j--) {
                rule = sheet.cssRules[j];
 
                if (rule.type !== CSSRule.STYLE_RULE || !pattern.test(rule.selectorText)) {
                    continue;
                }
 
                selectors = rule.selectorText.split(',');
                newSelector = '';
                selectorAdded = false;
 
                // Iterate over the selectors and test them against the pattern
                for (k=0; k<selectors.length; k++) {
                    // Add string to the new selector if it didn't match
                    if (pattern.test(selectors[k])) {
                        continue;
                    }
 
                    if (!selectorAdded) {
                        newSelector += selectors[k];
                        selectorAdded = true;
                    } else {
                        newSelector += ", " + selectors[k];
                    }
                }
 
                // Remove the rule, and add the new one if we've got something
                // added to the new selector
                if (selectorAdded) {
                    newRule = rule.cssText.replace(/([^{]*)?/, newSelector + ' ');
 
                    sheet.deleteRule(j);
                    sheet.insertRule(newRule, j);
                } else {
                    sheet.deleteRule(j);
                }
            }
        }
    } catch(e){}
}


var currentScroll = $(window).scrollTop();
$(window).scroll(function() {
    if ($(window).scrollTop() < 400 || $(window).scrollTop() > 200 && currentScroll > $(window).scrollTop()) {
        $('.mobile-nav').addClass('active');

    } else {
        $('.mobile-nav').removeClass('active');

    }
    currentScroll = $(window).scrollTop();
});




});