

console.log("hi social-events");
//
// $(document).ready(function(){
//     const title = $("#question-header").children("h1").text();
//     console.log("Welcome to practical software extension. This is stackoverflow page with -  title:\n \"" +  title + "\"");
// });

$(document).ready(function() {
    $( "<button id ='btn1'>Test</button>" ).insertAfter( "h1" );
    $("#btn1").click(function(){
        // alert("The paragraph was clicked.");
        window.location.replace("http://social-events222.com/login");

    });
});