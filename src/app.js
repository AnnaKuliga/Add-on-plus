function showTimezone(event) {
  let warsawTimezone = moment()
    .tz("Europe/Warsaw")
    .format("dddd, MMMM D YYYY h:mm a");

  let newYorkTimezone = moment()
    .tz("America/New_York")
    .format("dddd, MMMM D YYYY h:mm a");

  let sydneyTimezone = moment()
    .tz("Australia/Sydney")
    .format("dddd, MMMM D YYYY h:mm a");

  if (event.target.value.length > 0)
    if (event.target.value === "warsaw") {
      alert(`It is ${warsawTimezone}`);
    }

  if (event.target.value === "new-york") {
    alert(`It is ${newYorkTimezone}`);
  }
  if (event.target.value === "sydney") {
    alert(`It is ${sydneyTimezone}`);
  }
}

let city = document.querySelector("#cities");
city.addEventListener("change", showTimezone);
