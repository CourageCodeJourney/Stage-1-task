function displayCurrentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const currentDay = daysOfWeek[now.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = "Current Day of the Week: " + currentDay;
}

function displayUTCTime() {
    const now = new Date();
    const utcTime = now.toISOString().split('T')[1].split('.')[0]; // Extract only the time part
    document.querySelector('[data-testid="currentUTCTime"]').textContent = "Current UTC Time: " + utcTime;
}

// Trigger the function on page load
displayCurrentDay();
displayUTCTime();
