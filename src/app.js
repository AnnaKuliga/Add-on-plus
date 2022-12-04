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
    if (event.target.value === "Warsaw") {
      alert(`It is ${warsawTimezone} in ${event.target.value}`);
    }

  if (event.target.value === "New York") {
    alert(`It is ${newYorkTimezone} in ${event.target.value}`);
  }
  if (event.target.value === "Sydney") {
    alert(`It is ${sydneyTimezone} in ${event.target.value}`);
  }
}

let city = document.querySelector("#cities");
city.addEventListener("change", showTimezone);
