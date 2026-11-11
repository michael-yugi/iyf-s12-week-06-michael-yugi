# IYF Season 12 – Week 6: Asynchronous JavaScript

## 🌐 Live Demo

[http://127.0.0.1:5501/index.html)](https://michael-yugi.github.io/iyf-s12-week-06-michael-yugi/)

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
