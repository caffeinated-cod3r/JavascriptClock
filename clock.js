console.log('this is clock.js');


function updateClock(){
    // Get the current Date
    let currentTime = new Date();

    // Extract hour, minute and seconds from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();


    // Pad 0 if minutes or second is less than 10(single digit)
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;


    // Choose AM / PM as per the time of the day
    let timeofDay = (currentHour < 12) ? "AM" : "PM";

    // convert railway clock to AM / PM clock
    currentHour = (currentHour>12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour ==0) ? 12 : currentHour;

    // Prepare the time string from hour, minute and seconds
    let currentTimeStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeofDay;


    // Insert the time string inside the DOM
    document.getElementById("clock").innerHTML = currentTimeStr;

}
