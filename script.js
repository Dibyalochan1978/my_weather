const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const weatherInfo = document.getElementById("weatherInfo");

searchButton.addEventListener("click", function() {
    const city = cityInput.value;
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'cae949c7badbaccd6233ce8093a0829d';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const { name, main, weather } = data;
            const temperature = main.temp;
            const description = weather[0].description;

            weatherInfo.innerHTML = `
                <h2>${name}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            weatherInfo.innerHTML = "Error fetching weather data.";
        });
});
