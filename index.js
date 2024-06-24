    function select(){

    const city = document.getElementById("city").value;
    const myApiKey = '04c2da5ffc8ec18ecedd45d8daba00b7';
  

    const theAPIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric`;

    fetch(theAPIURL)
      .then((response) => {
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
            
        return response.json(); 
      })

      .then((data) => {
        console.log(data) ;

        document.getElementById(
          "location"
        ).textContent = `${data.name}, ${data.sys.country}`;

        document.getElementById(
          "temperature"
        ).textContent = `${data.main.temp}°C`;

        document.getElementById("description").textContent =
          data.weather[0].main;

        document.getElementById(
          "pressure"
        ).textContent = `${data.main.pressure} hPa`;

        document.getElementById(
          "humidity"
        ).textContent = `${data.main.humidity} %`;

        document.getElementById(
          "wind"
        ).textContent = `${data.wind.speed} km/h`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
