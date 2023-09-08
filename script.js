const desiredTime = new Date();
desiredTime.setUTCHours(8);
desiredTime.setUTCMinutes(15);
desiredTime.setUTCSeconds(0);

const timestamp = desiredTime.getTime();

const timeElement = document.getElementById("time");
timeElement.innerHTML = timestamp.toString();

console.log(timestamp);

document.addEventListener("DOMContentLoaded", function () {
    // Get the current date and time
    const currentDate = new Date();
  
    // Update the day of the week
    const dayOfWeekElement = document.getElementById("dayOfWeek");
    const options = { weekday: "long" };
    const dayOfWeek = currentDate.toLocaleDateString("en-US", options);
    dayOfWeekElement.textContent = dayOfWeek;
  
    // Update the UTC time
    const timeElement = document.getElementById("time");
    const timestamp = currentDate.getTime();
    timeElement.textContent = timestamp.toString();
  });
  