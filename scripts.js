function sendText(i, texts) {
    if (i < texts.length) {
        showSpinner()
        $('.text-messages').append('<p id="'+ i +'">'+ texts[i] +'</p>');
        setTimeout(function() {
            $('#'+i).addClass('show');
            i++;
            hideSpinner();
            sendText(i, texts);
        }, texts[i].length*150);
    }
    else {
        hideSpinner();
        $('.text-messages').append('<button id="ready-button">Yes, I\'m ready ! Show me my gift !</button>');
        setTimeout(function() {
            $('#ready-button').fadeIn().focus();
        }, 3000);
        
    }
}
function showSpinner() {
    $('.text-messages').append('<p id="spinner"><span class="spinner"></span></p>');
    setTimeout(function() {
        $('#spinner').addClass('show');
    }, 200);
}
function hideSpinner() {
    $('#spinner').remove();
}

$(document).ready(function() {
    var texts = ['Hey Clarice !', 'I heard it\'s your birthday so...', 'Happy birthday ! 🎂', 'Your family and friends gathered around you today to offer you a super gift !', 'We\'re sorry for the waiting though, but it\'s totally worth it !', 'So...', 'Are you ready ? 👀'],
        i = 0;

    setTimeout(function() {
        sendText(i, texts);
    }, 3000);

    $(document).on('click', '#ready-button', function() {
        $('#ready-button').fadeOut();
        $('.text-messages').append('<p id="ready">Yes, I\'m ready ! Show me my gift !</p>');
        setTimeout(function() {
            $('#ready').addClass('show');
        }, 500);
        setTimeout(function() {
            $('.text-messages').fadeOut(function() {
                $('#video')[0].play();
                $('.overlay, #video').css('opacity', 1);
                $('.gift').fadeIn(function() {
                    setTimeout(function() {
                        $('#amount-number').animateNumber({
                            number : 605,
                            easing: 'swing'
                        }, 
                        5000);
                    }, 1000);
                });
            });
        }, 2000);
    })
});
