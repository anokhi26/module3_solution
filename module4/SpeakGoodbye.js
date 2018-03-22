(function (Window){

    var byeSpeaker = {};
    byeSpeaker.speakWord = "Good Bye";
    byeSpeaker.speak = function (name) {
        console.log(byeSpeaker.speakWord + " " + name);
    }
    Window.byeSpeaker = byeSpeaker;
})(Window);