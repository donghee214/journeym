$(document).ready(function () {
    setTimeout(function () {
        $(".logo").transition({ opacity: 1 }, 4000);
    }, 1000);
    setTimeout(function () {
        $(".button").transition({ opacity: 1 }, 4000);
    }, 3000);

    $(".beginPres").click(function () {
        $(".beginPres").transition({ opacity: 0 }, 2000, function(){
            alert("hello");
        });
    })

})