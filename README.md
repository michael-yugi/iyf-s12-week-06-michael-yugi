# IYF Season 12 – Week 6: Asynchronous JavaScript

## 🌐 Live Demo

[View Live Weather Dashboard](http://127.0.0.1:5501/index.html)

> **Note:** The link above is a local development URL and only works on your computer while Live Server is running. Replace it with your GitHub Pages URL after deployment.

---

## 📖 Overview

Week 6 focuses on mastering asynchronous JavaScript, an essential skill for building modern web applications that communicate with APIs and handle operations without blocking the browser.

Throughout this week, I explored callbacks, Promises, async/await, the Fetch API, API data handling, and DOM manipulation.

The main deliverable was building a **Weather Dashboard** using the OpenWeatherMap API.

## 🎯 Learning Objectives

By completing this week's activities, I learned how to:

- Understand synchronous and asynchronous JavaScript.
- Work with callback functions.
- Identify and avoid callback hell.
- Create and use JavaScript Promises.
- Implement Promise chaining.
- Use `Promise.all()`, `Promise.race()`, and `Promise.allSettled()`.
- Write asynchronous functions using async/await.
- Handle errors using try/catch.
- Fetch data from external APIs.
- Display API data dynamically in the DOM.
- Make POST requests using the Fetch API.
- Implement search and filtering functionality.
- Store and retrieve information using localStorage.

## 📚 Lessons Covered

### Lesson 11: Callbacks, Promises & Async/Await

This lesson introduced asynchronous programming and different approaches to handling operations that take time to complete.

**Tasks completed:**

- Task 11.1: Understanding Asynchronous JavaScript.
- Task 11.2: Callback Hell and Introduction to Promises.
- Task 11.3: Promise Chaining.
- Task 11.4: Async/Await.

**Key concepts learned:**
- Synchronous vs asynchronous execution.
- Callback functions.
- Callback hell and how to avoid it.
- Promise creation, resolution, and rejection.
- Promise chaining.
- Parallel execution using Promise.all().
- Handling asynchronous errors.
- Async/await syntax.

### Lesson 12: Working with APIs

This lesson focused on communicating with external APIs and displaying retrieved information on web pages.

**Tasks completed:**

- Task 12.1: Fetch API Basics.
- Task 12.2: Display API Data in the DOM.
- Task 12.3: POST Requests.
- Task 12.4: Search and Filter.

**Key concepts learned:**
- Using the Fetch API.
- Working with JSON data.
- Handling HTTP responses.
- Displaying API data dynamically.
- Implementing loading indicators.
- Handling network errors.
- Submitting POST requests.
- Searching and filtering API data.

## 🌦️ Mini Project: Weather Dashboard

The main project for Week 6 was building a Weather Dashboard using the OpenWeatherMap API.

The application allows users to search for cities and view their current weather information.

### Features

- **City Search:** Search for weather information using a city name.
- **Current Temperature:** Display temperature in Celsius.
- **Weather Conditions:** Display weather descriptions and icons.
- **Feels Like:** Show the perceived temperature.
- **Humidity:** Display humidity percentage.
- **Wind Speed:** Show current wind speed.
- **Atmospheric Pressure:** Display atmospheric pressure.
- **Loading State:** Show a loading indicator while fetching weather information.
- **Error Handling:** Display appropriate messages for invalid cities and network problems.
- **Recent Searches:** Save the last five searched cities.
- **Search History:** Allow users to search again by clicking previously searched cities.
- **Local Storage:** Preserve recent searches using browser localStorage.

### API Used

**OpenWeatherMap API**

The application retrieves weather information using the OpenWeatherMap Current Weather API.

API endpoint:

```text
https://api.openweathermap.org/data/2.5/weather
```

Temperature measurements are returned in Celsius using the metric units parameter.

### API Key Security

The API key is stored separately in `config.js`, which is excluded from Git using `.gitignore`.

A `config.example.js` file is provided as a template.

For deployment, GitHub Actions uses a repository secret named `OPENWEATHER_API_KEY` to generate `config.js` during the deployment process.

This prevents the actual API key from being committed to the Git repository.

## 🗓️ Daily Challenges

The following daily challenges were part of my Week 6 practice:

| Day | Challenge | Concepts Practiced |
|---|---|---|
| Day 1 | Delayed Promise | Creating Promises and setTimeout |
| Day 2 | Promise Chain | Promise chaining and execution timing |
| Day 3 | Error Handling | Handling API errors and fallback data |
| Day 4 | Rewrite with Async/Await | Converting callbacks into async/await |
| Day 5 | Parallel Fetches | Promise.allSettled() and parallel API requests |

## 🛠️ Technologies Used

- **HTML5** – Structuring the application.
- **CSS3** – Styling and responsive layouts.
- **JavaScript (ES6+)** – Application logic and asynchronous programming.
- **Fetch API** – Retrieving external API data.
- **OpenWeatherMap API** – Providing weather information.
- **JSON** – Handling API responses.
- **localStorage** – Saving recent search history.
- **Git & GitHub** – Version control and repository management.
- **GitHub Actions** – Automated deployment.
- **GitHub Pages** – Hosting the live application.

## 📂 Project Structure

```text
iyf-s12-week-06-michael-yugi/
│
├── index.html
├── styles.css
├── app.js
├── config.example.js
├── .gitignore
├── README.md
│
├── lesson-11-exercise.js
│
├── daily-challenges/
│   ├── day-1/
│   ├── day-2/
│   ├── day-3/
│   ├── day-4/
│   └── day-5/
│
└── .github/
    └── workflows/
        └── deploy.yml
```

*Note: The structure above represents the expected organization. Adjust it to match the actual files and folders in your repository.*

## 🚀 How to Run the Project Locally

Follow these steps to run the Weather Dashboard on your computer.

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-GITHUB-USERNAME/iyf-s12-week-06-YOUR-GITHUB-USERNAME.git
```

### 2. Open the Project Folder

```bash
cd iyf-s12-week-06-YOUR-GITHUB-USERNAME
```

### 3. Configure the API Key

- Sign up for an API key at [OpenWeatherMap](https://openweathermap.org/api).
- Copy `config.example.js` and rename the copy to `config.js`.
- Open `config.js` and add your API key.

Example:

```javascript
const API_KEY = "YOUR_OPENWEATHER_API_KEY";
```

**Important:** Never commit your actual `config.js` file or expose your API key in Git history.

### 4. Run the Application

Open `index.html` using the VS Code Live Server extension.

Enter a city name in the search field and click Search to retrieve its weather information.

## 🚀 Deployment

The project is deployed using GitHub Pages and GitHub Actions.

The deployment process involves:

1. Adding `OPENWEATHER_API_KEY` under GitHub repository secrets.
2. Configuring GitHub Pages to use GitHub Actions.
3. Creating the deployment workflow in `.github/workflows/deploy.yml`.
4. Pushing changes to the `main` branch.
5. Allowing GitHub Actions to generate `config.js` and deploy the application.

Once deployment succeeds, the application becomes accessible through its GitHub Pages URL.

## ✅ Week 6 Submission Checklist

- [x] Understand synchronous and asynchronous JavaScript.
- [x] Create and use Promises.
- [x] Understand callback functions and callback hell.
- [x] Implement Promise chaining.
- [x] Use Promise.all() and Promise.race().
- [x] Write async/await functions.
- [x] Handle errors using try/catch.
- [x] Work with the Fetch API.
- [x] Handle loading and error states.
- [x] Display API data in the DOM.
- [x] Practice POST requests.
- [x] Implement search and filtering.
- [x] Build the Weather Dashboard.
- [x] Practice localStorage.
- [x] Complete daily challenges.
- [x] Configure GitHub Actions deployment.

## 💡 Challenges and Lessons Learned

During this week, I gained practical experience working with asynchronous JavaScript and external APIs.

Some of the important lessons I learned include:

- Why asynchronous programming is important in modern web development.
- How Promises make asynchronous code easier to manage.
- How async/await improves code readability.
- How to retrieve and process data from external APIs.
- How to handle errors and unexpected API responses.
- How to update HTML elements dynamically using JavaScript.
- Why API keys should not be committed to public repositories.
- How GitHub Actions can automate application deployment.

## 🎓 Conclusion

Week 6 was an important step in my JavaScript learning journey. I gained a better understanding of asynchronous programming, API integration, error handling, and dynamic web applications.

Building the Weather Dashboard helped me apply the concepts learned throughout the week in a practical project.

I look forward to applying these skills in more advanced JavaScript projects and future web development assignments.

---

**Author:** Michael Yugi  
**Program:** IYF Weekend Academy – Season 12  
**Focus:** JavaScript and Web Development
