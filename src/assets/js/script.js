
// Dyanamique Date Year Footer -- Copyright


jQuery(function () {

    $("#copyright").text(" © جميع الحقوق محفوظة للموقع الرسمي | 2020 - " + new Date().getFullYear());

    $('.timer').countTo();

    $("a.scroll").on('click', function(event){

        var hash = this.hash;

        $('html,body').animate({scrollTop: $(hash).offset().top},800,function(){})
    });

});


