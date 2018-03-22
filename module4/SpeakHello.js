(function (Window){

    var helloSpeaker = {};
    helloSpeaker.speakWord = "Hello";
    helloSpeaker.speak = function (name) {
        console.log(helloSpeaker.speakWord + " " + name);
    }
    Window.helloSpeaker = helloSpeaker;
})(Window);