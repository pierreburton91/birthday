$(document).ready(function() {
    var texts = ['Hey Clarice', ', we heard it\'s your birthday', 'Happy birthday ! 🎂'],
        i = 0,
        y = 0;
    $('#amount-number').animateNumber({
        number : 300,
        easing: 'swing'
    }, 
    5000,
    function() {
        // End callback
    });
    
});

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}