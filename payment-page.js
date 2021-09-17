console.log("hi admin");




let changes = function () {
    // alert("hi11");

    let els = document.querySelectorAll('input');
    let event = new Event('input', {bubbles: true});
    $("input[name='username']").attr("value", "lingar");
    els[0].dispatchEvent(event);

    $("input[name='password']").attr("value", "new26Way");
    els[1].dispatchEvent(event);
    // return  Promise.resolve();

}
function func1(){
    // alert("hi")
    $("button").click();
}

$(document).ready(function(){
    let callbacks = $.Callbacks();
    callbacks.add(changes);
    callbacks.add(func1);
    callbacks.fire();
    callbacks.fire();



});