import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const OPENWEATHER_API_KEY = process.env.API_KEY; // <-- Replace with your OpenWeatherMap API key

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { weather: null, advice: null, error: null });
});

app.post("/", async (req, res) => {
  const city = req.body.city;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`
    );
    const data = response.data;
    const temp = data.main.temp;
    const weather = data.weather[0].main;
    const desc = data.weather[0].description;

    // Advice logic
    let advice = "";
    if (weather.toLowerCase().includes("rain")) {
      advice = "Carry an umbrella!";
    } else if (weather.toLowerCase().includes("clear") && temp > 25) {
      advice = "Apply sunscreen!";
    } else if (temp < 10) {
      advice = "Wear woolens properly!";
    } else {
      advice = "Have a nice day!";
    }

    res.render("index", {
      weather: `Weather in ${city}: ${desc}, ${temp}°C`,
      advice,
      error: null
    });
  } catch (error) {
    console.log("Error fetching weather data:", error.message);
    res.render("index", {
      weather: null,
      advice: null,
      error: "City not found or API error."
    });
  }
});

app.listen(port, () => {
  console.log(`Weather app running at http://localhost:${port}`);
});