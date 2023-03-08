function updateClock() {
    // Get the current time
    const now = new Date();
  
    // Format the time as a string in 24-hour format
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    // Update the clock element with the time string
    const clockElement = document.getElementById("clock");
    clockElement.textContent = timeString;
  }
  
  // Call the updateClock function every second
  setInterval(updateClock, 1000);
  