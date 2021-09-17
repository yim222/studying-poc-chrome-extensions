console.log("hi admin");
// chrome.storage.local.set({ 'username': 'lin', 'password': '1234' });
// chrome.storage.local.set({'username': 'lin'});
//
// console.log("usernmae = " + chrome.storage.get('username') + " |password = " + chrome.storage.local.get('password'));

localStorage.setItem( 'username', 'lin');
localStorage.setItem( 'password', '1234');
console.log("username = " + localStorage.getItem('username') + " |password = " +localStorage.getItem('password'));
// chrome.storage.local.get(["mykey"], function(fetchedData) {
//     window.alert("fetched: " + fetchedData.mykey);
// });

chrome.storage.local.get(function(fetchedData) {
    console.log("fetched2: " + fetchedData.mykey);
    console.log("fetched3: " + fetchedData.abc);

});


let insertData = function () {
    // alert("hi11");

    let els = document.querySelectorAll('input');
    let event = new Event('input', {bubbles: true});
    $("input[name='username']").attr("value", "lingar");
    els[0].dispatchEvent(event);

    $("input[name='password']").attr("value", "new26Way");
    els[1].dispatchEvent(event);
    // return  Promise.resolve();

}
function clickButton(){
    // alert("hi")
    $("button").click();



}

$(document).ready(function(){
    let callbacks = $.Callbacks();
    callbacks.add(insertData);
    callbacks.add(clickButton);

    //this will fire the callbacks in the correct order
    callbacks.fire();
});