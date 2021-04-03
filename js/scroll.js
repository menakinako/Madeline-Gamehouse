$("nav").find("#join").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

$().ready(function(){
    $('[rel="tooltip"]').tooltip();

});

