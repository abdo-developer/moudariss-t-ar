
// Dyanamique Date Year Footer -- Copyright


jQuery(function () {

    $("#copyright").text(" © جميع الحقوق محفوظة للموقع الرسمي | 2020 - " + new Date().getFullYear());

    $('.timer').countTo();

    $("a.scroll").on('click', function(event){

        var hash = this.hash;

        $('html,body').animate({scrollTop: $(hash).offset().top},800,function(){})
    });


    // Slider Range Experience Years min : 2 years - max : 50 years

    $( "#slider-range" ).slider({
        range: true,
        min: 2,
        max: 50,
        values: [ 5, 20 ],
        slide: function( event, ui ) {
            $( "#experience" ).val(ui.values[ 0 ] +  " سنوات "  +  "  -  " + ui.values[ 1 ] + " سنوات " );
        }
        });
        $( "#experience" ).val( $( "#slider-range" ).slider( "values", 0 ) + " سنوات" +
        "  -  " + $( "#slider-range" ).slider( "values", 1 ) + " سنوات " );

    
    // Slider Range Price min : 50 Dollar - max : 1000 Dollar
    
    $( "#slider-range-one" ).slider({
    range: true,
    min: 50,
    max: 1000,
    values: [ 50, 1000 ],
    slide: function( event, ui ) {
        $( "#Price" ).val(ui.values[ 0 ] +  " دولار "  +  "  -  " + ui.values[ 1 ] + " دولار " );
    }
    });
    $( "#Price" ).val( $( "#slider-range-one" ).slider( "values", 0 ) + " دولار" +
    "  -  " + $( "#slider-range-one" ).slider( "values", 1 ) + " دولار " );


});


