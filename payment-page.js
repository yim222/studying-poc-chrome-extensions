

console.log("hi admin");
//
// $(document).ready(function(){
//     const title = $("#question-header").children("h1").text();
//     console.log("Welcome to practical software extension. This is stackoverflow page with -  title:\n \"" +  title + "\"");
// });

$(document).ready(function() {
    // var e = jQuery.Event("keydown");
    // e.which = 50; // # Some key code value
    // $("input").trigger(e);
    $("input[name='password']").change(function() {
        console.log("Input text changed!");
            alert("j")
            $("button").trigger('click');
    });
    $("input[name='username']").attr("value", "lingar");
    // $("input[name='password']").val("new26Way").change(function (){
    //     alert("j")
    //     $("button").trigger('click');
    //
    // });
    $("input[name='password']").change();
    $("input[name='password']").attr('value', 'new26Way').on("load",function(){ //fires each time when image loaded

        alert("j")
        $("button").trigger('click');

    });





});