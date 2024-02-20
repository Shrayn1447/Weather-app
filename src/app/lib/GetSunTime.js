export function GetSunTime(second) {
    let unix_timestamp = second; 
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime;
  }