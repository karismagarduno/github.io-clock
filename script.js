function showDate(){
    var date = new Date();
    var hours = date.getHours();
    var years = date.getFullYear();
    var mins = date.getMinutes();
    var mon = date.getMonth();
    var days = date.getDate();
    var day = date.getDay();
    var secs = date.getSeconds();
    var endOfDay;
    var session = "AM";

if (mon == 0){mon = "January"};
if (mon == 1){mon = "Febuary"};
if (mon == 2){mon = "March"};
if (mon == 3){mon = "April"};
if (mon == 4){mon = "May"};
if (mon == 5){mon = "June"};
if (mon == 6){mon = "July"};
if (mon == 7){mon = "August"};
if (mon == 8){mon = "September"};
if (mon == 9){mon = "October"};
if (mon == 10){mon = "November"};
if (mon == 11){mon = "December"};

if(day == 0){day = "Sunday"};
if(day == 1){day = "Monday"};
if(day == 2){day = "Tuesday"};
if(day == 3){day = "Wednesday"};
if(day == 4){day = "Thursday"};
if(day == 5){day = "Friday"};
if(day == 6){day = "Saturday"};

if(days == 1){endOfDay = "st"};
if(days == 2){endOfDay = "nd"};
if(days == 3){endOfDay = "rd"};
if(days == 21){endOfDay = "st"};
if(days == 22){endOfDay = "nd"};
if(days == 23){endOfDay = "rd"};
if(days == 31){endOfDay = "st"};
if(days > 3 || days < 21 || days > 23){endOfDay = "th"};
days += endOfDay;

document.getElementById("MyDay").innerHTML = day + ", " + mon + " " + days + ", " + years;

/* Time Logic */
    if (hours >= 12)
    {
        session = "PM";
    }

    if (hours == 0)
    {
        hours = 12;
    }

    if (hours > 12)
    {
        hours -= 12;
    }

    hours = (hours < 10)? "0" + hours:hours;
    mins = (mins < 10)? "0" + mins:mins;
    secs = (secs<10)? "0" + secs:secs;

    let time= `${hours} : ${mins} : ${secs}  ${session}`;

    document.getElementById("MyTime").innerHTML = time;

    setTimeout(showDate, 1000);
}


showDate();