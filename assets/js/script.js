/*SETTING EACH COUNTDOWN*/
var count_0 = new Date("Dec 25, 2019 00:00:00").getTime();
var count_1 = new Date("Mar 30, 2019 18:00:00").getTime();
var count_2 = new Date("Apr 01, 2019 00:00:00").getTime();
var count_3 = new Date("Apr 03, 2019 09:00:00").getTime();
var count_4 = new Date("Apr 12, 2019 17:00:00").getTime();
var count_5 = new Date("Apr 14, 2019 16:00:00").getTime();
var count_6 = new Date("Mar 31, 2019 00:00:00").getTime();
var count_7 = new Date("Apr 12, 2019 00:00:00").getTime();

var x = setInterval(function() {

    /*SETTING THE CURRENT TIME*/
    var now = new Date().getTime();

    /*SETTING TIMER FOR EACH COUNTDOWN*/
    var t_0 = count_0 - now;
    var t_1 = count_1 - now;
    var t_2 = count_2 - now;
    var t_3 = count_3 - now;
    var t_4 = count_4 - now;
    var t_5 = count_5 - now;
    var t_6 = count_6 - now;
    var t_7 = count_7 - now;

    /*SETTING TIME VARIABLES*/
    var days0 = Math.floor(t_0 / (1000 * 60 * 60 * 24));
    var hours0 = Math.floor((t_0 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes0 = Math.floor((t_0 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds0 = Math.floor((t_0 % (1000 * 60)) / 1000);

    var days1 = Math.floor(t_1 / (1000 * 60 * 60 * 24));
    var hours1 = Math.floor((t_1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes1 = Math.floor((t_1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds1 = Math.floor((t_1 % (1000 * 60)) / 1000);

    var days2 = Math.floor(t_2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((t_2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((t_2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((t_2 % (1000 * 60)) / 1000);

    var days3 = Math.floor(t_3 / (1000 * 60 * 60 * 24));
    var hours3 = Math.floor((t_3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes3 = Math.floor((t_3 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds3 = Math.floor((t_3 % (1000 * 60)) / 1000);

    var days4 = Math.floor(t_4 / (1000 * 60 * 60 * 24));
    var hours4 = Math.floor((t_4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes4 = Math.floor((t_4 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds4 = Math.floor((t_4 % (1000 * 60)) / 1000);

    var days5 = Math.floor(t_5 / (1000 * 60 * 60 * 24));
    var hours5 = Math.floor((t_5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes5 = Math.floor((t_5 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds5 = Math.floor((t_5 % (1000 * 60)) / 1000);

    var days6 = Math.floor(t_6 / (1000 * 60 * 60 * 24));
    var hours6 = Math.floor((t_6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes6 = Math.floor((t_6 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds6 = Math.floor((t_6 % (1000 * 60)) / 1000);

    var days7 = Math.floor(t_7 / (1000 * 60 * 60 * 24));
    var hours7 = Math.floor((t_7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes7 = Math.floor((t_7 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds7 = Math.floor((t_7 % (1000 * 60)) / 1000);

    /*SETTING EACH COUNTDOWN TO THE INDEX.HTML*/
    document.getElementById("christmas").innerHTML = days0 + "d " +
        hours0 + "h " + minutes0 + "m " + seconds0 + "s ";
    if (t_0 < 0) {
        clearInterval(x);
        document.getElementById("mentor").innerHTML = "CHRISTMAS!";
    }

    document.getElementById("sasbday").innerHTML = days1 + "d " +
        hours1 + "h " + minutes1 + "m " + seconds1 + "s ";
    if (t_1 < 0) {
        clearInterval(x);
        document.getElementById("sasbday").innerHTML = "LEAVE SOON!";
    }

    document.getElementById("birthday").innerHTML = days2 + "d " +
        hours2 + "h " + minutes2 + "m " + seconds2 + "s ";
    if (t_2 < 0) {
        clearInterval(x);
        document.getElementById("birthday").innerHTML = "HAPPY BIRTHDAY!";
    }

    document.getElementById("driving").innerHTML = days3 + "d " +
        hours3 + "h " + minutes3 + "m " + seconds3 + "s ";
    if (t_3 < 0) {
        clearInterval(x);
        document.getElementById("driving").innerHTML = "DRIVING LESSON!";
    }

    document.getElementById("flavours").innerHTML = days4 + "d " +
        hours4 + "h " + minutes4 + "m " + seconds4 + "s ";
    if (t_4 < 0) {
        clearInterval(x);
        document.getElementById("flavours").innerHTML = "FLAVOURS TONIGHT!";
    }

    document.getElementById("comez_event").innerHTML = days5 + "d " +
        hours5 + "h " + minutes5 + "m " + seconds5 + "s ";
    if (t_5 < 0) {
        clearInterval(x);
        document.getElementById("comez_event").innerHTML = "COMEZ EVENT TONIGHT!";
    }

    document.getElementById("mday").innerHTML = days6 + "d " +
        hours6 + "h " + minutes6 + "m " + seconds6 + "s ";
    if (t_6 < 0) {
        clearInterval(x);
        document.getElementById("mday").innerHTML = "HAPPY MOTHERS DAY!";
    }

    document.getElementById("ryanbday").innerHTML = days7 + "d " +
        hours7 + "h " + minutes7 + "m " + seconds7 + "s ";
    if (t_7 < 0) {
        clearInterval(x);
        document.getElementById("ryanbday").innerHTML = "HAPPY BIRTHDAY RYAN!";
    }
}, 1000);
