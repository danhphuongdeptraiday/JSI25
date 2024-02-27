fetch("https://geocoding-api.open-meteo.com/v1/search?name=Hanoi")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data.results[0].latitude);
    console.log(data.results[0].longitude);

    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=21.0245&longitude=105.84117&current_weather=true"
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data_weather) {
        console.log(data_weather.current_weather.temperature);
      });
  });

let t = 10;
// console.log("Tôi năm nay học lớp " + t + " đó");
// console.log(`Tôi năm nay học lớp ${t} đó`);
