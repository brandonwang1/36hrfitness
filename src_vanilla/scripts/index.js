$(document).ready(function(){

    $( "#create" ).hide();
    $( "#join" ).hide();
    // $(" #leaderboard").hide();
    $( "#button" ).click(function() {
        console.log("feefe")
        $("#create").stop().fadeToggle("slow");
        $("#leaderboard").stop().fadeToggle("slow");

        $("#join").stop().fadeToggle("slow");
        // window.location.href = 'panels.html';
        return false;
    });

    $( "#create" ).click(function() {
        window.location.href = 'panels.html';
        return false;
    });

    $( "#join" ).click(function() {
        window.location.href = 'roomslist.html';
        return false;
    });

    // $( "#leaderboard" ).click(function() {
    //     window.location.href = 'leaderboard.html';
    //     return false;
    // });

});