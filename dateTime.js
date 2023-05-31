// add an ordinal suffix to the day number (e.g. 1st, 2nd, 3rd, 4th)
function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

// add a leading zero to the minute or second if it's less than 10
function padZero(num) {
  return num < 10 ? `0${num}` : num;
}

function displayDateTime() {
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'long' });
  const day = now.getDate();
  const year = now.getFullYear();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const amOrPm = hour >= 12 ? 'pm' : 'am';
  const hour12 = hour % 12 || 12; // convert hour to 12-hour format

  const dateStr = `${month} ${day}${getOrdinalSuffix(day)} ${year}`;
  const timeStr = `${hour12}:${padZero(minute)}:${padZero(second)} ${amOrPm}`;

  const dateTimeStr = `${dateStr}, ${timeStr}`;
  document.getElementById('date-time').textContent = dateTimeStr;
}

// call the function once to display the initial date and time
displayDateTime();

// call the function every second to update the date and time in real time
setInterval(displayDateTime, 1000);
