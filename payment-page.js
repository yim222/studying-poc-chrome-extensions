console.log("hi admin");
//
// $(document).ready(function(){
//     const title = $("#question-header").children("h1").text();
//     console.log("Welcome to practical software extension. This is stackoverflow page with -  title:\n \"" +  title + "\"");
// });

$(document).ready(function () {
    // var e = jQuery.Event("keydown");
    // e.which = 50; // # Some key code value
    // $("input").trigger(e);
    // $("input[name='password']").change(function () {
    //     console.log("Input text changed!");
    //     alert("j")
    //     $("button").trigger('click');
    // });
    // $("input[name='username']").attr("value", "lingar");
    // $("input[name='username']").trigger("input");
    // // $("input[name='password']").val("new26Way").change(function (){
    // //     alert("j")
    // //     $("button").trigger('click');
    // //
    // // });
    // $("input[name='password']").change();
    // $("input[name='password]'").attr('value', 'new26Way').on("load", function () { //fires each time when image loaded
    //     $("input[name='password']").trigger("input");

// });
    let els = document.querySelectorAll('input');
    let event = new Event('input', { bubbles: true });
    $("input[name='username']").attr("value", "lingar");
    els[0].dispatchEvent(event);

    $("input[name='password']").attr("value", "new26Way");
    els[1].dispatchEvent(event);

    // $("input[name='username']").attr("value", "lingar").trigger("input");
    // $("input[name='password']").attr("value", "new26Way").trigger("input");
    // $("input[name='username']").trigger("keypress") // you can trigger keypress like this if you need to..
    //     .val("lingar");
    //
    // $("input[name='password']").trigger("keypress") // you can trigger keypress like this if you need to..
    //     .val("new26Way");

    // https://stackoverflow.com/questions/15545557/how-to-trigger-an-input-event-with-jquery/44178094


    // els[0].setAttribute("value","lingar");

    // els[1].setAttribute("value","new26Way");

});