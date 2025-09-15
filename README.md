# Weather Advisor App

A simple Node.js weather application that tells you today's weather and gives advice on whether to carry an umbrella, apply sunscreen, or wear woolens.

## Features

- Enter any city to get current weather information.
- Smart advice based on weather and temperature:
  - **Rainy:** Carry an umbrella!
  - **Hot & Sunny:** Apply sunscreen!
  - **Cold:** Wear woolens properly!
  - **Other:** Have a nice day!
- Clean, responsive UI.

## Setup

1. **Clone the repository**  
   ```
   git clone <your-repo-url>
   cd weather-app
   ```

2. **Install dependencies**  
   ```
   npm install
   ```

3. **Get an OpenWeatherMap API Key**  
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api).
   - Copy your API key.

4. **Configure your API key**  
   - Open `index.js`.
   - Replace `YOUR_API_KEY` with your actual API key.

5. **Run the app**  
   ```
   npm start
   ```

6. **Visit in browser**  
   - Go to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
weather-app/
├── public/
│   └── styles.css
├── views/
│   └── index.ejs
├── index.js
├── package.json
```

## License

MIT

---

**Made with Node.js, Express, EJS, and OpenWeatherMap