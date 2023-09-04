export function getCurrentTime() {
  const months = [
    'Jan',
    'Feb',
    'March',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const date = new Date();
  const day = addZero(date.getDate());
  const month = months[date.getMonth()];
  const year = addZero(date.getFullYear());
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());
  const seconds = addZero(date.getSeconds());

  const currentDate
    = `${day} ${month} ${year}` + ` ${hours}:${minutes}:${seconds}`;

  return currentDate;
}

function addZero(number: number): string {
  if (number < 10) {
    return `0${number}`;
  }

  return number.toString();
}
