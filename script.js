var t=setInterval(getDiff, 50);

function getDiff() {
    // thank you to https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript 
    // https://www.geeksforgeeks.org/how-to-change-the-text-of-a-label-using-javascript/
    // https://stackoverflow.com/questions/5638783/how-do-i-get-this-javascript-to-run-every-second

    var today = new Date();
    var target = new Date('12/15/2021'); // INPUT TARGET DATE HERE

    var diffTime = target - today;
    if(diffTime > 0) {
        var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
        var reDays = diffTime - (diffDays*1000 * 60 * 60 * 24);
        // console.log(reDays);

        var diffHours = Math.floor(reDays / (1000 * 60 * 60)) - 1; // was over by an hour for some reason
        var reHours = diffTime % (1000 * 60 * 60);
        // console.log(reHours);

        var diffMins = Math.floor(reHours / (1000 * 60));
        var reMins = diffTime % (1000 * 60);

        var diffSecs = Math.floor(reMins / 1000);

        var timeRem = diffDays + " day(s) | " + diffHours + " hour(s) | " + diffMins + " minute(s) | " + diffSecs + " second(s)";

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