var t=setInterval(getDiff, 50);

function getDiff() {
    // thank you to https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript 
    // https://www.geeksforgeeks.org/how-to-change-the-text-of-a-label-using-javascript/
    // https://stackoverflow.com/questions/5638783/how-do-i-get-this-javascript-to-run-every-second

    var today = new Date();
    var target = new Date('12/15/2021'); // INPUT TARGET DATE HERE

    var timeleft = target - today;
    if(timeleft > 0) {
                    
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.floor((timeleft % (1000 * 60)) / 1000);

        var timeRem = days + " day(s) | " + hours + " hour(s) | " + mins + " minute(s) | " + sec + " second(s)";

        var label = document.getElementById("remaining");
        label.innerHTML = timeRem;
    } else {
        label.innerHTML = "Decisions out";
        var cont = document.getElementById('reCont');
        cont.style.animation = null;
    }

    // console.log(diffTime + " milliseconds");
    // console.log(timeRem);

    /* STAGES OF SHAKY:
        2592000000 MS (30 days) slightlyshaky
        1209600000 MS (14 days) slightlyshakier
        604800000 MS (7 days) slightlyshakiest
        259200000 MS (3 days) shakier
        86400000 MS (1 day) shakierer
        43200000 MS (12 hours) shakierest
        21600000 MS (6 hours) shakiest
        3600000 MS (1 hour) shakiestest
    */
}