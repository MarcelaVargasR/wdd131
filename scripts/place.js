function calculateWindChill(temperature, windSpeed) {
  const windChill =
    temperature <= 10 && windSpeed > 4.8
      ? Math.round(
          13.12 +
            0.6215 * temperature -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temperature * Math.pow(windSpeed, 0.16)
        )
      : "N/A";
  return windChill;
}

function displayWindChill() {
  const temperatureStr = document.querySelector(
    "#weather table tr:nth-child(1) td"
  ).innerText;
  const temperature = parseInt(temperatureStr);
  const windSpeedStr = document.querySelector(
    "#weather table tr:nth-child(3) td"
  ).innerText;
  const windSpeed = parseInt(windSpeedStr);

  const windChill = calculateWindChill(temperature, windSpeed);
  const windChillElement = document.getElementById("windChill");
  windChillElement.innerText =
    windChill !== "N/A" ? `${windChill} °C` : windChill;
}

window.onload = displayWindChill;

// FOOTER
const getCurrentYear = () => {
  return new Date().getFullYear();
};
document.querySelector("#currentyear").textContent = getCurrentYear();

// last modification

const short = document.querySelector("#last-mod");
const today = new Date();

short.innerHTML = `${new Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
}).format(today)}`;
