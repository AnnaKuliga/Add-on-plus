function showTimezone() {
  //London
  let londonTimezone = moment()
    .tz("Europe/London")
    .format("dddd, MMMM D YYYY h:mm:ss a [</br>] Z");
  let londonElement = document.querySelector(".currentTimeL");
  londonElement.innerHTML = londonTimezone;

  // New York
  let newYorkTimezone = moment()
    .tz("America/New_York")
    .format("dddd, MMMM D YYYY h:mm:ss a [</br>] Z");
  let newYorkElement = document.querySelector(".currentTimeNY");
  newYorkElement.innerHTML = newYorkTimezone;

  // Sydney
  let sydenyTimezone = moment()
    .tz("Australia/Sydney")
    .format("dddd, MMMM D YYYY h:mm:ss a [</br>] Z");
  let sydneyElement = document.querySelector(".currentTimeS");
  sydneyElement.innerHTML = sydenyTimezone;

  // Tokyo
  let tokyoTimezone = moment()
    .tz("Asia/Tokyo")
    .format("dddd, MMMM D YYYY h:mm:ss a [</br>] Z");
  let tokyoElement = document.querySelector(".currentTimeT");
  tokyoElement.innerHTML = tokyoTimezone;
}
showTimezone();
setInterval(showTimezone, 1000);
