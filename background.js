
chrome.runtime.onInstalled.addListener(function (){

    // var storage = chrome.storage ;
    // console.log("storage is " , storage) ;
    // storage.local.set({"a":"1" });
    // console.log("storage is " , storage) ;
    chrome.storage.local.set({"mykey": "aaaa"}, function (){


    });



});

